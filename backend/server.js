const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve frontend files from 'public' directory

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// Sample medicine database with prices
const medicineDatabase = [
    { name: "Augmentin", potency: "625mg", price: 45.00 },
    { name: "Enzoflam", potency: "1tablet", price: 25.50 },
    { name: "Panadol", potency: "40mg", price: 12.99 },
    { name: "Amoxicillin", potency: "500mg", price: 12.99 },
    { name: "Ibuprofen", potency: "400mg", price: 8.50 },
    { name: "Omeprazole", potency: "20mg", price: 15.75 },
    { name: "Metformin", potency: "500mg", price: 9.99 },
    { name: "Lisinopril", potency: "10mg", price: 11.25 }
];

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'MediScript Pro Backend',
        version: '1.0.0'
    });
});

// Process prescription endpoint
app.post('/api/prescription/process', upload.single('prescription'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: 'No prescription image uploaded'
            });
        }

        console.log('Processing prescription image:', req.file.originalname);
        console.log('File size:', req.file.size, 'bytes');
        console.log('MIME type:', req.file.mimetype);

        // Simulate OCR processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // For demo purposes, we'll return the predefined prescription data
        // In a real implementation, you would use OCR libraries like Tesseract.js
        // or cloud services like Google Vision API, AWS Textract, etc.
        
        const prescriptionData = processPrescriptionImage(req.file);
        
        res.json({
            success: true,
            data: prescriptionData,
            message: 'Prescription processed successfully'
        });

    } catch (error) {
        console.error('Error processing prescription:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process prescription: ' + error.message
        });
    }
});

// Function to process prescription image (mock implementation)
function processPrescriptionImage(file) {
    // In a real implementation, this would use OCR to extract text from the image
    // For now, we'll return the sample data you specified
    
    const medicines = [
        {
            name: 'Augmentin',
            potency: '625mg',
            frequency: 'Twice daily (Morning & Evening)',
            duration: '5 days',
            price: getMedicinePrice('Augmentin', '625mg')
        },
        {
            name: 'Enzoflam',
            potency: '1tablet',
            frequency: 'Twice daily (Morning & Evening)',
            duration: '5 days',
            price: getMedicinePrice('Enzoflam', '1tablet')
        },
        {
            name: 'Panadol',
            potency: '40mg',
            frequency: 'Twice daily (Morning & Evening)',
            duration: '5 days',
            price: getMedicinePrice('Panadol', '40mg')
        }
    ];

    // Calculate billing
    const subtotal = medicines.reduce((sum, med) => sum + med.price, 0);
    const taxRate = 0.08; // 8% tax
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Generate AI insights
    const aiInsights = generateAIInsights(medicines);

    return {
        patientName: 'Mr. Sachin Sansar',
        patientAge: '28 years',
        date: '12/12/2022',
        prescriptionId: 'RX-2022-1212',
        medicines: medicines,
        billing: {
            subtotal: parseFloat(subtotal.toFixed(2)),
            tax: parseFloat(tax.toFixed(2)),
            total: parseFloat(total.toFixed(2))
        },
        aiInsights: aiInsights,
        processingInfo: {
            imageSize: file.size,
            mimeType: file.mimetype,
            processedAt: new Date().toISOString()
        }
    };
}

// Helper function to get medicine price from database
function getMedicinePrice(name, potency) {
    const medicine = medicineDatabase.find(med => 
        med.name.toLowerCase() === name.toLowerCase() && 
        med.potency.toLowerCase() === potency.toLowerCase()
    );
    
    return medicine ? medicine.price : 15.00; // Default price if not found
}

// Generate AI insights for the prescription
function generateAIInsights(medicines) {
    const insights = [
        "• Augmentin is an antibiotic combination. Complete the full course even if symptoms improve.",
        "• Enzoflam is an anti-inflammatory. Take with food to avoid stomach irritation.",
        "• Panadol (Paracetamol) helps with pain and fever. Do not exceed recommended dosage.",
        "• Take all medications as prescribed by your doctor.",
        "• Drink plenty of water and get adequate rest.",
        "• Contact your doctor if you experience any unusual side effects.",
        "• This appears to be a comprehensive treatment for infection with pain/inflammation management."
    ];
    
    return insights.join('<br>');
}

// Get medicine database endpoint
app.get('/api/medicines', (req, res) => {
    res.json({
        success: true,
        data: medicineDatabase,
        count: medicineDatabase.length
    });
});

// Add medicine to database endpoint
app.post('/api/medicines', (req, res) => {
    try {
        const { name, potency, price } = req.body;
        
        if (!name || !potency || price === undefined) {
            return res.status(400).json({
                success: false,
                error: 'Name, potency, and price are required'
            });
        }

        const newMedicine = {
            name: name.trim(),
            potency: potency.trim(),
            price: parseFloat(price)
        };

        medicineDatabase.push(newMedicine);

        res.json({
            success: true,
            data: newMedicine,
            message: 'Medicine added successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to add medicine: ' + error.message
        });
    }
});

// Serve the frontend HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                error: 'File too large. Maximum size is 10MB.'
            });
        }
    }
    
    res.status(500).json({
        success: false,
        error: error.message || 'Internal server error'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🏥 MediScript Pro Backend Server running on http://localhost:${PORT}`);
    console.log(`📋 Health check: http://localhost:${PORT}/health`);
    console.log(`🌐 Frontend: http://localhost:${PORT}`);
    console.log(`📊 API Endpoint: http://localhost:${PORT}/api/prescription/process`);
});

module.exports = app;