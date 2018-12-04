import React from 'react';
import { connect } from 'react-redux';
import ContestantForm from './ContestantForm';
import EpisodeFormContainer from './EpisodeFormContainer';
import TribeForm from './TribeForm';
import { clearMessages } from './../actions';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadEpisodeFormState: null,
    };
    this.handleError = this.handleError.bind(this);
    this.handleLoadEpisodeState = this.handleLoadEpisodeState.bind(this);
  }

  componentDidMount(){
    let newState = Object.assign({}, this.state);
    newState.loadEpisodeFormState = null;
    this.setState(newState);
    const { dispatch } = this.props;
    dispatch(clearMessages());
  }

  handleError(message){
    let newState = Object.assign({}, this.state);
    newState.error = message;
    this.setState(newState);
    window.scrollTo(0, 0);
  }

  handleLoadEpisodeState(episodeFormState){
    this.setState(episodeFormState);
  }

  render(){

    return (

      <div>
        {this.state.error ? <div className='errorMessage'> {this.state.error} </div> : <div></div>}
        <EpisodeFormContainer
        episodes = {this.props.episodes}
        onLoadEpisodeState = {this.handleLoadEpisodeState}
        isEpisodeSubmitted = {this.props.isEpisodeSubmitted}
        contestants = {this.props.contestants}
        onError = {this.handleError}
        />
        <TribeForm
        tribes = {this.props.tribes}
        isTribeSubmitted = {this.props.isTribeSubmitted}
        onError = {this.handleError}
        />
        <ContestantForm
        isContestantSubmitted = {this.props.isContestantSubmitted}
        contestants = {this.props.contestants}
        onError = {this.handleError}
         />
        <style jsx>{`
          .errorMessage {
            padding: 10px;
            background-color: lightcoral;
            border-radius: 5px;
          }
          `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    contestants: state.adminSlice.contestants,
    episodes: state.adminSlice.episodes,
    tribes: state.adminSlice.tribes,
    isContestantSubmitted: state.adminSlice.isContestantSubmitted,
    isEpisodeSubmitted: state.adminSlice.isEpisodeSubmitted,
    isTribeSubmitted: state.adminSlice.isTribeSubmitted,
  }
}

export default connect(mapStateToProps)(Admin);
