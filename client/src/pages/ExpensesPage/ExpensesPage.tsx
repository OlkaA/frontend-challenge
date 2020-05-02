import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startFetchExpenses } from '../../actions/expensesAction';
import { Expense } from '../../types/Expense';
import { AppActions } from '../../types/actions';
import { AppState } from '../../store';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import ListOfExpenses from '../../components/ListOfExpenses/ListOfExpenses';
import Filter from '../../components/Filter/Filter';

interface IExpensesPageProps {}
interface IExpensesPageState {
  filteredArray: Expense[];
  isSorted: boolean;
}

type Props = IExpensesPageProps & LinkStateProps & LinkDispatchProps;

export class ExpensesPage extends React.Component<Props, IExpensesPageState> {
  state: IExpensesPageState = {
    filteredArray: [],
    isSorted: false,
  };

  componentDidMount() {
    this.fetchExpenses();
  }

  async fetchExpenses(page?: number) {
    let paginationPage: number;
    if (page === undefined) {
      paginationPage = 0;
    } else {
      paginationPage = page;
    }
    await this.props.startFetchExpenses(paginationPage);
    this.onFilterChange('');
  }

  onFilterChange = (value: any) => {
    let filteredArray = this.props.data.expenses.filter((expense) => {
      if (
        value.searchByName &&
        !expense.user.first
          .toLowerCase()
          .includes(value.searchByName.toLowerCase()) &&
        !expense.user.last
          .toLowerCase()
          .includes(value.searchByName.toLowerCase())
      ) {
        return false;
      } else if (
        value.searchByPlace &&
        !expense.merchant
          .toLowerCase()
          .includes(value.searchByPlace.toLowerCase())
      ) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ filteredArray });
  };

  sortList = (value: string) => {
    let sortedArray: Expense[] = [];
    sortedArray = this.state.filteredArray.sort((a: any, b: any) => {
      if (this.state.isSorted) {
        this.setState({ isSorted: false });
        return value !== 'user'
          ? a[value].localeCompare(b[value])
          : a[value].first.localeCompare(b[value].first);
      } else {
        this.setState({ isSorted: true });
        return value !== 'user'
          ? b[value].localeCompare(a[value])
          : b[value].first.localeCompare(a[value].first);
      }
    });
    this.setState({ filteredArray: sortedArray });
  };

  render() {
    const { total } = this.props.data;
    return (
      <>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          &#8592;
        </Link>
        <h1>List of expenses</h1>
        <Filter onFilterChange={this.onFilterChange} />
        {this.state && this.state.filteredArray.length > 0 ? (
          <ListOfExpenses
            expenses={this.state.filteredArray}
            total={total}
            goToPage={(page) => {
              this.fetchExpenses(page);
            }}
            sortList={(string) => {
              this.sortList(string);
            }}
          />
        ) : null}
      </>
    );
  }
}

interface LinkStateProps {
  data: { expenses: Expense[]; total: number };
}
interface LinkDispatchProps {
  startFetchExpenses: (page?: number) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: IExpensesPageProps
): LinkStateProps => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IExpensesPageProps
): LinkDispatchProps => ({
  startFetchExpenses: bindActionCreators(startFetchExpenses, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
