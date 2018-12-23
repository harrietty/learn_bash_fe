import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center m-5">
            <img id="welcome-img" src="https://via.placeholder.com/600x380" alt="placeholder" />
            <div>
              <h1 className="m-3">
                <a href="/learn">Learn Bash</a>
              </h1>
              <h1 className="m-3">
                <a href="/challenges/all">Practice Bash</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
