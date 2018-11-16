import React from 'react';
import ContestantPhotoMobile from './ContestantPhotoMobile';

function RankBarMobile(){

  return (
    <div className="rank-bar-container">
      <div className="contestant-photo">
        <ContestantPhotoMobile/>
      </div>
      <div className="rank-text-center">
        <div className="rank-bar-text">
          <div className="rank">
            1
          </div>
          <div className="contestant">
            Christian Hubicki
          </div>
          <div className="tribe">
            Tiva
          </div>
          <div className="stock">
            2.3<span>(+1.0)</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .rank-bar-container {
          display: flex;
          justify-content: center;
          position: relative;
          margin-top: 18px;
          margin-right: 15px;
        }
        .contestant-photo {
          position: absolute;
          top: 0;
          transform: translateX(-140px);
        }
        .rank-bar-text {
          display: flex;
          width: 243px;
          margin-top: 10px;
        }
        .rank {
          width: 44px;
          text-align: center;
        }
        .contestant{
          width: 109px;
        }
        .tribe{
          width: 50px;
        }
        .stock{
          width: 45px;
          text-align:center;
        }
        span {
          font-size: .8rem;
          color: #8EE7EC;
        }
    `}</style>
    </div>
  );
}

export default RankBarMobile;
