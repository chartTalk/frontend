import React, { useRef, useState } from "react";
import useChat from "../hooks/useChat";
import { uploadImage } from "../api/upload";

const ChatInput = () => {
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);
  const { addMessage } = useChat();

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
    e.target.value = "";
  };

  const handleSend = async () => {
    if (!file || sending) return;

    const previewUrl = URL.createObjectURL(file);
    addMessage({
      type: "user",
      imageUrl: previewUrl,
      content: "",
      pending: true,
    });

    setSending(true);

    try {
      const res = await uploadImage(file);

      addMessage({
        type: "system",
        content: res.message.result.generated_text[0],
      });
    } catch (err) {
      addMessage({
        type: "system",
        content: "이미지 업로드 실패",
      });
    } finally {
      setFile(null);
      setSending(false);
    }
  };

  return (
    <div className="border-t px-4 py-3 bg-white">
      <div className="flex items-center gap-2">
        <label className="cursor-pointer bg-gray-100 px-3 py-2 rounded border border-gray-300 hover:bg-gray-200 text-sm text-gray-700">
          파일 선택
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            ref={fileInputRef}
            disabled={sending}
          />
        </label>
        {file && (
          <span className="text-sm text-gray-600 truncate max-w-[400px]">
            {file.name}
          </span>
        )}
        <button
          onClick={handleSend}
          className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 ml-auto"
          disabled={!file || sending}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
