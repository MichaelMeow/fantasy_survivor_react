import React from 'react';
import { connect } from 'react-redux';



function Episodes({episode}){
  let episodeObject = episode;


  return (
    <div className="episodeCell">
      <div className='episodeNumber'>
        Episode {episodeNumber}
      </div>
      <div className='episodeTitle'>
        {episodeObject.name}
      </div>
      <div className="epCellInfo">
        Reward Winner: {episodeObject.rewardWinner}
      </div>
      <div className="epCellInfo">
        Immunity Winner: {episodeObject.immunityWinner}
      </div>
      <div className="epCellInfo">

      </div>
      <div>
        {episodeObject.message}
      </div>
      <style jsx>{`
        .episodeCell {
          width: 400px;
          margin: 50px auto;
          padding-bottom: 30px;
          border-bottom: 1px solid orange;
        }
        .episodeNumber{
          font-size: 2rem;
        }
        .episodeTitle{
          font-size: 1.8rem;
        }
        .rewardWinner, .immunityWinner, .votedOff, .epCellInfo{
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    episodes: state.adminSlice.episodes,
  }
}

export default connect(mapStateToProps)(Episodes);
