import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Expense } from "../../types/Expense";
import Receipts from "../../components/Receipts/Receipts";
import Comment from "../../components/Comment/Comment";
import moment from "moment";
import "./expense.scss";

interface IExpensePageProps {}

interface IExpensePageState {
  id: string;
  currentExpense?: Expense | null;
}

class ExpensePage extends Component<
  IExpensePageProps & RouteComponentProps,
  IExpensePageState
> {
  state: IExpensePageState = {
    id: "",
    currentExpense: null,
  };

  async componentDidMount() {
    const id: string = await (this.props.match.params as any).id;
    this.setState({ id });
    this.fetchExpense(this.state.id);
  }

  fetchExpense = async (id: string) => {
    const response = await fetch(`http://localhost:3000/expenses/${id}`);
    const currentExpense = await response.json();
    this.setState({ currentExpense });
  };

  render() {
    let merchant,
      date,
      amount,
      userName,
      userEmail,
      receipts,
      comment,
      category;
    if (
      this.state.currentExpense &&
      Object.entries(this.state.currentExpense).length > 0
    ) {
      merchant = this.state.currentExpense.merchant;
      date = moment(this.state.currentExpense.date).format("L");
      amount = `${this.state.currentExpense.amount.value} ${this.state.currentExpense.amount.currency}`;
      userName = `${this.state.currentExpense.user.first} ${this.state.currentExpense.user.last}`;
      userEmail = this.state.currentExpense.user.email;
      receipts = this.state.currentExpense.receipts;
      comment = this.state.currentExpense.comment || "-";
      category = this.state.currentExpense.category || "-";
    }
    
    return (
      <div className="expense-page">
        <Link
          to={{
            pathname: `/expenses`,
          }}
        >
          &#8592;
        </Link>
        <h1>Expense</h1>
        <p className="space-between">
          <span>Date:</span>
          <span>{date}</span>
        </p>
        <p className="space-between">
          <span>Amount:</span>
          <span>{amount}</span>
        </p>
        <p className="space-between">
          <span>Merchant:</span>
          <span>{merchant}</span>
        </p>
        <p className="space-between">
          <span>User:</span>
          <span>{userName}</span>
        </p>
        <p className="space-between">
          <span>User email:</span>
          <span>{userEmail}</span>
        </p>
        <div className="space-between">
          <div className="column">
            <span>Receipts:</span>
            <Receipts
              userId={this.state.id}
              fetchExpense={() => this.fetchExpense(this.state.id)
              }
            />{" "}
          </div>
          {receipts && receipts.length > 0 ? (
            <>
              <div className="no-data">
                {receipts.length === 1 ? `${receipts.length} receipt` : `${receipts.length} receipts`}
              </div>
            </>
          ) : (
            <>
              <div className="no-data">There are no receipts.</div>
            </>
          )}
        </div>
        <p className="space-between">
          <span>Category:</span>
          <span>{category}</span>
        </p>
        <div className="space-between">
          <div className="column">
            <span>Comment:</span>
            <Comment
              placeholder="Change comment"
              userId={this.state.id}
              fetchExpense={() => this.fetchExpense(this.state.id)}
            />
          </div>
          {comment !== "-" ? (
            <div className="no-data">{comment}</div>
          ) : (
            <div className="no-data">There are no comment.</div>
          )}
        </div>
      </div>
    );
  }
}

export default ExpensePage;
