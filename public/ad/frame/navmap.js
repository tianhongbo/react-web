'use strict';

//var React = require('react');

var NavMapSelector = React.createClass({
  getInitialState: function () {
    return {
      category: 'abc',
      first: 'x',
      second: 'y',
      third: 'z'
    };
  },
  componentWillReceiveProps: function (nextProps) {
    console.log('NavMapSelector!!!');
  },
  render: function () {
    return <section className="content-header">
      <h1>
        {this.state.category}
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i>{this.state.first}</a></li>
        <li><a href="#">{this.state.second}</a></li>
        <li className="active">{this.state.third}</li>
      </ol>
    </section>;
  }
});

//module.exports = NavMapSelector;
window.NavMapSelector = NavMapSelector;