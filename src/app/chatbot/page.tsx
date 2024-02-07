// src/app/chatbot/page.tsx
import React from 'react';

const ChatbotPage: React.FC = () => {
  return (
    <div className="chatbot-page">
      <h1>Chatbot</h1>
      <div className="input-container">
        <form>
          <input
            type="text"
            placeholder="Type your message..."
            className="input-field"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotPage;
