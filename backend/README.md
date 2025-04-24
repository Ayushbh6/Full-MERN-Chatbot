# AI Chatbot Backend

A powerful backend service for an AI-powered chatbot built with Node.js, Express, and TypeScript. This service integrates with OpenAI's latest API to provide intelligent responses and maintains a secure user chat history.

## Features

- 🔐 Secure authentication using JWT tokens and HTTP-only cookies
- 💾 Persistent chat history storage in MongoDB
- 🤖 Integration with OpenAI's latest responses API
- 🔄 Real-time chat capabilities
- 🛡️ Protected routes and middleware chains
- 🔒 Password encryption and secure session management

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- OpenAI API
- JWT Authentication

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   OPEN_AI_SECRET=your_openai_api_key
   OPENAI_ORAGANIZATION_ID=your_organization_id
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /chat/new` - Create a new chat message
- `GET /chat/all-chats` - Retrieve all user chats
- `DELETE /chat/delete` - Delete all user chats

## Security Features

- JWT-based authentication
- HTTP-only cookies for secure token storage
- Password hashing using bcrypt
- Protected API routes
- Input validation and sanitization

## License

MIT License - Feel free to use this project for your own purposes.

