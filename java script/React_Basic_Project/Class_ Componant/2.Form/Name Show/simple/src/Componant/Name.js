import React from "react";

class Name extends React.Component {
  constructor() {
    super();

    this.state = {
      FirstName: "",
      LastName: "",
    };
  }

  render() {
    const handlerFirstName = (e) => {
      this.setState({
        FirstName: e.target.value,
      });
    };
    const handleLastName = (e) => {
      this.setState({
        LastName: e.target.value,
      });
    };
    return (
      <>
        <form>
          <input
            placeholder="Firestname"
            value={this.state.FirstName}
            onChange={handlerFirstName}
          />
          <input
            placeholder="Lastname"
            value={this.state.LastName}
            onChange={handleLastName}
          />
        </form>
        <h3>
          Full ame:{this.state.FirstName} {this.state.LastName}
        </h3>
      </>
    );
  }
}

export default Name;
