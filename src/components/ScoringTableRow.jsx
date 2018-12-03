import React from 'react';


function ScoringTableRow({contestant, id}) {

  return (
    <div className='scoringTable container'>
      <div className={`contestant ${id}`}>
        {contestant}
      </div>
      <div>
        <input type="checkbox" id={`${contestant}teamReward`} />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}teamImmunity`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}individualReward`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}individualImmunity`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}correctVote`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}recievedVote`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}votedOff`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}clue`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}foundIdol`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}foundAdvantage`}  />
      </div>
      <div>
        <input type='number' id={`${contestant}heldIdol`} />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}heldAdvantage`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}quoted`}  />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}chosenReward`}  />
      </div>
      <div>
        <input type="number" id={`${contestant}juryVotes`}/>
      </div>
      <div>
        <input type="number" id={`${contestant}special`}/>
      </div>
      <div className={`assignTribe ${id}`}>
        <select id={`${contestant}tribe`}>
          <option >-tribe-</option>
        </select>
      </div>
      <div className={`Total ${id}`}>
      </div>
      <style jsx>{`
        .scoringTable {
          display: grid;
          grid-template-columns: 200px repeat(16, 40px) 80px 40px;
        }
        div{
          border: 1px solid lightgray;
        }
        .container{
          border: none;
        }
        .assignTribe {
          padding-left: 9px;
        }
        input{
          width: 30px;
        }
        `}</style>
    </div>
  )
}

export default ScoringTableRow;
