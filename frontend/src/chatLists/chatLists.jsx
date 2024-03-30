import { useState } from "react";
import "./chatLists.css";

export default function ChatLists(props) {
  const [chats, setChats] = useState([
    {
      chatTime: "01:02:23",
      chatText: "Lorem ipsum dolor set amet and many more",
      id: 1,
    },

    {
      chatTime: "01:02:23",
      chatText: "Lorem ipsum dolor set amet and many more",
      id: 2,
    },

    {
      chatTime: "01:02:23",
      chatText: "Lorem ipsum dolor set amet and many more",
      id: 3,
    },

    {
      chatTime: "01:02:23",
      chatText: "Lorem ipsum dolor set amet and many more",
      id: 4,
    },

    {
      chatTime: "01:02:23",
      chatText: "Lorem ipsum dolor set amet and many more",
      id: 5,
    },
  ]);

  //   username taken from the props or localStorage

  return (
    <>
      <div className="chatlists-parent container">
        <div className="d-flex chats-header-and-new-button mb-4">
          <h3 className="header-text ">Chats</h3>
          <button
            className="btn btn-sm btn-primary btn-outlined"
            onClick={() => alert("Creating new chat !")}
          >
            New Chat
          </button>
        </div>

        {chats.length === 0 ? (
          <p className="h1 center-text">
            No conversations so far, start new one
          </p>
        ) : (
          chats.map((chat) => {
            return (
              <div className="chat-parent d-flex " id={chat.id}>
                <div className="d-flex chat-time-and-message-parent">
                  <div className="chat-text">{chat.chatText}</div>
                  <div className="chat-time">{"Time : " + chat.chatTime}</div>
                </div>

                <div className="d-flex chats-buttons-parent">
                  <button className="btn btn-sm btn-success m-2">
                    Continue
                  </button>
                  <button className="btn btn-sm btn-light m-2">
                    Download
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
