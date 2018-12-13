import React from 'react';

class Challenges extends React.Component {
  state = {
    challenges: [
      {name: 'Sum Arguments', difficulty: 'Easy'},
    ],
  }

  componentDidMount () {
    // Fetch challenges from S3
  }

  render () {
    return (
      <div>
        <h1>Challenges:</h1>
        <ul>
          {this.state.challenges.map(challenge => (
            <li>{challenge.name} (Difficulty: {challenge.difficulty})</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Challenges;
