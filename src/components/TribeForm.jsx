import React from 'react';
import { connect } from 'react-redux';

function TribeForm(props) {
  let tribeName = null;
  let tribeColor = null;
  let lastTribe = null;
  if (props.tribes[0]){
      lastTribe = Object.keys(props.tribes.slice(-1)[0])[0];
  }


  function handleTribeFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_TRIBE',
      name: tribeName.value,
      tribeColor: tribeColor.value,
    }
    dispatch(action);
    tribeName.value = '';
  }

  return (
    <div>
      <form  onSubmit={handleTribeFormSubmission}>
        <h3>
          Add Tribe:
        </h3>
        <div>
          Before a contestant can be assigned a tribe, you must create the tribe and assign a color.
        </div>
        <div>
          Enter a tribe name:
        </div>
        <div>
          <input
            type='text'
            id='tribeName'
            placeholder='Tribe Name'
            ref={(input) => {tribeName = input;}}/>
        </div>
        <div>
          pick a tribe color:
        </div>
        <div>
          <input
            type='color'
            id='tribeColor'
            ref={(input) => {tribeColor = input;}}/>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        <div>
          {props.isTribeSubmitted ? 'Thank you, tribe ' + lastTribe + ' has been created' : ''}
        </div>
      </form>
      <style jsx>{`
        div {
          padding: 10px;
        }
        button {
          padding: 5px 35px;
          background-color: #8EE7EC;
          border-radius: 5px;
          border: none;
          color: #010101;
        }
      `}</style>
    </div>
  )

}

export default connect()(TribeForm);
