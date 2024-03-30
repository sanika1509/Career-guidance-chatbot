import { getUserName } from '../../utils/userManager';
import './userMessage.css';

export default function UserMessage(props) {
    return (
        <>
            <div className="message-parent mb-3 float-right">
                <div className="user-name">
                    You
                </div>
                <div className="message">
                   {props.message}
                </div>
            </div>
        </>
    );    
}