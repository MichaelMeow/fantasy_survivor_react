import React from 'react';
import RankBarMobile from './RankBarMobile';


function MoveRank({contestants, onUpdateRank}){

  const contestantList = Object.keys(contestants);

  return (
    <div>
      {contestantList.map((contestant, index) =>
        <RankBarMobile contestant={contestants[contestant]}
          key={index}/>
      )}
    </div>
  );
}


export default MoveRank;
