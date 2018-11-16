import React from 'react';


function MoveRankHeaderMobile(){

  return (
    <div className="container">
      <div className="header-lines">
        <svg width='243' height='35' viewBox='0 0 243 35' xmlns='http://www.w3.org/2000/svg'>
          <g id='Desktop' fill='none' fillRule='evenodd' strokeLinecap='square'>
            <g id='ContestantBarHead' transform='translate(-10 -4)' stroke='#979797'>
              <g id='Group' transform='translate(10 4)'>
                <path d='M0.5,34.5 L243.5,34.5' id='Line-2' />
                <path d='M39.5,0.5 L39.5,34.5' id='Line-3' />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="rank-header">
        <div>
          YOUR <br/>RANK
        </div>
        <div className="inner-header">
          <div>
            CONTESTANT
          </div>
          <div className="tribe">
            TRIBE
          </div>
          <div>
            YOUR <br/>STOCK
          </div>
        </div>
      </div>
      <style jsx>{`
        .rank-header {
          display: flex;
          font-weight: bold;
          width: 243px;
          justify-content: space-between;
          align-items: flex-end;
        }
        .tribe{
          padding-left: 8px;
        }
        .inner-header {
          display: flex;
          font-weight: bold;
          width: 243px;
          justify-content: space-between;
          align-items: flex-end;
          margin-left: 9px;
        }
        .container{
          margin-top: 20px;
          position: relative;
          display: flex;
          justify-content: center;
          margin-right: 15px;
        }
        .header-lines {
          width: 243px;
          position: absolute;
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
        }
    `}</style>
    </div>
  );
}

export default MoveRankHeaderMobile;
