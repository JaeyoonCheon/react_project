import React, { Component } from "react";
import { PaginationButtons } from "./PaginationButtons";

export class PaginationControls extends Component {
  constructor(props) {
    super(props);
    this.pageSize = this.props.sizes || [5, 10, 25, 100];
    this.sortKeys = this.props.keys || ["Name", "Price"];
  }

  handlePageSizeChange = (ev) => {
    this.props.setPageSize(ev.target.value);
  };

  handleSortPropertyChange = (ev) => {
    this.props.setSortProperty(ev.target.value);
  };

  render() {
    return (
      <div className="m-2">
        <div className="text-center m-1">
          <PaginationButtons
            currentPage={this.props.currentPage}
            pageCount={this.props.pageCount}
            navigate={this.props.navigeToPage}
          ></PaginationButtons>
        </div>
        <div className="form-inline justify-content-center">
          <select
            className="form-control"
            onChange={this.handlePageSizeChange}
            value={this.props.pageSize || this.pageSize[0]}
          >
            {this.pageSize.map((s) => (
              <option value={s} key={s}>
                {s} per page
              </option>
            ))}
          </select>
          <select
            className="form-control"
            onChange={this.handleSortPropertyChange}
            value={this.props.sortKeys || this.sortKeys[0]}
          >
            {this.sortKeys.map((k) => (
              <option value={k.toLowerCase()} key={k}>
                Sort by {k}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
