import { HttpsError, onCall } from "firebase-functions/v2/https";

interface Message {
  id: string;
  text: string;
  variant: 'sent' | 'received';
  timestamp: number;
}

export const chat = onCall({
  
}, async (request) => {
  const { message } = request.data;
  
  if (!message || typeof message !== 'string') {
    throw new HttpsError("invalid-argument", "Message must be a non-empty string");
  }
  
  const response: Message = {
    id: Date.now().toString(),
    text: message,
    variant: 'received',
    timestamp: Date.now(),
  };
  
  return response;
});
