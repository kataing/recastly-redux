import React from 'react';
import App from './App.js';
 
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    // this.props.handleInputChange = this.props.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  // handleInputChange(e) {
  //   this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.handleInputChange.bind(this)}
        />
      <button className="btn hidden-sm-down" onClick={() => this.props.handleSearchInputChange(this.state.value)}> 
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
