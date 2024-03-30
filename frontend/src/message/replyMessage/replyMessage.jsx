import './replyMessage.css';

export default function ReplyMessage(props) {
    return (
        <>
            <div className="reply-message-parent mb-3 float-left">
                <div className="reply-user-name">
                    Chatbot
                </div>
                <div className="reply-message">
                   {props.message}
                </div>
            </div>
        </>
    );    
}