import React from 'react';


function ScoringTableRow({contestant, id}) {

  //first figure out the data structure and how the data will be parsed in action, then name the inputs according to that. episodes[contestantname].array[16]


  return (
    <div className='scoringTable container'>
      <div className={`contestant ${id}`}>
        {contestant}
      </div>
      <div>
        <input type="checkbox" id={`${contestant}teamReward`} value="" />
      </div>
      <div>
        <input type="checkbox" id={`${contestant}teamImmunity`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}individualReward`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}individualImmunity`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}correctVote`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}recievedVote`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}votedOff`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}clue`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}foundIdol`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}foundAdvantage`} value="" />
      </div>
      <div>
        <input type="number" classNameid={`${contestant}heldIdol`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}heldAdvantage`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}quoted`} value="" />
      </div>
      <div>
        <input type="checkbox" classNameid={`${contestant}chosenReward`} value="" />
      </div>
      <div>
        <input type="number" classNameid={`${contestant}juryVotes`} value="" />
      </div>
      <div>
        <input type="number" classNameid={`${contestant}special`} value="" />
      </div>
      <div className={`assignTribe ${id}`}>
        <select className="selectTribe 1">
          <option value="">-tribe-</option>
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
