import React from 'react';
import { Link } from 'react-router-dom';

class NavTab extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'unselected'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({selectedTab: 'selected'});
  }

  render(){
    return (
      <div className={this.state.selectedTab} onClick={this.handleClick}>
        <Link to={this.props.name} style={{textDecoration: 'none', color: 'black'}}>{this.props.name}</Link>

        <style jsx>{`
          .unselected {
            padding: 8px 14px;
            text-decoration: none;
          }
          .selected {
            color: red;
            padding: 8px 14px;
            text-decoration: none;
          }
      `}</style>
      </div>
    );
  }
}

export default NavTab;
