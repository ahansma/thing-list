import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import SignOut from './SignOut'
import SignIn from './SignIn'
import base from './base'

class App extends Component {
  componentWillMount() {
    base.syncState(
      'things', 
      {
        context: this,
        state: 'things'
      }
    )
  }

  state = {
    things: {},
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      completed: false,
      dueOn: null,
    }
  }

  addThing = () => {
    const things = {...this.state.things} //makes a copy of an object
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    //delete things[thing.id] ==> to use without database 
    this.setState({ things })
  }

  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing
    }

     return (
        <div className="App">
          <Header />
          <SignIn />
          <SignOut />
          <AddThingButton addThing={this.addThing} />
          <ThingList
            things={this.state.things}
            {...actions}
          />
        </div>
      );
  }
}

export default App;


