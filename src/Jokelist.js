import React, Component from 'react';
import Joke from './joke';
import uuid from 'uuidv4';
import axios from 'axios';

class Jokelist extends Component {

  constructor(props){
    super(props)
    this.state = {
      net: 0,
      jokes: []
    }
    this.updateScore = this.updateScore.bind(this);
    this.getJokes = this.getJokes.bind(this);
  }

  updateScore(){
    
  }

  async getJokes(){
    let jokesReqs = [];
    for (let i = 0; i<10; i++){
      jokesReqs.push(axios.get('https://icanhazdadjoke.com/'));
    }
    let jokes = await Promise.all(jokesReqs);
    console.log(jokes[0])
    this.setState((st) => ({jokes}))
  }

  render(){
    let jokes = this.state.jokes.map((joke) => {
      <li><Joke updateScore={this.updateScore} {...joke} /></li>
    })
    return (
      <ul>{jokes}</ul>
      <button  onClick={this.getJokes}>Get new Jokes</button>
    )
  }
}

export default Jokelist;