import React, { Component } from 'react';
import { Checkbox } from 'muicss/react';

class TaskItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: props.task
		}
	}

	onChange(task, e) {
		this.props.onEditState(task, e.target.checked);
	}
  render() {
    return (
        <div className="mui--divider-bottom">
        	<Checkbox 
        		name={this.state.task._id.$oid}
        		label={this.state.task.text} 
        		onChange={this.onChange.bind(this, this.state.task)}
        		defaultChecked={this.state.task.completed}
        		className={(this.state.task.completed) ? "completed" : ""}
        	/>
        </div>
    );
  }
}

export default TaskItem;