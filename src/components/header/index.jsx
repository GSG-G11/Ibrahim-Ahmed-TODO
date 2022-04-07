import React, { Component } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import imgsName from './listOfImages';
import { motion } from 'framer-motion';

import { ColorExtractor } from 'react-color-extractor';
export default class index extends Component {
  state = {
    time: new Date(),
    random: Math.floor(Math.random() * 17),
    // colors: [],
  };

  currentTime = () => {
    this.setState({ time: new Date() });
  };

  formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-us', options);
  };

  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  changeImg = () => imgsName[this.state.random];

  // getColors = (colors) =>
  //   this.setState((state) => ({ colors: [...state.colors, ...colors] }));

  render() {
    const { numNotes, openModalHandler, getColors } = this.props;
    const { time } = this.state;
    const d = new Date();
    let day = d.toLocaleDateString('en-us', { weekday: 'long' });

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='header'
        style={{
          backgroundImage: `url(${this.changeImg()})`,
        }}>
        <ColorExtractor getColors={getColors}>
          <img
            style={{ display: 'none' }}
            src={this.changeImg()}
            alt='images'
          />
        </ColorExtractor>
        <div className='overlay__header'></div>
        <div className='header-header'>
          <h1>To Do App</h1>
          <p>{time.toLocaleTimeString()}</p>
        </div>
        <div className='header-bottom'>
          <div className='date-day'>
            <h3 className='day'>{day}</h3>
            <p className='date'>{this.formatDate(d)}</p>
          </div>

          {numNotes !== 0 && (
            <div className='numTask'>
              <p> {numNotes} tasks</p>
            </div>
          )}
        </div>
        <button
          className='addTask'
          onClick={() => openModalHandler('CreateNotes')}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </motion.div>
    );
  }
}
