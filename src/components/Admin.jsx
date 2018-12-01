import React from 'react';
import { connect } from 'react-redux';
import ContestantForm from './ContestantForm';
import EpisodeForm from './EpisodeForm';


class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    const { dispatch } = this.props;
    const action = {
      type: 'RESET_ADMIN',
    };
    dispatch(action);
  }

  render(){
    return (

      <div>
        <ContestantForm isContestantSubmitted = {this.props.isContestantSubmitted} contestants = {this.props.contestants}
         />
        <EpisodeForm
        episodes = {this.props.episodes}
        isEpisodeSubmitted = {this.props.isEpisodeSubmitted}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    isContestantSubmitted: state.adminSlice.isContestantSubmitted,
    isEpisodeSubmitted: state.adminSlice.isEpisodeSubmitted,
    contestants: state.adminSlice.contestants,
    episodes: state.adminSlice.episodes,
  }
}

export default connect(mapStateToProps)(Admin);
