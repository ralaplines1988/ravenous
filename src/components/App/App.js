import React from 'react';
//import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import {Yelp} from '../../util/Yelp';

/*function App() {
  return <h1>Hello</h1>
}*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(businesses=>{
      this.setState({
        businesses: businesses
      })
    });
  }

  render() {
    return (
    <div className="App">
      <h1 className="app-title">{'ravenous'.toUpperCase()}</h1>
      <SearchBar searchYelp={this.searchYelp}/>
    <BusinessList businesses={this.state.businesses} />
    </div>
    );
  }
}

export default App;
