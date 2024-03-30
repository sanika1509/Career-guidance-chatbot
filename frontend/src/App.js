import "./App.css";
import Chat from "./chat/Chat";
import CustomizedNavbar from "./navbar/Navbar";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import Profile from "./profile/Profile";
import ReportGenerator from "./report/ReportGenerator";
import ChatLists from "./chatLists/chatLists";

function App() {
  return (
    <div className="App">
      <CustomizedNavbar />
      {/* <Chat /> */}
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <ReportGenerator /> */}
      <ChatLists />
    </div>
  );
}

export default App;
