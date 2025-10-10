// Chatbot Type Definitions

export interface Message {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: Date;
    isStreaming?: boolean;
}

export interface ChatSession {
    id: string;
    messages: Message[];
    createdAt: Date;
    userEmail?: string;
    userName?: string;
}

export interface ChatContextData {
    companyName: string;
    services: string[];
    expertise: string[];
    contact: {
        email: string;
        linkedin: string;
        website: string;
    };
}

export interface GeminiRequest {
    message: string;
    conversationHistory: Message[];
    userContext?: {
        email?: string;
        name?: string;
    };
}

export interface GeminiResponse {
    response: string;
    conversationId?: string;
    suggestedActions?: string[];
}

export interface ChatState {
    isOpen: boolean;
    messages: Message[];
    isLoading: boolean;
    error: string | null;
    sessionId: string;
}

export type ChatAction =
    | { type: 'TOGGLE_CHAT' }
    | { type: 'OPEN_CHAT' }
    | { type: 'CLOSE_CHAT' }
    | { type: 'ADD_MESSAGE'; payload: Message }
    | { type: 'UPDATE_MESSAGE'; payload: { id: string; content: string } }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: 'CLEAR_MESSAGES' }
    | { type: 'LOAD_HISTORY'; payload: Message[] };
