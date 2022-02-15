import React from "react";
import PropTypes from "prop-types";
import { Stats } from "./profileStats";
import cardItemStyle from "../../CSS/components/profile/CardItem.module.css";
import cardBoxStyle from "../../CSS/components/profile/CardBox.module.css";
import cardImgStyle from "../../CSS/components/profile/CardImg.module.css";

export const Profile = ({ user }) => {
  const cardStyle = [cardItemStyle.card];
  const boxStyle = [cardBoxStyle.card__box];
  return (
    <div className={cardStyle}>
      <img
        src={user.avatar}
        alt="User avatar"
        className={cardImgStyle.card__img}
        width="270"
        height="260"
      />
      <div className={boxStyle}>
        <p className="p div-profile-p">{user.username}</p>
        <p className="p div-profile-p">{user.tag}</p>
        <p className="p div-profile-p">{user.location}</p>
      </div>
      <Stats stats={user.stats} />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
