import React, {Component} from 'react';
import './App.css';
import Result from './components/Result';

class App extends Component {
  state = { result : '' }

  

 onClick = () => {

 }
  render() { 
    return ( <div className='App'>
      <h1>Calculator</h1>
      <Result result = {this.state.result}
              onClick = {this.onClick} />
    </div> );
  }
}
 
export default App;