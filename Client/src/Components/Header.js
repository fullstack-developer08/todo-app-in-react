import React, { Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar is-primary">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                    <div className="navbar-burger burger" data-target="navMenuColorprimary-example">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navMenuColorprimary-example" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="/documentation/overview/start/">
                        Docs
                        </a>
                        <div className="navbar-dropdown">
                        <a className="navbar-item" href="/documentation/overview/start/">
                            Overview
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                            Modifiers
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                            Columns
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                            Layout
                        </a>
                        <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                            Form
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                            Elements
                        </a>
                        <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                            Components
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;