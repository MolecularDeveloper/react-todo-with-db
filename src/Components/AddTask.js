import React, { Component } from 'react';
import { Form, Input } from 'muicss/react';

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		}
	}

	onChange(e) {
		this.setState({
            task: e.target.value
        });
	}

    onSubmit(e) {
        this.props.onAddTask(this.state.task);
        e.preventDefault();
    }

  render() {
    return (
        <Form onSubmit={this.onSubmit.bind(this)}>
            <Input hint="Add Task" onChange={this.onChange.bind(this)} />
        </Form>
    );
  }
}

export default AddTask;