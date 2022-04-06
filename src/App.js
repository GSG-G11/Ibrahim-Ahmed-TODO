import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';

export default class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        text: 'Learn React',
        description: 'Learn React',
        createdAt: '25-02-2020',
        done: false,
      },
      {
        id: 2,
        text: 'Learn React 2',
        description: 'Learn React2',
        createdAt: '25-02-2021',
        done: true,
      },
    ],
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}>
        <Header />
        <Body />
      </div>
    );
  }
}
