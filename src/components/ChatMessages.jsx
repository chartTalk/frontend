import React from "react";
import useChat from "../hooks/useChat";

const ChatMessages = () => {
  const { messages } = useChat();

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {(!messages || messages.length === 0) && (
        <div className="text-gray-400 text-center">메시지가 없습니다.</div>
      )}

      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={
            msg.type === "user"
              ? "flex flex-col items-end"
              : "flex flex-col items-start"
          }
        >
          {msg.imageUrl && (
            <img
              src={msg.imageUrl}
              alt="uploaded"
              className="max-w-[70%] h-auto max-h-[400px] rounded-lg border mb-2 object-contain"
            />
          )}
          {msg.content && msg.content.trim() !== "" && (
              <div
              className={
                (msg.type === "user"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-200 text-gray-800") +
                " px-3 py-2 rounded-xl break-words"
              }
              style={{
                maxWidth: "70%",
                minWidth: "40px",
                wordBreak: "break-word",
                display: "inline-block",
              }}
            >
              {msg.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
