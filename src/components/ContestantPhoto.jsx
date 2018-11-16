import React from 'react';


function ContestantPhoto(){

  return (
    <div className='photo-circle'>
      <img src='https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/2f368ae8a128c594_svr_christianh_800x1000.jpg' className="photo"/>

      <style jsx>{`
        .photo-circle {
          width: 53px;
          height: 53px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: rgb(84, 150, 82) 0px 0px 1px 3px;
        }
        .photo {
          width: 53px;
        }
    `}</style>
    </div>
  );
}

export default ContestantPhoto;
