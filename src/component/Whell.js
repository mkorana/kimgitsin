import React, { Component } from "react";

class Whell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieList: ["Berrin","Mehmet","Ahmet","Gökçe","Rıdvan",]
    };
  }

  handleSpin = () =>{
    console.log("spin");
    }
  render() {
    return (
      <div id="wrapper" className="wrapper">
        <div id="wheel" className="wheel">
          <div id="inner-wheel" className="innerwheel">
            <div className="sec">
              <span className="fa">50</span>
            </div>
            <div className="sec">
              <span className="fa">40</span>
            </div>
            <div className="sec">
              <span className="fa">30</span>
            </div>
            <div className="sec">
              <span className="fa">20</span>
            </div>
            <div className="sec">
              <span className="fa">10</span>
            </div>
            <div className="sec">
              <span className="fa">60</span>
            </div>
          </div>
          <div id="spin" className="spin" onClick={this.handleSpin}>
                <div id="inner-spin" className="innerspin"></div>
              </div>
        </div>
        <div id="shine" className="shine"></div>
              <div id="txt"></div>
      </div>
    );
  }
}

export default Whell;
