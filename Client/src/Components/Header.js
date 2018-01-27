import React, { Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar is-primary">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <strong>TODO APP</strong>
                    </a>
                    <div className="navbar-burger burger" data-target="navMenuColorprimary-example">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navMenuColorprimary-example" className="navbar-menu">
                    <div class="navbar-start">
                    <a class="navbar-item" href="#">
                        GIT REPO
                    </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;