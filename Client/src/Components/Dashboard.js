import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {

        }
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit(event) {
        this.props.addTodo(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <article class="message is-success ">
                <div class="message-header is-uppercase">
                    <p>Todo Dashboard</p>
                </div>
                <div class="message-body">
                    <form onSubmit={this.handleSubmit}>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Description</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control">
                                        <input class="input is-success" type="text" name="desc"
                                            required onChange={this.handleChange} />
                                    </p>
                                    <div>
                                        <div>Field required</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Priority</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <div class="select is-success">
                                            <select name="priority" required onChange={this.handleChange}>
                                                <option value="">--select priority--</option>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                            </select>
                                        </div>
                                        <div>
                                            <div>Field required</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label"></label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <input class="button is-success is-outlined" type="submit" value="ADD TODO" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        );
    }
}

export default connect(null, actions)(Dashboard);