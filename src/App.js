import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div >
        <h3 className="my-0 text-center bg-warning py-2 fw-bold border-dark border border-2 ">TODO</h3>
        
        <form className="  my-0 text-white d-flex  flex-column " onSubmit={this.handleSubmit}>

          <label htmlFor="new-todo" className="my-2 fs-2 align-self-center fw-bold form-label">
            What needs to be done?
          </label>
          
          <TodoList items={this.state.items} />
          <br/>
          <input className="align-self-center" placeholder="add your task here"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br/>
          <button className="align-self-center btn btn-primary btn-sm my-2">
            Add {this.state.items.length + 1} Task
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className=" my-0  text-white">
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
export default TodoApp;