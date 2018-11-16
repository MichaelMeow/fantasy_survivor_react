import React from 'react';
import SubmitButton from './SubmitButton';
import MoveRankHeaderMobile from './MoveRankHeaderMobile';
import MoveRank from './MoveRank';


class Move extends React.Component {
  
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
    this.handleMoveSubmit = this.handleMoveSubmit.bind(this);
  }
  
  handleMoveSubmit(){
    //send rank state to database
    console.log("submitted");
  }
  
  handleUpdateRank(rank){
    console.log(rank);
  }
  
  render(){
    return (
      <div>
        <SubmitButton onMoveSubmit={this.handleMoveSubmit}/>
        <MoveRankHeaderMobile/>
        <MoveRank contestants={this.props.contestants} onUpdateRank={this.handleUpdateRank}/>
        <style jsx>{`
          
          `}</style>
      </div>
    );
  }
}

export default Move;
