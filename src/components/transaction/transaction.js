import React from "react";
// import basicStyle from "./basic.module.css";
export const Transaction = ({ trans }) => {
  return (
    <table className="table table-transaction">
      <thead className="table-thead table-transaction-thead">
        <tr className="table-thead-tr table-transaction-thead-tr">
          <th className="table-thead-th table-transaction-thead-th">Type</th>
          <th className="table-thead-th table-transaction-thead-th">Amount</th>
          <th className="table-thead-th table-transaction-thead-th">
            Currency
          </th>
        </tr>
      </thead>
      <tbody className="table-tbody table-transaction-tbody">
        {trans.map((elem, index) => {
          console.log(index);
          return (
            <tr
              key={elem.id}
              className="table-tbody-tr table-transaction-tbody-tr"
            >
              <td className="table-tbody-td table-transaction-tbody-td">
                {elem.type}
              </td>
              <td className="table-tbody-td table-transaction-tbody-td">
                {elem.amount}
              </td>
              <td className="table-tbody-td table-transaction-tbody-td">
                {elem.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
