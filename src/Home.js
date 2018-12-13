import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div class="col-md-8 text-center m-5">
            <img id="welcome-img" src="https://via.placeholder.com/600x380" alt="placeholder" />
            <div>
              <h2 className="m-3">
                <a href="/learn">Learn Bash</a>
              </h2>
              <h2 className="m-3">
                <a href="/challenges/all">Practice Bash</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
