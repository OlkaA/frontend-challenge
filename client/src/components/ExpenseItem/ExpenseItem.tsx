import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Expense } from '../../types/Expense';
import '../ListOfExpenses/list.scss';
const moment = require('moment');


interface IExpenseItemProps {
  data: Expense
};

class ExpenseItem extends Component<IExpenseItemProps> {
  render() {
    const {id, merchant} = this.props.data;
    const date = moment(this.props.data.date).format("L");
    const amount = `${this.props.data.amount.value} ${this.props.data.amount.currency}`;
    const userName = `${this.props.data.user.first} ${this.props.data.user.last}`;
    const receipts = this.props.data.receipts.length || "-";
    const comment = this.props.data.comment || "-";
    return (
      <>
        <tr>
          <td data-title="Amount">{amount}</td>
          <td data-title="Date">{date}</td>
          <td data-title="Merchant">{merchant}</td>
          <td data-title="User">{userName}</td>
          <td data-title="Receipts">{receipts}</td>
          <td data-title="Comment">{comment}</td>
          <td>
            <Link
              to={{
                pathname:`/expenses/${id}`
              }
              }
            >
              {" "}
              See more{" "}
            </Link>
          </td>
        </tr>
      </>
    );
  }
}

export default ExpenseItem;
