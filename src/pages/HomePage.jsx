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
    service.getConsoleLog('mahedi');
  }

  render() {
    return (
      <div className='text-center my-10'>
        <h1 className='border'>Home Page</h1>
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
