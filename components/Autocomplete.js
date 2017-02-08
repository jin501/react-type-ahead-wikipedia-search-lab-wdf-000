'use strict'

const React = require('react');
const actions = require('../actions');
const resultStore = require('../stores/resultStore');

const SearchResults = require('./SearchResults');
const SearchField = require('./SearchField');

class Autocomplete extends React.Component {
  constructor() {
    super();
    this.state = {
      results: resultStore.getState().results,
      query: ''
    };
    this.handleQueryChange = this.handleQueryChange.bind(this)
  }

  componentDidMount(){
    console.log('componentDidMount')
      this.removeListener = resultStore.addListener((state) => {
        this.setState(state)
      });
    }


    componentWillUnmount(){
      this.removeListener();
    }


    handleQueryChange(event){
      console.log("handleQueryChange", event)
      const query = event.target.value
      this.setState({
        query
      })
      if(query.length > 2){
        actions.search(query)
      }
    }

    render() {
      debugger
      return (
        <div className="autocomplete">
          <h2>Autocomplete</h2>
          <SearchField value={this.state.query} onChange={this.handleQueryChange}/>
          <SearchResults results={this.state.results} />
        </div>
      );
    }
  }

  module.exports = Autocomplete;
