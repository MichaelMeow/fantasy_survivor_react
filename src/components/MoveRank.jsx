import React from 'react';
import RankBarMobile from './RankBarMobile';
import PropTypes from 'prop-types';


function MoveRank({contestants, onUpdateRank}){

  const contestantList = Object.keys(contestants);
  
  function handleOnUpdateRank(){
    onUpdateRank(contestantList);
  }
  
  //eventually implement sort feature to send order inside onUpdateRank

  return (
    <div onClick={handleOnUpdateRank}>
      {contestantList.map((contestant, index) => 
        <RankBarMobile contestant={contestants[contestant]}
          key={index}/>
      )}
      <style jsx>{`
      
      `}</style>
    </div>
  );
}

MoveRank.propTypes = {
  contestants: PropTypes.object,
  onUpdateRank: PropTypes.func
};

export default MoveRank;
