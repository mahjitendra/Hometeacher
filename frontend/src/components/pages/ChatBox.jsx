import React, { useState } from "react";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { user: "You", text: input }]);
            setInput("");
        }
    };

    return (
        <div className="p-6 border rounded-lg shadow-md bg-white">
            <div className="overflow-y-auto h-64 mb-4">
                {messages.map((message, index) => (
                    <div key={index} className="mb-2">
                        <p className="font-bold">{message.user}:</p>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    className="border flex-grow p-2 rounded-lg"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
