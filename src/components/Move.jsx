import React from 'react';
import SubmitButton from './SubmitButton';
import MoveRankHeaderMobile from './MoveRankHeaderMobile';
import MoveRank from './MoveRank';
import { connect } from 'react-redux';


class Move extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render(){
    return (
      <div>
        <SubmitButton />
        <MoveRankHeaderMobile/>
        <MoveRank contestants={this.props.contestants} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    contestants: state.adminSlice.contestants,
  }
}

export default connect(mapStateToProps)(Move);
