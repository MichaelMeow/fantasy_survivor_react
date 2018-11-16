import React from 'react';
import PropTypes from 'prop-types';

function Button(props){
  const buttonName = props.name.toUpperCase();
  return (
    <div className="button-style">
      {buttonName}
      <style jsx>{`
        .button-style {
          padding: 5px 35px;
          background-color: #8EE7EC;
          border-radius: 5px;
          border: none;
          color: #010101;
        }
    `}</style>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
