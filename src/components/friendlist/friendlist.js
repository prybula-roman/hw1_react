import React from "react";
// import basicStyle from "./basic.module.css";

export const FriendList = ({ friends } /*followers, views, likes*/) => {
  return (
    <div className="div div-friends">
      <h2 className="h2 div-friends-h2">Upload stats</h2>
      <ul className="ul div-friends-ul">
        {friends.map((friend) => {
          return (
            <li key={friend.id} className="li div-friends-ul-li">
              <span className="span div-friends-ul-span">
                {friend.isOnline}
              </span>
              <img
                src={friend.avatar}
                alt="User avatar"
                width="48"
                className="img div-friends-ul-img"
              />
              <p className="p div-friends-ul-p">{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
