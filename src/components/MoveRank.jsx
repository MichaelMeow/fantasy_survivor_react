import React from 'react';
import RankBarMobile from './RankBarMobile';



class MoveRank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rank: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null
      }
    };
  }

  render() {
    const contestantsList = Object.keys(this.props.contestants);
    console.log(contestantsList);
    return (
      <div>
        <RankBarMobile contestant={this.props.contestants[contestantsList[0]]}/>
        <RankBarMobile contestant={this.props.contestants[contestantsList[1]]}/>

      
        <style jsx>{`
        
        `}</style>
      </div>
    );
  }
}

export default MoveRank;
