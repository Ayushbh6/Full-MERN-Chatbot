# MERN AI ChatBot Frontend

A modern, responsive frontend for the MERN AI ChatBot application built with React, TypeScript, and Vite.

## Features

- Modern UI with dark/light theme support
- Real-time chat interface
- Responsive design for all devices
- Type-safe development with TypeScript
- Fast development with Vite
- State management with React Context
- Secure authentication flow
- Error handling and loading states

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend server running (see backend README)

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the frontend directory with the following variables:
```env
VITE_API_URL=http://localhost:5000
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be created in the `dist` directory.

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── services/       # API service functions
│   ├── styles/         # Global styles and theme
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
