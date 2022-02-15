import React from "react";
import PropTypes from "prop-types";
import listStatisticStyle from "../../CSS/components/statistic/StatisticList.module.css";
import { StatisticItem } from "./statisticItem";

export const Statistic = ({ statist, title }) => {
  const listStyle = [listStatisticStyle.list_statistic];
  return (
    <div className="container">
      {title.length === 0 ? (
        <h2>"Upload Title"</h2>
      ) : (
        <h2 className="h2 div-statistic-h2">{title}</h2>
      )}
      <ul className={listStyle}>
        <StatisticItem items={statist} />
      </ul>
    </div>
  );
};

Statistic.propTypes = {
  statist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};
