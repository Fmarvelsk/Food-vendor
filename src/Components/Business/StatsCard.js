import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import UpArrow from '../../Image/assests/Path 741.svg'
import DownArrow from '../../Image/assests/Path 742.svg'

export class StatsCard extends Component {
  render() {
    const Info = this.props?.statsInfo
    return (
      <div className="card card-stats mb-3">
        <div className="content stats">
               <div className="numbers">
                <p>{this.props.statsText}</p>
               <p> {this.props.statsValue}</p>
                <p className={Info?.includes('+') ? 'green' : 'red'} >{this.props.statsInfo} 
                <img src={Info?.includes('+') ? UpArrow : DownArrow } className="ml-3" alt="arrow"/> </p>
              </div>
           </div>
      </div>
    );
  }
}

export default StatsCard;
