/**
 * ST Dev Solutions — Agency Backend Server & API
 * Built with Express, MongoDB Atlas (Mongoose), and Multer for Client Intakes
 */

// Fix for Windows DNS resolution for MongoDB Atlas SRV records
const dns = require('dns');
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  // fallback to system dns
}

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const STUDIO_PASSWORD = process.env.STUDIO_PASSWORD || 'Stdevsolutions1523';

// Ensure data and uploads directories exist
const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const LOCAL_DB_PATH = path.join(DATA_DIR, 'db.json');

// Local JSON DB helper
function getLocalData() {
  if (!fs.existsSync(LOCAL_DB_PATH)) {
    const initial = {
      invoices: [
        {
          id: "INV-STDS-2026-001",
          invoiceNumber: "INV/STDS/2026/001",
          receiptNumber: "REC/STDS/2026/001",
          clientName: "Dr. S. Mohapatra",
          businessName: "Aesthedent Dental & Skin Clinic",
          clientPhone: "+91 98765 00000",
          clientEmail: "contact@aesthedent.in",
          address: "Saheed Nagar, Bhubaneswar, Odisha 751007",
          milestone: "advance",
          milestoneTitle: "Milestone 1: 50% Advance Payment",
          totalProjectAmount: 15000,
          payableAmount: 7500,
          status: "DUE",
          upiId: "swadhinpanigrahi44@okhdfcbank",
          txnRef: "",
          items: [
            {
              desc: "Website UI/UX Architecture & Day-3 Working Draft Preview (Milestone 1 - 50% allocation of agreed project scope: Professional Clinic Website)",
              sac: "998314",
              amount: 7500
            }
          ],
          terms: "Payable ONLY after client approves Day 3 working draft. Pay ₹0 before seeing draft.",
          createdAt: new Date().toISOString()
        }
      ],
      ledger: [
        {
          id: "TXN-001",
          invoiceNumber: "INV/STDS/2026/001",
          clientName: "Dr. S. Mohapatra",
          businessName: "Aesthedent Dental & Skin Clinic",
          amount: 7500,
          milestone: "50% Advance (Draft Approved)",
          paymentMethod: "Google Pay / UPI",
          upiId: "swadhinpanigrahi44@okhdfcbank",
          status: "DUE",
          txnRef: "",
          date: new Date().toLocaleDateString("en-IN")
        }
      ],
      onboardings: []
    };
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(initial, null, 2), 'utf-8');
    return initial;
  }
  try {
    return JSON.parse(fs.readFileSync(LOCAL_DB_PATH, 'utf-8'));
  } catch (e) {
    return { invoices: [], ledger: [], onboardings: [] };
  }
}

function saveLocalData(data) {
  try {
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving local backup:', e.message);
  }
}

// ==========================================
// MONGOOSE SCHEMAS & MODELS
// ==========================================
const InvoiceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  invoiceNumber: { type: String, required: true },
  receiptNumber: String,
  clientName: String,
  businessName: String,
  clientPhone: String,
  clientEmail: String,
  address: String,
  milestone: String,
  milestoneTitle: String,
  totalProjectAmount: Number,
  payableAmount: Number,
  status: { type: String, default: 'DUE' },
  upiId: String,
  txnRef: String,
  items: Array,
  terms: String,
  verifiedBy: String,
  paidAt: Date,
  utrSubmittedAt: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const LedgerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  invoiceNumber: String,
  receiptNumber: String,
  clientName: String,
  businessName: String,
  amount: Number,
  milestone: String,
  paymentMethod: String,
  status: String,
  txnRef: String,
  date: String
}, { timestamps: true });

const OnboardingSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  businessName: String,
  ownerName: String,
  phone: String,
  email: String,
  industry: String,
  tagline: String,
  operatingHours: String,
  address: String,
  googleMapsUrl: String,
  primaryGoal: String,
  services: Array,
  doctorOrStaffBios: String,
  competitorOrRefLinks: String,
  domainPreference: String,
  uploadedAssets: Array,
  checklistProgress: Number,
  status: { type: String, default: 'Submitted' },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);
const LedgerModel = mongoose.model('Ledger', LedgerSchema);
const OnboardingModel = mongoose.model('Onboarding', OnboardingSchema);

// MongoDB Connection with seamless fallback
let isMongoConnected = false;
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(async () => {
      isMongoConnected = true;
      console.log('⚡ Connected to MongoDB Atlas cluster0.rd6yjeg.mongodb.net/ST-DEV-Solutions successfully!');
      
      // Seed initial invoice in MongoDB if empty
      try {
        const count = await InvoiceModel.countDocuments();
        if (count === 0) {
          const local = getLocalData();
          if (local.invoices && local.invoices.length > 0) {
            await InvoiceModel.insertMany(local.invoices);
            if (local.ledger && local.ledger.length > 0) {
              await LedgerModel.insertMany(local.ledger);
            }
            console.log('🌱 Seeded initial invoice & ledger records to MongoDB Atlas!');
          }
        }
      } catch (seedErr) {
        console.warn('Seed notice:', seedErr.message);
      }
    })
    .catch((err) => {
      console.warn('⚠️ MongoDB connection failed. Running in persistent Local Storage mode.', err.message);
      isMongoConnected = false;
    });
} else {
  console.log('ℹ️ No MONGODB_URI provided in .env. Running in persistent Local Storage mode (./data/db.json).');
}

// Multer Storage Configuration for Client Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 15 * 1024 * 1024 } // 15MB max
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Disable browser caching for development
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// Serve static frontend files
app.use(express.static(__dirname));
app.use('/uploads', express.static(UPLOADS_DIR));

// Clean URL Routing
app.get('/onboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'onboard.html'));
});

app.get('/pay', (req, res) => {
  res.sendFile(path.join(__dirname, 'pay.html'));
});

app.get('/studio', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ==========================================
// API ROUTES
// ==========================================

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    agency: 'ST Dev Solutions',
    database: isMongoConnected ? 'MongoDB Atlas (Connected)' : 'Local File Persistence',
    cluster: isMongoConnected ? 'cluster0.rd6yjeg.mongodb.net/ST-DEV-Solutions' : 'local',
    founders: ['Swadhin Panigrahi (Founder, +91 93379 22291)', 'Tusar (Co-Founder)'],
    location: 'Saheed Nagar, Bhubaneswar, Odisha'
  });
});

// 1. INVOICES API
// Get all invoices (Protected for Studio)
app.get('/api/invoices', async (req, res) => {
  if (isMongoConnected) {
    try {
      const invoices = await InvoiceModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: invoices.length, invoices, source: 'MongoDB Atlas' });
    } catch (e) {
      console.warn('MongoDB fetch failed, falling back to local:', e.message);
    }
  }
  const data = getLocalData();
  res.json({ success: true, count: data.invoices.length, invoices: data.invoices, source: 'Local Storage' });
});

// Get single invoice by ID or invoiceNumber (Client Pay Portal)
app.get('/api/invoices/:id', async (req, res) => {
  const query = req.params.id.trim();

  if (isMongoConnected) {
    try {
      const invoice = await InvoiceModel.findOne({
        $or: [
          { id: query },
          { invoiceNumber: query },
          { id: new RegExp('^' + query + '$', 'i') }
        ]
      });
      if (invoice) {
        return res.json({ success: true, invoice, source: 'MongoDB Atlas' });
      }
    } catch (e) {
      console.warn('MongoDB query error:', e.message);
    }
  }

  const data = getLocalData();
  const invoice = data.invoices.find(inv =>
    inv.id === query ||
    inv.invoiceNumber === query ||
    inv.invoiceNumber.replace(/\//g, '-') === query ||
    inv.id.toLowerCase() === query.toLowerCase()
  );

  if (!invoice) {
    return res.status(404).json({ success: false, message: 'Invoice not found' });
  }
  res.json({ success: true, invoice, source: 'Local Storage' });
});

// Create or update invoice from Studio
app.post('/api/invoices', async (req, res) => {
  const invData = req.body;
  if (!invData.invoiceNumber) {
    return res.status(400).json({ success: false, message: 'Invoice number is required' });
  }

  const now = new Date().toISOString();
  const record = {
    id: invData.id || ('INV-' + Date.now()),
    invoiceNumber: invData.invoiceNumber,
    receiptNumber: invData.receiptNumber || invData.invoiceNumber.replace('INV/', 'REC/'),
    clientName: invData.clientName || 'Valued Client',
    businessName: invData.businessName || 'Local Business',
    clientPhone: invData.clientPhone || '+91 98765 00000',
    clientEmail: invData.clientEmail || 'client@email.com',
    address: invData.address || 'Bhubaneswar, Odisha',
    milestone: invData.milestone || 'advance',
    milestoneTitle: invData.milestoneTitle || 'Milestone 1: 50% Advance Payment',
    totalProjectAmount: Number(invData.totalProjectAmount) || 15000,
    payableAmount: Number(invData.payableAmount) || 7500,
    status: invData.status || 'DUE',
    upiId: invData.upiId || 'swadhinpanigrahi44@okhdfcbank',
    txnRef: invData.txnRef || '',
    items: invData.items || [],
    terms: invData.terms || '50% on Day-3 draft approval, 50% on final live deployment.',
    updatedAt: now
  };

  const ledgerRecord = {
    id: 'TXN-' + record.invoiceNumber.replace(/[^a-zA-Z0-9]/g, ''),
    invoiceNumber: record.invoiceNumber,
    receiptNumber: record.receiptNumber,
    clientName: record.clientName,
    businessName: record.businessName,
    amount: record.payableAmount,
    milestone: record.milestoneTitle,
    paymentMethod: 'UPI (' + record.upiId + ')',
    status: record.status,
    txnRef: record.txnRef,
    date: new Date().toLocaleDateString('en-IN')
  };

  // 1. Save to MongoDB Atlas if connected
  if (isMongoConnected) {
    try {
      await InvoiceModel.findOneAndUpdate({ id: record.id }, record, { upsert: true, new: true });
      await LedgerModel.findOneAndUpdate({ id: ledgerRecord.id }, ledgerRecord, { upsert: true, new: true });
      console.log('✓ Invoice saved to MongoDB Atlas:', record.invoiceNumber);
    } catch (mongoErr) {
      console.error('MongoDB Atlas save error:', mongoErr.message);
    }
  }

  // 2. Always sync to local JSON backup
  const data = getLocalData();
  const existingIdx = data.invoices.findIndex(i => i.invoiceNumber === invData.invoiceNumber || i.id === invData.id);
  if (existingIdx >= 0) {
    data.invoices[existingIdx] = record;
  } else {
    data.invoices.unshift(record);
  }

  const ledgerIdx = data.ledger.findIndex(l => l.invoiceNumber === record.invoiceNumber);
  if (ledgerIdx >= 0) {
    data.ledger[ledgerIdx] = ledgerRecord;
  } else {
    data.ledger.unshift(ledgerRecord);
  }
  saveLocalData(data);

  res.json({ success: true, message: 'Invoice saved successfully', invoice: record, storedIn: isMongoConnected ? 'MongoDB Atlas + Backup' : 'Local Backup' });
});

// Client submits payment proof (UTR / Ref number)
app.post('/api/invoices/:id/submit-utr', async (req, res) => {
  const query = req.params.id.trim();
  const { txnRef, clientPhone } = req.body;

  let invoice = null;

  if (isMongoConnected) {
    try {
      invoice = await InvoiceModel.findOneAndUpdate(
        { $or: [{ id: query }, { invoiceNumber: query }] },
        {
          txnRef: txnRef || 'SUBMITTED_FOR_VERIFICATION',
          status: 'PENDING_VERIFICATION',
          utrSubmittedAt: new Date(),
          ...(clientPhone && { clientPhone })
        },
        { new: true }
      );
      if (invoice) {
        await LedgerModel.findOneAndUpdate(
          { invoiceNumber: invoice.invoiceNumber },
          { status: 'PENDING_VERIFICATION', txnRef: txnRef }
        );
      }
    } catch (e) {
      console.error('MongoDB UTR error:', e.message);
    }
  }

  // Local sync
  const data = getLocalData();
  const localInv = data.invoices.find(inv =>
    inv.id === query ||
    inv.invoiceNumber === query ||
    inv.invoiceNumber.replace(/\//g, '-') === query
  );
  if (localInv) {
    localInv.txnRef = txnRef || 'SUBMITTED_FOR_VERIFICATION';
    localInv.status = 'PENDING_VERIFICATION';
    localInv.utrSubmittedAt = new Date().toISOString();
    if (clientPhone) localInv.clientPhone = clientPhone;

    const lItem = data.ledger.find(l => l.invoiceNumber === localInv.invoiceNumber);
    if (lItem) {
      lItem.status = 'PENDING_VERIFICATION';
      lItem.txnRef = txnRef;
    }
    saveLocalData(data);
    if (!invoice) invoice = localInv;
  }

  if (!invoice) {
    return res.status(404).json({ success: false, message: 'Invoice not found' });
  }

  res.json({
    success: true,
    message: 'Payment details submitted for verification. The agency will confirm and mark your official receipt.',
    invoice
  });
});

// Agency marks payment as PAID (1-click verification)
app.post('/api/invoices/:id/verify-payment', async (req, res) => {
  const { password, txnRef, verifiedBy } = req.body;
  if (password !== STUDIO_PASSWORD) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid Studio password' });
  }

  const query = req.params.id.trim();
  let invoice = null;

  if (isMongoConnected) {
    try {
      invoice = await InvoiceModel.findOneAndUpdate(
        { $or: [{ id: query }, { invoiceNumber: query }] },
        {
          status: 'PAID',
          paidAt: new Date(),
          verifiedBy: verifiedBy || 'Swadhin Panigrahi (Founder)',
          ...(txnRef && { txnRef })
        },
        { new: true }
      );
      if (invoice) {
        await LedgerModel.findOneAndUpdate(
          { invoiceNumber: invoice.invoiceNumber },
          { status: 'PAID', ...(txnRef && { txnRef }) }
        );
        console.log('✓ Invoice marked as PAID in MongoDB Atlas:', invoice.invoiceNumber);
      }
    } catch (e) {
      console.error('MongoDB verify error:', e.message);
    }
  }

  // Local sync
  const data = getLocalData();
  const localInv = data.invoices.find(inv =>
    inv.id === query ||
    inv.invoiceNumber === query ||
    inv.invoiceNumber.replace(/\//g, '-') === query
  );
  if (localInv) {
    localInv.status = 'PAID';
    if (txnRef) localInv.txnRef = txnRef;
    localInv.paidAt = new Date().toISOString();
    localInv.verifiedBy = verifiedBy || 'Swadhin Panigrahi (Founder)';

    const lItem = data.ledger.find(l => l.invoiceNumber === localInv.invoiceNumber);
    if (lItem) {
      lItem.status = 'PAID';
      if (txnRef) lItem.txnRef = txnRef;
    }
    saveLocalData(data);
    if (!invoice) invoice = localInv;
  }

  if (!invoice) {
    return res.status(404).json({ success: false, message: 'Invoice not found' });
  }

  res.json({
    success: true,
    message: 'Invoice marked as PAID. Client can now download their marked receipt.',
    invoice
  });
});

// 2. PAYMENT LEDGER API
app.get('/api/ledger', async (req, res) => {
  let ledgerItems = [];

  if (isMongoConnected) {
    try {
      ledgerItems = await LedgerModel.find().sort({ createdAt: -1 });
    } catch (e) {
      console.warn('MongoDB ledger fetch failed:', e.message);
    }
  }

  if (ledgerItems.length === 0) {
    const data = getLocalData();
    ledgerItems = data.ledger || [];
  }

  const totalCollected = ledgerItems
    .filter(l => l.status === 'PAID')
    .reduce((sum, l) => sum + (Number(l.amount) || 0), 0);
  const pendingCollection = ledgerItems
    .filter(l => l.status !== 'PAID')
    .reduce((sum, l) => sum + (Number(l.amount) || 0), 0);

  res.json({
    success: true,
    database: isMongoConnected ? 'MongoDB Atlas' : 'Local Storage',
    summary: {
      totalCollected,
      pendingCollection,
      totalTransactions: ledgerItems.length,
      paidCount: ledgerItems.filter(l => l.status === 'PAID').length,
      pendingCount: ledgerItems.filter(l => l.status !== 'PAID').length
    },
    ledger: ledgerItems
  });
});

// 3. CLIENT ONBOARDING INTAKE API (P2)
app.post('/api/onboard', upload.fields([
  { name: 'logo', maxCount: 1 },
  { name: 'photos', maxCount: 10 },
  { name: 'menuDoc', maxCount: 2 }
]), async (req, res) => {
  const body = req.body;
  const uploadedFiles = [];
  if (req.files) {
    if (req.files.logo) {
      uploadedFiles.push({ type: 'logo', filename: req.files.logo[0].filename, original: req.files.logo[0].originalname });
    }
    if (req.files.photos) {
      req.files.photos.forEach(f => uploadedFiles.push({ type: 'photo', filename: f.filename, original: f.originalname }));
    }
    if (req.files.menuDoc) {
      req.files.menuDoc.forEach(f => uploadedFiles.push({ type: 'document', filename: f.filename, original: f.originalname }));
    }
  }

  let services = [];
  try {
    services = typeof body.services === 'string' ? JSON.parse(body.services) : (body.services || []);
  } catch (e) {
    services = [{ name: body.services || 'General Services', price: 'As agreed' }];
  }

  const submission = {
    id: 'ONB-' + Date.now(),
    businessName: body.businessName || 'Unnamed Business',
    ownerName: body.ownerName || 'Business Owner',
    phone: body.phone || '',
    email: body.email || '',
    industry: body.industry || 'Local Business',
    tagline: body.tagline || '',
    operatingHours: body.operatingHours || '9:00 AM - 8:00 PM',
    address: body.address || 'Bhubaneswar, Odisha',
    googleMapsUrl: body.googleMapsUrl || '',
    primaryGoal: body.primaryGoal || 'WhatsApp appointment & customer bookings',
    services: services,
    doctorOrStaffBios: body.doctorOrStaffBios || '',
    competitorOrRefLinks: body.competitorOrRefLinks || '',
    domainPreference: body.domainPreference || '',
    uploadedAssets: uploadedFiles,
    checklistProgress: Number(body.checklistProgress) || 100,
    status: 'Submitted',
    createdAt: new Date()
  };

  // Save to MongoDB Atlas
  if (isMongoConnected) {
    try {
      await OnboardingModel.create(submission);
      console.log('✓ Client intake recorded to MongoDB Atlas:', submission.businessName);
    } catch (mongoErr) {
      console.error('MongoDB Onboard save error:', mongoErr.message);
    }
  }

  // Save to local backup
  const data = getLocalData();
  data.onboardings.unshift(submission);
  saveLocalData(data);

  res.json({
    success: true,
    message: 'Client intake submitted successfully! The ST Dev Solutions team has received your business assets in MongoDB Atlas.',
    onboarding: submission,
    storage: isMongoConnected ? 'MongoDB Atlas' : 'Local Storage'
  });
});

// Get all client onboarding submissions (Studio)
app.get('/api/onboard', async (req, res) => {
  if (isMongoConnected) {
    try {
      const onboardings = await OnboardingModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: onboardings.length, onboardings, source: 'MongoDB Atlas' });
    } catch (e) {
      console.warn('MongoDB onboard fetch failed:', e.message);
    }
  }
  const data = getLocalData();
  res.json({
    success: true,
    count: data.onboardings.length,
    onboardings: data.onboardings,
    source: 'Local Storage'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 ST Dev Solutions Agency Platform Running!`);
  console.log(`🌐 Local Studio: http://localhost:${PORT}`);
  console.log(`📋 Client Intake: http://localhost:${PORT}/onboard`);
  console.log(`💳 Client Pay:    http://localhost:${PORT}/pay?id=INV-STDS-2026-001`);
  console.log(`=================================================`);
});
