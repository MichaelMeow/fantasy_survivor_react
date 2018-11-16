import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

function SubmitButton({onMoveSubmit}){

  return (
    <div className="submit-style">
      <div>
        Please submit your move for this week. <br/>
        You have ____ left to submit.
      </div>
      <div onClick={onMoveSubmit}>
        <Button name="Submit"/>
      </div>

      <style jsx> {`
        .submit-style {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          text-align: center;
        }

        div {
          margin: 5px;
        }
        `}
      </style>
    </div>
  );
}

SubmitButton.propTypes = {
  onMoveSubmit: PropTypes.func
};

export default SubmitButton;
