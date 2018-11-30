import React from 'react';
import SubmitButton from './SubmitButton';
import MoveRankHeaderMobile from './MoveRankHeaderMobile';
import MoveRank from './MoveRank';
import PropTypes from 'prop-types';


class Move extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleMoveSubmit = this.handleMoveSubmit.bind(this);
  }

  handleMoveSubmit(){
    //send rank state to database
    // console.log('submitted');
  }

  handleUpdateRank(){
    // console.log(rank);
  }

  render(){
    return (
      <div>
        <SubmitButton onMoveSubmit={this.handleMoveSubmit}/>
        <MoveRankHeaderMobile/>
        <MoveRank contestants={this.props.contestants} onUpdateRank={this.handleUpdateRank}/>
      </div>
    );
  }
}

Move.propTypes = {
  contestants: PropTypes.object,
};

export default Move;
