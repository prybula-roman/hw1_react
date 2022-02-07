import React from "react";

export const FriendList = ({ friends } /*followers, views, likes*/) => {
  return (
    <>
      <h2>Upload stats</h2>
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <span>{friend.isOnline}</span>
              <img src={friend.avatar} alt="User avatar" width="48" />
              <p>{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
