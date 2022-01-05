import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4,
    };
  }

  isEven(value) {
    return value % 2 === 0 ? "Even" : "Odd";
  }

  getClassName(value) {
    return value % 2 === 0
      ? "bg-primary text-white text-center p-2 m-1"
      : "bg-secondary text-white text-center p-2 m-1";
  }

  handleClick = () => this.setState({ count: this.state.count + 1 });

  render = () => (
    <table className="table table-striped table-bordered table-sm">
      <thead className="bg-info text-white">
        <tr>
          <th>Value</th>
          <th>Even?</th>
        </tr>
      </thead>
      <tbody>
        <td>{this.state.count}</td>
        <td>{this.isEven(this.state.count)}</td>
      </tbody>
      <tfoot className="text-center">
        <td colSpan="2">
          <button className="btn btn-info m-2" onClick={this.handleClick}>
            Click me
          </button>
          Number of things : {this.isEven(this.state.count)}
        </td>
      </tfoot>
    </table>
  );
}
