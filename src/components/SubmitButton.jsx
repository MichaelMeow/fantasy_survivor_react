import React from 'react';
import Button from './Button';

function SubmitButton(){

  return (
    <div className="submit-style">
      <div>
        Please submit your move for this week. <br/>
        You have ____ left to submit.
      </div>
      <div>
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

export default SubmitButton;
