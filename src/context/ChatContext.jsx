import React, { createContext, useContext, useState, useCallback } from "react";

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((msg) => {
    setMessages((prev) => [...prev, msg]);
  }, []);

  const resetMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <ChatContext.Provider value={{ messages, addMessage, resetMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat은 ChatProvider 하위에서만 사용하세요.");

  return ctx;
};
