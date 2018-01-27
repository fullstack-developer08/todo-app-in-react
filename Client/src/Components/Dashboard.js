import React, { Component } from 'react';

export class Dashboard extends Component {
    render() {
        return (
            <article class="message is-success ">
                <div class="message-header is-uppercase">
                    <p>Todo Dashboard</p>
                </div>
                <div class="message-body">
                    <form>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Description</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control">
                                        <input class="input is-success" type="text" name="desc"
                                            required />
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
                                            <select name="priority" required>
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