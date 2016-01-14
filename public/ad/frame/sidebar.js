'use strict';

//var React = require('react');

var NavigatorItemSelector = React.createClass({

  render: function () {
    var lis = this.props.items.map(function (item) {
      return <li key={item._id}>>
        <a href={"/admin#/timeline/"+item._id}>
          <i className={item.icon}></i> <span>{item.name}</span>
          <small className="label pull-right bg-red">{item.count}</small>
        </a>
      </li>;
    }.bind(this));

    return <ul className="sidebar-menu">
      <li className="header">Forums</li>
      {lis}
      <li><a href="http://www.huami-usa.com/"><i>Announcement</i></a></li>
      <li><a href="http://www.huami-usa.com/"><i>Shouhuan</i></a></li>
      <li><a href="http://www.huami-usa.com/"><i>Scale</i></a></li>

      <li className="header">Support</li>

      <li><a href="http://www.huami-usa.com/"><i>Frequent Q&A</i></a></li>
      <li><a href="http://www.huami-usa.com/"><i>Document Download</i></a></li>
      <li><a href="http://www.huami-usa.com/"><i>Ask in Forums</i></a></li>
      <li><a href="http://www.huami-usa.com/"><i>Live Chat with Technician</i></a></li>
      <li><a href="http://www.huami-usa.com/"><i>Summit a ticket</i></a></li>
    </ul>;
  }
});

var NavigatorSelector = React.createClass({
  getInitialState: function () {
    return {items: [
      {
        "_id" : "56177c406a58b7cb3826e1a4",
        "name" : "Reactjs",
        "icon" : "fa fa-calendar",
        "sort" : 1
      },

      /* 2 */
      {
        "_id" : "56177c606a58b7cb3826e1a5",
        "name" : "Javasctipt",
        "icon" : "fa fa-envelope",
        "sort" : 1
      },

      /* 3 */
      {
        "_id" : "56177c7f6a58b7cb3826e1a6",
        "name" : "C#",
        "icon" : "fa fa-th",
        "sort" : 1
      },

      /* 4 */
      {
        "_id" : "562f9ebecb0f07ee4e813507",
        "name" : "React",
        "icon" : "fa fa-trophy",
        "sort" : 2
      },

      /* 5 */
      {
        "_id" : "562f9ee0cb0f07ee4e813508",
        "name" : "Nodejs",
        "icon" : "fa fa-envelope",
        "sort" : 3
      }
    ]};
  },
  componentDidMount: function () {
    this.fetchData();
  },
  fetchData: function () {
    $.get('/api/getCategory').then(function (category) {
      //get count
      $.get('/api/getArticleCount').then(function (article) {
        _.forEach(category.data, function (cate) {
          _.forEach(article.data, function (art) {
            if (cate._id === art._id) {
              cate.count = art.count;
            }
          });
        });

        this.setState({items: category.data});
      }.bind(this));
//        this.setState({items: category.data});
    }.bind(this));
  },
  render: function () {
    return <NavigatorItemSelector items={this.state.items}/>;
  }
});

var SideBarSelector = React.createClass({
  render: function () {
    return <aside className="main-sidebar">
      <section className="sidebar">
        <a href="#" className="logo">
          <img src="images/huami-usa.png" className="width:170px"/>
        </a>

        <div className="user-panel">
          <div className="pull-left image">
            <img src="images/i64X64.ico" className="img-circle" alt="User Image"/>
          </div>
          <div className="pull-left info">
            <p>Mike Lee</p>
            <a href="https://github.com/tianhongbo"><i className="fa fa-circle text-success"></i>Fork me on Github</a>
          </div>
        </div>
        <NavigatorSelector />
      </section>
    </aside>;
  }
});

//  component.NavigatorSelector = NavigatorSelector;
//  component.SideBarSelector = SideBarSelector;
/*
  NavigatorSelector: NavigatorSelector,
  SideBarSelector: SideBarSelector
};
    */

window.SideBarSelector = SideBarSelector;