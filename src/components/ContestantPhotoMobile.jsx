import React from 'react';
import PropTypes from 'prop-types';


function ContestantPhotoMobile({ photoURL }){

  return (
    <div className='photo-circle'>
      <img src={photoURL} className="photo"/>

      <style jsx>{`
        .photo-circle {
          width: 33px;
          height: 33px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: rgb(84, 150, 82) 0px 0px 1px 3px;
        }
        .photo {
          width: 33px;
        }
    `}</style>
    </div>
  );
}

ContestantPhotoMobile.propTypes = {
  photoURL: PropTypes.string
};

export default ContestantPhotoMobile;
