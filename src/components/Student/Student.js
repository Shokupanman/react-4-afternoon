import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        this.setState({
          student: results.data
        });
      });
  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h2>
          {this.state.studentInfo.first_name} {this.state.studentInfo}
        </h2>

        <h3>Grade:</h3>
        <h4>{this.state.studentInfo.grade}</h4>

        <h3>Email:</h3>
        <h4>{this.state.studentInfo.email}</h4>
      </div>
    );
  }
}
