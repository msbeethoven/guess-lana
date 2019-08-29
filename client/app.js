import React, {Component} from 'react';
import './App.css'
import axios from 'axios';
import SongList from './components/SongList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      length: 0
    }
  }

  componentDidMount() {
    const ACCESS_TOKEN = `${process.env.REACT_APP_ACCESS_TOKEN}`;
   
    axios.get(`https://api.genius.com/search?q=lana+del+rey&access_token=${ACCESS_TOKEN}`)
    .then(res => {
      this.setState({
        data: res.data.response.hits,
        length: res.data.length
      })
    }).catch((err) => {
      console.log('no')
    })
  }
  render(){ 
    console.log('front page length', this.state.data.length)
    
   
    return (
      this.state.data.length === 0?
     <p>Loading...</p> :
      <div className="App">
      <SongList data={this.state.data}  length = {this.state.data.length}/>
      </div>
    )

  }
}


export default App;