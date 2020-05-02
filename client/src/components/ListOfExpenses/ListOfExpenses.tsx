import React from 'react';
import { Expense } from '../../types/Expense';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Pagination from '../Pagination/Pagination';
import Button from '../Button/Button';
import './list.scss';

interface IListOfExpensesProps {
  expenses: Expense[],
  total: number,
  goToPage(page: number): void,
  sortList(stringName: string): void
};

class ListOfExpenses extends React.Component<IListOfExpensesProps> {
  render() {
    return (
      <div className='list-of-expenses'>
        <table className='list'>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Date</th>
              <th>Merchant <Button onClick={() => this.props.sortList('merchant')} value='&#8597;'/></th>
              <th>User <Button onClick={() => this.props.sortList('user')} value='&#8597;'/></th>
              <th>Receipts</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.expenses.map(item => {
              return <ExpenseItem key={item.id} data={item} />;
            })}
          </tbody>
          <tfoot>
            <tr>
              {this.props.total ? <Pagination numberOfItems={this.props.total} goToPage={(page) => this.props.goToPage(page)}/> : null}
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default ListOfExpenses;