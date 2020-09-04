import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <h1>ImageFinder</h1>
                <div style={{ position:'absolute'}} className="ui compact menu">
                    <div class="ui simple dropdown item">
                        Dropdown
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item">Choice 1</div>
                            <div class="item">Choice 2</div>
                            <div class="item">Choice 3</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
