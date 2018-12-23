import React from 'react';
import axios from 'axios';

import './Challenges.css';

class Challenges extends React.Component {
  state = {
    challenges: [],
  }

  static difficulties = [
    {n: 1, title: 'Easy'},
  ];

  componentDidMount () {
    Challenges.difficulties.forEach(async (difficulty) => {
      const url = `${process.env.REACT_APP_API_URL}/challenges?difficulty=${difficulty.n}`;
      const challenges = [];
      try {
        const res = await axios.get(url);
        challenges.push({
          difficulty: difficulty.title,
          challenges: res.data.challenges,
        });
      } catch (e) {
        console.log(e);
      }

      this.setState({challenges});
    });
  }

  render () {
    return (
      <div>
        <h1 className="page-title">Practice Bash Scripting!</h1>
          <div className="container">
            <div className="row">
              <div className="col">
                <ul className="challenge-list">
                  {this.state.challenges.map((challengeGroup, i) => (
                    <li key={i}>
                      <h3>{challengeGroup.difficulty} Challenges</h3>
                      {challengeGroup.challenges.map((challenge, i) => (
                        <div key={i} className="challenge">
                          <div className="d-flex justify-space-between">
                            <h4>
                              {challenge.title}
                            </h4>
                          </div>
                          <p className="challenge-desc">
                            {challenge.description}
                          </p>
                          <div className="example-area">
                            <p className="example-use">
                              Example:
                            </p>
                            <code>
                              {challenge.exampleUse}
                            </code>
                            <p className="example-output">
                              Output:
                            </p>
                            <pre>
                              {challenge.exampleOutput}
                            </pre>
                          </div>
                          <a href={`/challenges/${challenge.id}`}>
                          <button className="btn btn-light">
                              Train
                            </button>
                          </a>
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Challenges;
