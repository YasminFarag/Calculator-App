import React, { Component } from 'react';
import '../App.css';

class Result extends Component {
    
    render() { 
        return ( <div>
    <p className='input' type='text' >{this.props.result}</p>
        
        <div className='button'>
        <button onClick= {() => this.props.onClick(1)}>1</button>
        <button onClick= {() => this.props.onClick(2)}>2</button>
        <button onClick= {() => this.props.onClick(3)}>3</button>
        <button onClick= {() => this.props.onClick(4)}>4</button>
        <button onClick= {() => this.props.onClick(5)}>5</button>
        <button onClick= {() => this.props.onClick(6)}>6</button>
        <button onClick= {() => this.props.onClick(7)}>7</button>
        <button onClick= {() => this.props.onClick(8)}>8</button>
        <button onClick= {() => this.props.onClick(9)}>9</button>
        <button onClick= {() => this.props.onClick(0)}>0</button>
        <button onClick= {() => this.props.onClick('+')}>+</button>
        <button onClick= {() => this.props.onClick('-')}>-</button>
        <button onClick= {() => this.props.onClick('*')}>*</button>
        <button onClick= {() => this.props.onClick('/')}>/</button>
        <button onClick= {() => this.props.onClick('.')}>.</button>
        <button onClick= {() => this.props.onClick('C')}>C</button>
        <button onClick= {() => this.props.onClick('=')}>=</button>
        </div>
        
        
        
        
        
        
        </div> );
    }
}
 
export default Result;