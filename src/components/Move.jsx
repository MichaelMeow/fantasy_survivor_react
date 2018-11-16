import React from 'react';
import SubmitButton from './SubmitButton';
import MoveRankHeaderMobile from './MoveRankHeaderMobile';
import MoveRank from './MoveRank';
import PropTypes from 'prop-types';


function Move({ contestants }){

  return (
    <div>
      <SubmitButton/>
      <MoveRankHeaderMobile/>
      <MoveRank contestants={contestants}/>
      <style jsx>{`

    `}</style>
    </div>
  );
}


Move.propTypes = {
  contestants: PropTypes.object
};

export default Move;
