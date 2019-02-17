import React from 'react';
import './App.css';

import Assesment from "./components/Assesment"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      assesment: false
    }

    this.showAssesment = this.showAssesment.bind(this)
  }

  showAssesment(e) {
    e.preventDefault()
    this.setState({
      assesment: true
    })
  }

  render() {
    return (

      <div className="App">
        {this.state.assesment ? <Assesment /> :
          <div className="noAssesment">
            <h1 className="headliner">Know the Symptoms <br></br> Stop the Pain</h1>
            <button className="cta" onClick={this.showAssesment}>Lets go!</button>
          </div>
        }


      </div>
    )
  }

}


export default App;
