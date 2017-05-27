import React, {Component} from 'react';
import SearchPanel from './searchPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { search: props.location.query.search };
    this.setSearchValue = this.setSearchValue.bind(this);
  }

  setSearchValue(search) {
    this.setState({ search });
  }

  render() {
    return (
      <div>
        <SearchPanel value={this.state.search} onChange={this.setSearchValue} />
        {this.props.children}
      </div>
    );
  }
}

export default App;