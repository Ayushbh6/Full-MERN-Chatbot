# MERN AI ChatBot

A full-stack AI-powered chatbot application built with the MERN stack (MongoDB, Express.js, React, Node.js) and OpenAI's API.

## Overview

This project is a modern, responsive AI chatbot application that allows users to have natural conversations with an AI assistant. The application features a beautiful user interface, real-time chat functionality, and secure user authentication.

## Features

- 🤖 AI-powered chat using OpenAI's API
- 🔐 Secure user authentication
- 💬 Real-time chat interface
- 🎨 Modern UI with dark/light theme support
- 📱 Fully responsive design
- 🔄 Real-time message updates
- 🛡️ Secure API endpoints
- 📊 User session management

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Material-UI
- React Router
- Axios
- React Context API

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- OpenAI API
- JWT Authentication

## Project Structure

```
MERN-AI-ChatBot/
├── backend/          # Backend server code
│   ├── src/         # Source files
│   ├── package.json # Backend dependencies
│   └── README.md    # Backend documentation
│
└── frontend/        # Frontend application
    ├── src/         # Source files
    ├── public/      # Static assets
    ├── package.json # Frontend dependencies
    └── README.md    # Frontend documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ayushbh6/Full-MERN-Chatbot.git
cd Full-MERN-Chatbot
```

2. Set up the backend:
```bash
cd backend
npm install
```

3. Set up the frontend:
```bash
cd ../frontend
npm install
```

4. Configure environment variables:
   - Backend: Create a `.env` file in the backend directory
   - Frontend: Create a `.env` file in the frontend directory

For detailed setup instructions, please refer to:
- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)

## Development

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- The MERN stack community for their excellent documentation and tools 