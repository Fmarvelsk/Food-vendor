import React, { Component } from "react";
import UpArrow from '../../Image/assests/Path 741.svg'
import DownArrow from '../../Image/assests/Path 742.svg'

export class StatsCard extends Component {
  render() {
    const Info = this.props.statsInfo
    return (
      <div className="card card-stats mb-3">
        <div className="content stats">
               <div className="numbers">
                <p>{Info.statsText}</p>
               <p className="bold"> {Info.statsValue}</p>
                <p className={Info.statsInfo?.includes('+') ? 'green' : 'red'} >{Info.statsInfo} 
                <img src={Info.statsInfo?.includes('+') ? UpArrow : DownArrow } className="ml-3" alt="arrow"/> </p>
     </div>
           </div>
      </div>
    );
  }
}

export default StatsCard;
