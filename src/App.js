import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'

class App extends Component {
  state = {
    things: {},
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
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

  render() {
    return (
      <div className="App">
        <Header />
        <AddThingButton addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          saveThing={this.saveThing}
        />
      </div>
    );
  }
}

export default App;


