import React from "react";

export const Statistic = ({ statist } /*followers, views, likes*/) => {
  return (
    <>
      <h2>Upload stats</h2>
      <ul>
        {statist.map((elem) => {
          return (
            <li key={elem.id}>
              <span>{elem.label}</span>
              <span>{elem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
