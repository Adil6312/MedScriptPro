# 🏥 MediScript Pro - AI-Powered Medical Prescription Reader

<div align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg?style=for-the-badge" alt="Node Version">
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome">
</div>

<div align="center">
  <h3>Transform handwritten medical prescriptions into digital format with AI-powered OCR technology</h3>
  <p>
    <a href="#features">Features</a> •
    <a href="#demo">Demo</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#api-documentation">API</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

MediScript Pro is a cutting-edge web application that digitizes handwritten medical prescriptions using advanced OCR (Optical Character Recognition) technology and AI-powered analysis. The application extracts medicine names, dosages, and frequencies from prescription images, calculates billing information, and provides medical insights through Claude AI integration.

### 🎥 Demo

![MediScript Pro Demo](https://placeholder-for-demo.gif)

[Live Demo](https://mediscript-pro-demo.com) | [Video Walkthrough](https://youtube.com/watch?v=demo)

## ✨ Features

### Core Features
- 📷 **Image Upload & Processing**: Support for JPG, PNG, and JPEG formats
- 🔍 **Advanced OCR**: Dual OCR processing (client-side and server-side) using Tesseract.js
- 💊 **Medicine Recognition**: Intelligent parsing of medicine names, potencies, and dosages
- 💰 **Automated Billing**: Real-time price calculation with tax computation
- 🤖 **AI-Powered Insights**: Integration with Claude AI for medical analysis and drug interactions
- 📊 **Database Management**: CSV/Excel upload for custom medicine pricing
- 📱 **Responsive Design**: Mobile-first approach with glassmorphism UI
- 🖨️ **Export Options**: Print-ready digital prescriptions and bills

### Advanced Features
- 🔒 **Security**: CORS, Helmet.js, rate limiting, and input validation
- 📈 **Performance**: Image preprocessing for better OCR accuracy
- 🌐 **Multi-format Support**: Handles various prescription formats
- 🔄 **Real-time Processing**: Instant results with loading animations
- 📋 **Prescription History**: Save and retrieve past prescriptions
- 🔎 **Medicine Search**: Autocomplete functionality for medicine names

## 🛠️ Tech Stack

### Frontend
- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **OCR**: Tesseract.js v4.1.1
- **Data Processing**: PapaParse v5.4.1, SheetJS v0.18.5
- **Design**: Custom CSS with glassmorphism effects

### Backend
- **Runtime**: Node.js v18+
- **Framework**: Express.js v4.18.2
- **OCR**: Tesseract.js v5.0.4
- **Image Processing**: Sharp (optional)
- **File Upload**: Multer v1.4.5
- **AI Integration**: Anthropic SDK v0.6.0
- **Security**: Helmet v7.1.0, CORS v2.8.5
- **Logging**: Winston v3.11.0

### Database
- **Development**: In-memory storage
- **Production Options**: PostgreSQL, MongoDB, Redis

## 🏗️ System Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│   Frontend      │────▶│   Backend API   │────▶│ External APIs   │
│   (Browser)     │◀────│   (Node.js)     │◀────│ (Claude AI)     │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Client-side OCR │     │ Server-side OCR │     │ Medicine DB     │
│ (Tesseract.js)  │     │ (Tesseract.js)  │     │ (In-memory)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## 🚀 Installation

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mediscript-pro.git
   cd mediscript-pro
   ```

2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your Claude AI API key
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the application**
   ```
   Open http://localhost:3000 in your browser
   ```

### Detailed Installation

<details>
<summary>Click for detailed installation steps</summary>

#### Windows

```batch
# Create project directory
mkdir mediscript-pro
cd mediscript-pro

# Clone repository
git clone https://github.com/yourusername/mediscript-pro.git .

# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
copy .env.example .env
notepad .env

# Start application
npm start
```

#### macOS/Linux

```bash
# Create project directory
mkdir mediscript-pro && cd mediscript-pro

# Clone repository
git clone https://github.com/yourusername/mediscript-pro.git .

# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
nano .env

# Start application
npm start
```

</details>

## 📖 Usage

### Basic Usage

1. **Upload Prescription Image**
   - Click on the upload area or drag and drop an image
   - Supported formats: JPG, PNG, JPEG
   - Maximum file size: 10MB

2. **View Results**
   - Digital prescription with extracted medicines
   - Automated bill calculation
   - AI-powered medical insights

3. **Export Options**
   - Print digital prescription
   - Save as PDF
   - Export bill summary

### Advanced Usage

<details>
<summary>Upload Custom Medicine Database</summary>

1. Prepare a CSV file with the following format:
   ```csv
   name,potency,price,category
   Augmentin,625mg,24.99,Antibiotic
   Panadol,500mg,6.99,Analgesic
   ```

2. Click "Upload Dataset" button
3. Select your CSV file
4. System will update medicine prices automatically

</details>

## 📚 API Documentation

### Endpoints

#### Process Prescription
```http
POST /api/prescription/process
Content-Type: multipart/form-data

Body:
- prescription: Image file (JPG/PNG)

Response:
{
  "success": true,
  "data": {
    "patientName": "John Doe",
    "medicines": [...],
    "billing": {...}
  }
}
```

#### Analyze with AI
```http
POST /api/prescription/analyze
Content-Type: application/json

Body:
{
  "prescriptionData": {...}
}

Response:
{
  "success": true,
  "insights": "AI-generated medical insights..."
}
```

#### Upload Dataset
```http
POST /api/database/upload
Content-Type: multipart/form-data

Body:
- dataset: CSV/Excel file

Response:
{
  "success": true,
  "message": "Successfully imported X medicines"
}
```

### Full API Documentation

For complete API documentation, see [API.md](./docs/API.md)

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
NODE_ENV=development
PORT=3000

# API Keys
CLAUDE_API_KEY=your-claude-api-key-here

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Logging
LOG_LEVEL=info
```

### Advanced Configuration

<details>
<summary>View all configuration options</summary>

```env
# Server
NODE_ENV=production
PORT=3000
HOST=0.0.0.0

# Database (Future)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mediscript
DB_USER=admin
DB_PASS=password

# Redis (Future)
REDIS_HOST=localhost
REDIS_PORT=6379

# API Keys
CLAUDE_API_KEY=your-key
OPENAI_API_KEY=your-key

# Security
JWT_SECRET=your-secret
SESSION_SECRET=your-secret

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100

# File Upload
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=image/jpeg,image/png

# Logging
LOG_LEVEL=debug
LOG_FILE=logs/app.log
```

</details>

## 🚢 Deployment

### Local Deployment

```bash
# Using PM2
npm install -g pm2
pm2 start backend/server.js --name mediscript-pro
pm2 save
pm2 startup
```

### Docker Deployment

```bash
# Build and run with Docker
docker build -t mediscript-pro .
docker run -p 80:3000 mediscript-pro

# Or using Docker Compose
docker-compose up -d
```

### Cloud Deployment

<details>
<summary>Deploy to Heroku</summary>

```bash
# Install Heroku CLI
# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set CLAUDE_API_KEY=your-key

# Deploy
git push heroku main
```

</details>

<details>
<summary>Deploy to Vercel</summary>

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

</details>

<details>
<summary>Deploy to Railway</summary>

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and initialize
railway login
railway init

# Deploy
railway up
```

</details>

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use ESLint for JavaScript linting
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

See also the list of [contributors](https://github.com/yourusername/mediscript-pro/contributors) who participated in this project.

## 🙏 Acknowledgments

- Tesseract.js team for the amazing OCR library
- Anthropic for Claude AI API
- Open source community for inspiration and support

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/mediscript-pro](https://github.com/yourusername/mediscript-pro)

---

<div align="center">
  Made with ❤️ by the MediScript Pro Team
  <br>
  <a href="https://github.com/yourusername/mediscript-pro/stargazers">⭐ Star us on GitHub!</a>
</div>
