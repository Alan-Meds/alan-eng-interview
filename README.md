# Alan Engineering Interview - Chat Application

## 🚀 Tech Stack

### Frontend (Web)
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom chat components with Radix UI primitives
- **State Management**: React hooks
- **Firebase Integration**: Firebase SDK for function calls

### Backend (Functions)
- **Runtime**: Firebase Functions with Node.js 22
- **Language**: TypeScript
- **Framework**: Firebase Functions v2
- **Admin SDK**: Firebase Admin for backend operations

## 📁 Project Structure

```
alan-eng-interview/
├── firebase.json          # Firebase project configuration
├── functions/             # Backend Firebase Functions
│   ├── src/
│   │   ├── controllers/   # Function controllers
│   │   │   ├── chat.controller.ts       # Chat message handling
│   │   │   ├── load-session.controller.ts # Session initialization
│   │   │   └── index.ts
│   │   └── index.ts
│   └── package.json
└── web/                   # Frontend Next.js application
    ├── src/
    │   ├── app/           # Next.js App Router pages
    │   ├── components/    # React components
    │   │   └── ui/        # Reusable UI components
    │   │       └── chat/  # Chat-specific components
    │   ├── hooks/         # Custom React hooks
    │   ├── lib/           # Utilities and Firebase config
    │   └── providers/     # React context providers
    └── package.json
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 22.x or higher
- npm or yarn
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project

### 1. Clone the Repository
```bash
git clone <repository-url>
cd alan-eng-interview
```

### 2. Install Dependencies

#### Frontend Dependencies
```bash
cd web
npm install
```

#### Backend Dependencies
```bash
cd ../functions
npm install
```

### 3. Firebase Configuration

1. Login to Firebase:
```bash
firebase login
```

2. Initialize Firebase (if not already done):
```bash
firebase init
```

3. Create a `.env.local` file in the `web` directory with your Firebase config:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
```

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start Firebase Emulators** (for local backend):
```bash
cd functions
npm run serve
```

2. **Start Next.js Development Server** (in a new terminal):
```bash
cd web
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 API Endpoints

### Firebase Functions

1. **`chat`** - Handles incoming chat messages
   - Input: `{ message: string }`
   - Output: `Message` object with response

2. **`loadSession`** - Loads initial chat session
   - Input: `{}`
   - Output: `{ messages: Message[], timestamp: number }`

## 🎨 UI Components

The application includes custom chat UI components:
- `ChatBubble` - Message container with variant support
- `ChatInput` - Text input for sending messages
- `ChatMessageList` - Scrollable message container
- `MessageLoading` - Loading animation for pending messages

## 🔧 Configuration

### Next.js Configuration
- Turbopack enabled for faster development builds
- TypeScript strict mode enabled
- Tailwind CSS v4 with PostCSS

### Firebase Functions Configuration
- Node.js 22 runtime
- TypeScript compilation
- ESLint with Google style guide

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Functions Documentation](https://firebase.google.com/docs/functions)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is private and intended for interview purposes.
