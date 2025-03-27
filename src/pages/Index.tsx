
import { useState } from "react";
import { MessagesList } from "@/components/chat/MessagesList";
import { MessageInput } from "@/components/chat/MessageInput";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { QuickReplyButtons } from "@/components/chat/QuickReplyButtons";
import { createFakeMessage } from "@/lib/chat-helpers";

const Index = () => {
  const [messages, setMessages] = useState([
    createFakeMessage("assistant", "👋 Hello! I'm Stor-a-gentic, your friendly storage assistant. How can I help you today?"),
  ]);
  
  const [isLoading, setIsLoading] = useState(false);

  // Quick reply options
  const quickReplies = [
    { id: "book", label: "Book a collection", action: () => handleQuickReply("I want to book a collection service") },
    { id: "hours", label: "Store hours", action: () => handleQuickReply("What are your store hours?") },
    { id: "human", label: "Talk to human", action: () => handleQuickReply("I'd like to speak with a human representative") },
    { id: "faq", label: "FAQ", action: () => handleQuickReply("Show me your frequently asked questions") },
  ];

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    // Add user message to chat
    const userMessage = createFakeMessage("user", content);
    setMessages((prev) => [...prev, userMessage]);
    
    // Show loading state
    setIsLoading(true);
    
    // TODO: Connect to actual API in future
    // Simulate a response for now
    setTimeout(() => {
      const responseContent = getSimulatedResponse(content);
      const assistantMessage = createFakeMessage("assistant", responseContent);
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickReply = (content: string) => {
    handleSendMessage(content);
  };

  // Simple response simulation for development
  const getSimulatedResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("book") || lowerQuery.includes("collection")) {
      return "I'd be happy to help you book a collection! Currently, we have slots available next week. When would you prefer us to come by?";
    } else if (lowerQuery.includes("hours") || lowerQuery.includes("time")) {
      return "Our stores are open Monday to Friday from 9am to 7pm, and on weekends from 10am to 5pm.";
    } else if (lowerQuery.includes("human") || lowerQuery.includes("representative") || lowerQuery.includes("speak")) {
      return "I'll connect you with one of our customer service representatives. Please wait a moment while I transfer your chat.";
    } else if (lowerQuery.includes("faq") || lowerQuery.includes("question")) {
      return "Here are some frequently asked questions:\n- What size storage units do you offer?\n- Do you offer climate controlled units?\n- How secure are your facilities?\n- What are your payment options?";
    } else {
      return "Thanks for your message! I'm still learning. For specific inquiries, you might want to check our FAQ section or speak with a human representative.";
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ChatHeader />
      
      <div className="flex-1 overflow-hidden flex flex-col">
        <MessagesList messages={messages} isLoading={isLoading} />
        
        <div className="p-4 border-t">
          <QuickReplyButtons options={quickReplies} />
          <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Index;
