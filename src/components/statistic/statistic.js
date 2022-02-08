import React from "react";

export const Statistic = ({ statist } /*followers, views, likes*/) => {
  return (
    <div className="div div-statistic">
      <h2 className="h2 div-statistic-h2">Upload stats</h2>
      <ul className="ul div-statistic-ul">
        {statist.map((elem) => {
          return (
            <li key={elem.id} className="li div-statistic-ul-li">
              <span className="span div-statistic-ul-span">{elem.label}</span>
              <span className="span div-statistic-ul-span">
                {elem.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
