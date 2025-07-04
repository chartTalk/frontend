import React from "react";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";

const ChatPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-white">
        <ChatHeader />
      </div>
    </div>
  );
};

export default ChatPage;
