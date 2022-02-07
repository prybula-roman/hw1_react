import React from "react";

export const Stats = ({ stats } /*followers, views, likes*/) => {
  return (
    <ul>
      {Object.entries(stats).map((elem) => {
        return (
          <li key={elem[0]}>
            <span>{elem[0]}</span>
            <span>{elem[1]}</span>
          </li>
        );
      })}
    </ul>
  );
};
