import React from 'react';
import PropTypes from 'prop-types';


function Admin({ onContestantInfoSubmit }){
  let _name = null;
  let _ogTribe = null;
  let _photoURL = null;
  
  function handleContestantFormSubmission(event) {
    event.preventDefault();
    onContestantInfoSubmit({
      name: _name.value,
      ogTribe: _ogTribe.value,
      photoURL: _photoURL.value
    });
    _name.value = '';
    _ogTribe.value = '';
    _photoURL.value = '';
  }

  return (
    
    <div>
      Admin Page
      <form  onSubmit={handleContestantFormSubmission}>
        Submit Contestants
        <input
          type='text'
          id='name'
          placeholder='Contestant Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='ogTribe'
          placeholder='Original Tribe'
          ref={(input) => {_ogTribe = input;}}/>
        <input
          type='text'
          id='photoURL'
          placeholder='photo URL'
          ref={(input) => {_photoURL = input;}}/>
        <button type='submit'>Submit</button>
      </form>
      <style jsx>{`
        
        `}</style>
    </div>
  );
}

Admin.propTypes = {
  onContestantInfoSubmit: PropTypes.func
};

export default Admin;
