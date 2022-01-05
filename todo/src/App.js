import React, { Component } from "react";
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";
import { VisualityControl } from "./VisualityControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false },
      ],
      showCompleted: true,
    };
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState(
        {
          todoItems: [...this.state.todoItems, { action: task, done: false }],
        },
        () => localStorage.setItem("todos", JSON.stringify(this.state))
      );
      console.log(this.state);
    }
  };

  toggleTodo = (todo) =>
    this.setState(
      {
        todoItems: this.state.todoItems.map((item) =>
          item.action === todo.action ? { ...item, done: !item.done } : item
        ),
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state))
    );

  todoTableRows = (doneValue) =>
    this.state.todoItems
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <TodoRow
          key={item.action}
          item={item}
          callback={this.toggleTodo}
        ></TodoRow>
      ));

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    console.log(data);
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            userName: "Adam",
            todoItems: [
              { action: "Buy Flowers", done: false },
              { action: "Get Shoes", done: false },
              { action: "Collect Tickets", done: true },
              { action: "Call Joe", done: false },
            ],
            showCompleted: true,
          }
    );
  };

  render = () => (
    <div>
      <TodoBanner
        name={this.state.userName}
        tasks={this.state.todoItems}
      ></TodoBanner>
      <div className="container-fluid">
        <TodoCreator callback={this.createNewTodo}></TodoCreator>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows(false)}</tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisualityControl
            description="Completed Tasks"
            isChecked={this.state.showCompleted}
            callback={(checked) => this.setState({ showCompleted: checked })}
          ></VisualityControl>
        </div>
        {this.state.showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}
