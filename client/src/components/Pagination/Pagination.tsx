import React, { Component } from "react";
import './pagination.scss'; 

interface IPaginationProps {
    numberOfItems: number
    goToPage(page: number): void;
};

interface IPaginationState {
    currentIndex: number,
    pages: number
};

class Pagination extends Component<IPaginationProps, IPaginationState> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentIndex: 0,
            pages: 0
        };
    }

    componentDidMount() {
        this.setState({ pages:  Math.ceil(this.props.numberOfItems / 25)})
    }

    goToNextPage = () => {
        if (this.state.currentIndex + 1 === this.state.pages) {
            return;
        }
        let index = this.state.currentIndex + 1;
        this.setState({ currentIndex: index }, () => this.props.goToPage(this.state.currentIndex));
    };

    goToPrevPage = () => {
        if (this.state.currentIndex === 0) {
            return;
        }
        let index = this.state.currentIndex - 1;
        this.setState({ currentIndex: index }, () => this.props.goToPage(this.state.currentIndex));
    };

    render() {
        return (
            <>
                <td colSpan={7} className="pagination">
                    <a href='#0' onClick={this.goToPrevPage}>&lt;</a>
                    <span>{`${this.state.currentIndex + 1} of ${this.state.pages}`}</span>
                    <a href='#0' onClick={this.goToNextPage}>&gt;</a>
                </td>
            </>
        );
    }
}

export default Pagination;
