import React from 'react';
import { connect } from 'react-redux';
import ContestantForm from './ContestantForm';
import EpisodeForm from './EpisodeForm';


class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (

      <div>
        <ContestantForm />
        <EpisodeForm />
      </div>
    );
  }
}

export default connect()(Admin);
