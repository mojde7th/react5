import { Component } from "react";

class Login extends Component {
  state = { flag: "", userData: { myname: "", myfamily: "" } };

  componentDidMount() {
    const myname = prompt("newname:");
    const myfamily = prompt("familyName:");

    this.setState({ ...this.state, userData: { myname, myfamily } });
  }

  componentDidCatch() {}

  render() {
    const { myname, myfamily } = this.state.userData;

    return <h1> Hello {myname + " " + myfamily}</h1>;
  }
}

export default Login;
