import React from "react";
import yunus from "./image/mydp.jpeg";


class App extends React.Component {

  state = {
    Person: {
      fullName: "Yunus Mustapha",
      bio: "I'm a MERN Stack Developer",
      profession: "Software Engineer"
    },
    show: false
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={yunus} alt="Yunus"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        
      </>
    );
  }
}

export default App;
