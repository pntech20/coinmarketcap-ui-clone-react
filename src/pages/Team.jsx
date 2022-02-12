import React from 'react';
import service from '../services/user/index';

export default class App extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    service.getAllUsers().then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className='text-center my-10'>
        <h1>Team Page</h1>
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
