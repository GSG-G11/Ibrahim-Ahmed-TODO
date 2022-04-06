import React, { Component } from "react";
import "./header.css";
import img1 from "../../images/backGround-header.jpg";
import img2 from "../../images/IMG_20210412_041914.jpg";
import img3 from "../../images/Tumblr_l_45021871112375.jpg";
import img4 from "../../images/IMG_20210417_110829.jpg";
import img5 from "../../images/Tumblr_l_173327231835022.jpg";
export default class index extends Component {
  state = {
    time: new Date(),
  };

  currentTime = () => {
    this.setState({ time: new Date() });
  };

  formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-us", options);
  };

  // componentWillMount() {
  //   setInterval(() => this.currentTime(), 1000);
  // }

  changeImg = () => {
    const imgsName = [img1, img2, img3, img4, img5];
    const randomImg = Math.floor(Math.random() * 5);

    return imgsName[randomImg];
  };

  render() {
    const { numNotes, openModalHandler } = this.props;
    const { time } = this.state;
    const d = new Date();
    let day = d.toLocaleDateString("en-us", { weekday: "long" });

    return (
      <div
        className="header "
        style={{
          backgroundImage: `url(${this.changeImg()})`,
        }}
      >
        <div className="header-header">
          <h1>To Do App</h1> <p> {time.toLocaleTimeString()}</p>
        </div>
        <div className="header-bottom">
          <div className="date-day">
            <h3 className="day">{day}</h3>
            <p className="date">{this.formatDate(d)}</p>
          </div>

          {numNotes !== 0 && (
            <div className="numTask">
              <p> {numNotes} tasks</p>
            </div>
          )}
        </div>
        <button
          className="addTask"
          onClick={() => openModalHandler("CreateNotes")}
        >
          +
        </button>
      </div>
    );
  }
}
