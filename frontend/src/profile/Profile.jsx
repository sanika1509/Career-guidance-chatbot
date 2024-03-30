import img from "./user-avator.png";
import "./profile.css";
import { useState } from "react";

export default function Profile(props) {
  const [edit, setEditMode] = useState(true);
  const [btnText, setEditModeButtonText] = useState("Edit");
  const [user, setProfile] = useState({
    firstName: "Sanika",
    lastName: "Patil",
    username: "Sanika35",
    email: "Sanika@123",
  });

  // update the profile later by fetching from backend

  return (
    <>
      <div className="profile-parent container">
        <div className="major-inner-container">
          <div className="profile-header h3 mb-4">Your Profile</div>
          <div className="profile-inner-centered d-flex">
            <div className="user-img m-3">
              <img src={img} alt="Image" className="image-content" />
            </div>
            <div className="form-details m-3">
              <label htmlFor="name" style={{ marginTop: "-20px" }}>
                First name
              </label>
              <input
                type="first_name"
                className="input form-control"
                placeholder="First Name"
                disabled={edit}
                value={user.firstName}
              />

              <label htmlFor="name">Last name</label>
              <input
                type="last_name"
                className="input form-control"
                placeholder="Last Name"
                disabled={edit}
                value={user.lastName}
              />

              <label htmlFor="username">Username</label>
              <input
                type="username"
                className="input form-control"
                placeholder="username"
                disabled={edit}
                value={user.username}
              />

              <label htmlFor="email">Email</label>
              <input
                type="first_name"
                className="input form-control"
                placeholder="First Name"
                disabled={edit}
                value={user.email}
              />

              <button
                className="btn btn-sm form-control btn-primary mt-4"
                onClick={(e) => {
                  if(btnText === 'Edit') setEditModeButtonText('Cancel');
                  else setEditModeButtonText('Edit');
                  setEditMode(!edit);
                }}
              >
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
