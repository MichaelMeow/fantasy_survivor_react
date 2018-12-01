import React from 'react';
import { connect } from 'react-redux';
import EpisodeDisplay from './EpisodeDisplay';


class Episodes extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render(){
    const episodeList = Object.keys(this.props.episodes);
    console.log(episodeList);
    return (
      <div>
        {episodeList.map((episode, index) =>
          <EpisodeDisplay
          episode = {this.props.episodes[episode]}
          key = {index}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    episodes: state.adminSlice.episodes,
  }
}

export default connect(mapStateToProps)(Episodes);
