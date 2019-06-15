import React from "react";

const UserProfile = ({ user }) => {
  const { userName } = user;
  return (
    <div className="user-profile">
      <h3>
        {userName.title && (userName.title === "mr" ? "Mr" : "Mrs")}{" "}
        {userName.first} {userName.last}
      </h3>

      <img className="profile-image" src={user.picture.large} alt="" />
      <dl>
        <dt>Email:</dt>
        <dd>{user.email}</dd>
        <dt>Phone:</dt>
        <dd>{user.phone}</dd>
        <dt>Cell:</dt>
        <dd>{user.cell}</dd>
      </dl>
    </div>
  );
};

export default UserProfile;
