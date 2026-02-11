import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import './ChatBot.css';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
    type?: 'text' | 'options';
    options?: string[];
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! Welcome to Red Sharc. I'm your virtual assistant. How can we help you today?",
            sender: 'bot',
            type: 'options',
            options: ['Services', 'Pricing', 'Contact Support', 'General Inquiry']
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState<'init' | 'details' | 'contact' | 'requirements' | 'end'>('init');
    const [userData, setUserData] = useState({ name: '', contact: '', requirements: '', topic: '' });
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Auto-open chatbot after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleOptionClick = (option: string) => {
        // Add user selection
        const userMsg: Message = { id: Date.now(), text: option, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setUserData(prev => ({ ...prev, topic: option }));

        // Bot response - Ask Name
        setTimeout(() => {
            const botMsg: Message = {
                id: Date.now() + 1,
                text: "Great! To connect you with the right expert, may I know your name?",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);
            setStep('details');
        }, 600);
    };

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        const userMsg: Message = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = inputValue;
        setInputValue('');

        // Bot Logic based on step
        setTimeout(() => {
            let botText = '';
            let nextStep = step;

            if (step === 'details') {
                setUserData(prev => ({ ...prev, name: currentInput }));
                botText = `Thanks ${currentInput}. Could you please share your email or phone number so we can reach you?`;
                nextStep = 'contact';
            } else if (step === 'contact') {
                setUserData(prev => ({ ...prev, contact: currentInput }));
                botText = "Got it. Finally, could you briefly describe your requirements or what you're looking for?";
                nextStep = 'requirements';
            } else if (step === 'requirements') {
                setUserData(prev => ({ ...prev, requirements: currentInput }));
                botText = "Perfect. We've received your details. Our team will review them and contact you shortly!\n\nYou can also reach us directly at +971 50 123 4567 or hello@redsharc.ae.";
                nextStep = 'end';
            }

            if (botText) {
                const botMsg: Message = {
                    id: Date.now() + 1,
                    text: botText,
                    sender: 'bot'
                };
                setMessages(prev => [...prev, botMsg]);
                setStep(nextStep);
            }
        }, 600);
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="chat-title">
                            <Bot size={20} />
                            <span>Red Sharc Assistant</span>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                <div style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</div>
                            </div>
                        ))}
                        {/* Render options if the last message from bot has options */}
                        {messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].type === 'options' && (
                            <div className="options-container">
                                {messages[messages.length - 1].options?.map((opt, i) => (
                                    <button key={i} className="option-btn" onClick={() => handleOptionClick(opt)}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-area">
                        <form className="input-form" onSubmit={handleSend}>
                            <input
                                type="text"
                                className="chat-input"
                                placeholder={step === 'init' ? "Select an option above..." : "Type your message..."}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                disabled={step === 'init' || step === 'end'}
                            />
                            <button type="submit" className="send-btn" disabled={!inputValue.trim() || step === 'init' || step === 'end'}>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default ChatBot;
