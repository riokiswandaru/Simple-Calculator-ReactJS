import React, { Component } from 'react';

class Calculator extends Component {

    render() {
        return (
            <>
                <tr>
                    <td><button name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button></td>
                    <td><button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button></td>
                    <td><button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button></td>
                    <td><button name="*" onClick={e => this.props.onClick(e.target.name)}>*</button></td>
                </tr>
                <tr>
                    <td><button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button></td>
                    <td><button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button></td>
                    <td><button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button></td>
                    <td><button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button></td>
                </tr>
                <tr>
                    <td><button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button></td>
                    <td><button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button></td>
                    <td><button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button></td>
                    <td><button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button></td>
                </tr>
                <tr>
                    <td><button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button></td>
                    <td><button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button></td>
                    <td><button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button></td>
                    <td rowSpan="2" ><button className="btnHasil" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button></td>
                </tr>
                <tr>
                    <td colSpan="2" ><button className="btnNol" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button></td>
                    <td><button name="." onClick={e => this.props.onClick(e.target.name)}>.</button></td>
                </tr>
            </>
        );
    }

}

export default Calculator