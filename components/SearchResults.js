'use strict'
const React = require('react');

const SearchResults = ({ results })=> (
    // const results = result ? result.map((res) =>
    //   <li><p>{res.description}</p>
    //     <a href={res.link}>{res.title}</a>
    //   </li> ) : null
      <ul className="search-results">
      {
        results.map((res, i) => (
        <li>
          <p>{res.description}</p>
          <a href={res.link}>{res.title}</a>
        </li>
      ))
    }
  </ul>
);


module.exports = SearchResults;
