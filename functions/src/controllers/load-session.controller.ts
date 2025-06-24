import { onCall } from "firebase-functions/v2/https";

interface Message {
  id: string;
  text: string;
  variant: 'sent' | 'received';
  timestamp: number;
}

export const loadSession = onCall({
  
}, async (request) => {
  const defaultMessages: Message[] = [
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      variant: 'received',
      timestamp: Date.now() - 5000,
    },
    {
      id: '2',
      text: 'I can assist you with various tasks and answer your questions.',
      variant: 'received',
      timestamp: Date.now() - 3000,
    },
    {
      id: '3',
      text: 'Feel free to ask me anything!',
      variant: 'received',
      timestamp: Date.now() - 1000,
    },
  ];
  
  return {
    messages: defaultMessages,
    timestamp: Date.now(),
  };
});
