import React from "react";
import PropTypes from "prop-types";
import listFriendStyle from "../../CSS/components/friends/ListFriends.module.css";
import { FriendListItem } from "./friendlistitem";

export const FriendList = ({ friends, title }) => {
  const listStyle = [listFriendStyle.friend_list];
  return (
    <div className="container">
      {title.length === 0 ? (
        <h2>"Upload Title"</h2>
      ) : (
        <h2 className="h2 div-friends-h2">{title}</h2>
      )}

      <ul className={listStyle}>
        <FriendListItem friends={friends} />
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};
