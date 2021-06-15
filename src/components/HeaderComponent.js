import React, { Component } from 'react'
import './Header.css';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div a="/" className="navbar-brand mr-20">Employee Management App </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent