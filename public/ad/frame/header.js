'use strict';

//var React = require('react');

var HeaderSelector = React.createClass({
  render: function () {
    return <header className="main-header">
      <nav className="navbar navbar-static-top" role="navigation">
        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        </a>

        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li>
              <a href="/admin#/postarticle" data-toggle="control-sidebar"><i className="fa fa-edit"></i>
                Post-Article</a>
            </li>
            <li>
              <a href="/login" data-toggle="control-sidebar"><i className="fa fa-edit"></i>
                Login</a>
            </li>

            <li>
              <a href="/signup" data-toggle="control-sidebar"><i className="fa fa-edit"></i>
                Signup</a>
            </li>

            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src="images/i64X64.ico" className="user-image" alt="User Image"/>
                <span className="hidden-xs">Mike Lee</span>
              </a>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img src="images/i64X64.ico" className="img-circle" alt="User Image"/>
                  <p>
                    Software Engineer
                    <small>I love Huami</small>
                  </p>
                </li>
                <li className="user-body">
                  <div className="col-xs-12 text-center"></div>
                </li>
                <li className="user-footer">
                  <div>
                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                    <a href="https://github.com/tianhongbo" className="btn btn-default btn-flat"
                       target="_blank">Followers</a>
                    <a href="#" className="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>
    </header>;
  }
});

//component.HeaderSelector = HeaderSelector;

//module.exports = HeaderSelector;
window.HeaderSelector=HeaderSelector;