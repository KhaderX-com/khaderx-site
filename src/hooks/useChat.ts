// Custom hook for chat functionality

'use client';

import { useReducer, useCallback, useEffect } from 'react';
import { Message, ChatState, ChatAction } from '@/lib/chatbot/types';
import {
    generateId,
    saveChatHistory,
    loadChatHistory,
    clearChatHistory as clearStoredHistory,
    sanitizeInput,
    checkRateLimit,
} from '@/lib/chatbot/utils';

// Initial state
const initialState: ChatState = {
    isOpen: false,
    messages: [],
    isLoading: false,
    error: null,
    sessionId: generateId(),
};

// Reducer
function chatReducer(state: ChatState, action: ChatAction): ChatState {
    switch (action.type) {
        case 'TOGGLE_CHAT':
            return { ...state, isOpen: !state.isOpen };

        case 'OPEN_CHAT':
            return { ...state, isOpen: true };

        case 'CLOSE_CHAT':
            return { ...state, isOpen: false };

        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload],
                error: null,
            };

        case 'UPDATE_MESSAGE':
            return {
                ...state,
                messages: state.messages.map(msg =>
                    msg.id === action.payload.id
                        ? { ...msg, content: action.payload.content, isStreaming: false }
                        : msg
                ),
            };

        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };

        case 'SET_ERROR':
            return { ...state, error: action.payload, isLoading: false };

        case 'CLEAR_MESSAGES':
            return { ...state, messages: [], error: null };

        case 'LOAD_HISTORY':
            return { ...state, messages: action.payload };

        default:
            return state;
    }
}

export function useChat() {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    // Load chat history on mount
    useEffect(() => {
        const history = loadChatHistory();
        if (history.length > 0) {
            dispatch({ type: 'LOAD_HISTORY', payload: history });
        } else {
            // Add welcome message
            const welcomeMessage: Message = {
                id: generateId(),
                role: 'assistant',
                content: "👋 Hi! I'm KhaderX AI Assistant. I can help you learn about our engineering and software development services. How can I assist you today?",
                timestamp: new Date(),
            };
            dispatch({ type: 'ADD_MESSAGE', payload: welcomeMessage });
        }
    }, []);

    // Save history whenever messages change
    useEffect(() => {
        if (state.messages.length > 0) {
            saveChatHistory(state.messages);
        }
    }, [state.messages]);

    // Toggle chat window
    const toggleChat = useCallback(() => {
        dispatch({ type: 'TOGGLE_CHAT' });
    }, []);

    // Open chat window
    const openChat = useCallback(() => {
        dispatch({ type: 'OPEN_CHAT' });
    }, []);

    // Close chat window
    const closeChat = useCallback(() => {
        dispatch({ type: 'CLOSE_CHAT' });
    }, []);

    // Send a message
    const sendMessage = useCallback(async (content: string) => {
        // Sanitize input
        const sanitized = sanitizeInput(content);

        if (!sanitized) {
            dispatch({ type: 'SET_ERROR', payload: 'Please enter a message' });
            return;
        }

        // Check rate limit
        if (!checkRateLimit(10, 60000)) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Too many messages. Please wait a moment.'
            });
            return;
        }

        // Add user message
        const userMessage: Message = {
            id: generateId(),
            role: 'user',
            content: sanitized,
            timestamp: new Date(),
        };
        dispatch({ type: 'ADD_MESSAGE', payload: userMessage });

        // Set loading state
        dispatch({ type: 'SET_LOADING', payload: true });

        try {
            // Call API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: sanitized,
                    conversationHistory: state.messages,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to get response');
            }

            const data = await response.json();

            // Add assistant message
            const assistantMessage: Message = {
                id: generateId(),
                role: 'assistant',
                content: data.response,
                timestamp: new Date(),
            };
            dispatch({ type: 'ADD_MESSAGE', payload: assistantMessage });

        } catch (error) {
            console.error('Send message error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
            dispatch({
                type: 'SET_ERROR',
                payload: errorMessage
            });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    }, [state.messages]);

    // Clear chat history
    const clearHistory = useCallback(() => {
        clearStoredHistory();
        dispatch({ type: 'CLEAR_MESSAGES' });

        // Add welcome message again
        const welcomeMessage: Message = {
            id: generateId(),
            role: 'assistant',
            content: "Chat cleared! How can I help you today?",
            timestamp: new Date(),
        };
        dispatch({ type: 'ADD_MESSAGE', payload: welcomeMessage });
    }, []);

    // Clear error
    const clearError = useCallback(() => {
        dispatch({ type: 'SET_ERROR', payload: null });
    }, []);

    return {
        ...state,
        toggleChat,
        openChat,
        closeChat,
        sendMessage,
        clearHistory,
        clearError,
    };
}
