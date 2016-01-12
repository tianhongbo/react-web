'use strict';
//var React = require('react');

var FooterSelector = React.createClass({
  render: function () {
    return <footer className="main-footer">
      <div className="pull-right hidden-xs">
        <b>Version</b> 0.0.1
      </div>
      <strong>Copyright &copy; 2015-2016 <a href="http://www.huami-usa.com">Huami Inc. </a>.</strong>
      All rights reserved. Design by
      <strong><a href="http://www.huami-usa.com"> Huami Inc. </a>.</strong>
    </footer>;
  }
});

//component.FooterSelector = FooterSelector;

//module.exports = FooterSelector;

window.FooterSelector = FooterSelector;