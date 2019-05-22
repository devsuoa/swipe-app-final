import React, { Component } from "react";

export const AppContext = React.createContext({});

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      likedJobs: []
    };
  }

  addResults = results => {
    this.setState({
      results
    });
  };

  likeJob = (job) => {
    const containsLikedJob = this.state.likedJobs.some(val => {
        return val.id == job.id
    });

    if (!containsLikedJob) {
        this.setState({
            likedJobs: [...this.state.likedJobs, job]
        })
    }

    console.log(this.state.likedJobs)
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          results: this.state.results,
          likedJobs: this.state.likedJobs,
          addResults: this.addResults,
          likeJob: this.likeJob
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
