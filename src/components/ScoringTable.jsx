import React from 'react';
import { connect } from 'react-redux';
import ScoringTableRow from './ScoringTableRow';


function ScoringTable(props) {

    const contestantList = Object.keys(props.contestants);

  return (
    <div className='container'>
      <div className="scoringTable">
        <div>
        </div>
        <div className="rotate90">
          Team Reward
        </div>
        <div className="rotate90">
          Team Immunity
        </div>
        <div className="rotate90">
          Individual Reward
        </div>
        <div className="rotate90">
          Individual Immunity
        </div>
        <div className="rotate90">
          Correct Vote
        </div>
        <div className="rotate90">
          Recieved Vote
        </div>
        <div className="rotate90">
          Voted Off
        </div>
        <div className="rotate90">
          Recieved Clue
        </div>
        <div className="rotate90">
          Found Idol
        </div>
        <div className="rotate90">
          Found Advantage
        </div>
        <div className="rotate90">
          Held Idol
        </div>
        <div className="rotate90">
          Held Advantage
        </div>
        <div className="rotate90">
          Quoted in Episode Title
        </div>
        <div className="rotate90">
          Chosen for Reward
        </div>
        <div className="rotate90">
          Jury Votes
        </div>
        <div className="rotate90">
          Special
        </div>
        <div className="rotate90">
          Re-assign Tribe
        </div>
        <div className="rotate90">
          TOTAL
        </div>
      </div>
      {contestantList.map((contestant, index) =>
        <ScoringTableRow
          contestant={Object.keys(props.contestants[contestant])[0]}
          id={index}
          key={index}/>
      )}
      <style jsx>{`
        .scoringTable {
          margin-top: 50px;
          display: grid;
          grid-template-columns: 200px repeat(16, 40px) 80px 40px;
          grid-template-rows: 100px;
        }
        div{
          border: 1px solid lightgray;
        }
        .container{
          border: none;
        }
        .rotate90 {
          transform: rotate(270deg);
          width: 100px;
        }
        `}</style>
    </div>
  )
}

export default connect()(ScoringTable);
