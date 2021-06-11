import React, {Component} from 'react';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/container/ItemListContainer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <ItemListContainer />
      </div>
    );
  }
}

export default App;
