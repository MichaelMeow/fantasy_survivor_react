import React from 'react';
import RankBarMobile from './RankBarMobile';



class MoveRank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
      <RankBarMobile/>
      <RankBarMobile/>
      <RankBarMobile/>
      
      
      <style jsx>{`
        
        `}</style>
        </div>
      );
  }
}

export default MoveRank;
