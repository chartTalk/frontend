import React from "react";

const Sidebar = () => {
  const chats = [
    "차트 1",
  ];

  return (
    <aside className="w-64 h-screen bg-sidebar text-white flex flex-col justify-between border-r border-[#2a2b2d]">
      <div className="p-4">
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded mb-6">
          + 새로운 채팅
        </button>
        <div className="space-y-2 text-sm">
          <div className="text-gray-400 mb-1">최근 차트</div>
          {chats.map((chat, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded cursor-pointer truncate"
              title={chat}
            >
              {chat}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-700 p-4 text-sm text-gray-400">
        <div className="hover:text-white cursor-pointer mb-2">환경설정</div>
        <div className="hover:text-white cursor-pointer">로그아웃</div>
      </div>
    </aside>
  );
};

export default Sidebar;
