import React, { useState, useEffect, useRef } from "react";
import ReplyMessage from "../message/replyMessage/replyMessage";
import UserMessage from "../message/userMessage/UserMessage";
import Navbar from "react-bootstrap/esm/Navbar";
import "./chat.css";

export default function Chat(props) {
  // Dummy data as of now
  const [messages, setMessages] = useState([]);

  const [isPreviousRequestHandled, setPrevious] = useState(true);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    // scroll to bottom
    setTimeout(() => window.scrollTo(0, 10000000), 300);
  };

  const sendMessage = (message) => {
    const updatedMessages = [...messages, { user: "user", message: message }];
    setMessages(updatedMessages);

    // Get response from the server
    setTimeout(() => {
      const updatedMessagesWithReply = [
        ...updatedMessages,
        { user: "chatbot", message: "Loading..." },
      ];
      setMessages(updatedMessagesWithReply);

      // to allow sending next response
      setPrevious(true);
    }, 2000);

  };

  const handleSendMessage = (message) => {
    if(message.length === 0) return;
    if (isPreviousRequestHandled) {
      setPrevious(false);
      sendMessage(message);
      scrollToBottom();
    }
  };

  return (
    <>
      <div className="parent-container">
        <div className="messageList">
          {messages.length === 0 ? (
            <p className="chat-no-messsages">How can I help you !</p>
          ) : (
            messages.map((message, index) => {
              if (message.user === "user")
                return <UserMessage key={index} message={message.message} />;
              else
                return <ReplyMessage key={index} message={message.message} />;
            })
          )}
        </div>

        <Navbar className="bottomNavbar m-0 bg-white shadow-sm">
          <div className="input-and-send-btn d-flex w-100">
            <input
              type="text"
              className="input-lg form-control prompt-input m-1"
              placeholder="Enter prompt here"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                    const prompt = e.target.value;
                    if(isPreviousRequestHandled) e.target.value = "";
                    handleSendMessage(prompt);
                }
              }}
            />

            <button
              className="btn btn-primary m-1"
              onClick={() => {
                const message = document.querySelector(".prompt-input").value;
                handleSendMessage(message);
              }}
              disabled={!isPreviousRequestHandled}
            >
              Send
            </button>
          </div>
        </Navbar>
      </div>
    </>
  );
}
