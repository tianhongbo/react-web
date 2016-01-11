'use strict';

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox />,
    document.getElementById('admin')
);

/*
var utils = require('../js/utils');

var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

var TimelineSelector = require('./profile/timeline');
var ProfileSelector = require('./profile/profile');
var PostArticleSelector = require('./tools/post-article');
var ArticleDetailSelector = require('./tools/article-detail');
var Error500 = require('./profile/500');
var HeaderSelector = require('./frame/header');
var SideBarSelector = require('./frame/sidebar');
var FooterSelector = require('./frame/footer');
var NavMapSelector = require('./frame/navmap');
var ContentSelector = React.createClass({
    render: function () {
        return {};
    }
});

var App = React.createClass({
    render: function () {
        return {};
    }
});
*/
var RouteHandler = React.createClass({
    render: function () {
        return (<div></div>);
    }
});
var ContentSelector = React.createClass({
  render: function () {
    return (
        <div id="frame-content">
          <div className="content-wrapper">
            <NavMapSelector />

            <div id="content">
              <RouteHandler />
            </div>
          </div>
        </div>)
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
          <HeaderSelector />
          <SideBarSelector />
          <ContentSelector />
          <FooterSelector />
      </div>
    )
  }
});

/*
 //        <HeaderSelector />
 //        <SideBarSelector />
 //        <ContentSelector />
 //       <FooterSelector />
 */

ReactDOM.render(<App />, document.getElementById('admin'));
/*
ReactRouter.run(<Route path="/" handler={App}>

  <DefaultRoute handler={ProfileSelector}/>

  <Route name='profile' path="profile" handler={ProfileSelector}/>
  <Route name='timeline' path="timeline/:categoryId" handler={TimelineSelector}/>
  <Route name='postarticle' path="postarticle" handler={PostArticleSelector}/>
  <Route name='articledetail' path="articledetail/:id" handler={ArticleDetailSelector}/>
  <Route name='editdetail' path="editdetail/:id" handler={PostArticleSelector}/>

  <NotFoundRoute handler={Error500}/>
</Route>, ReactRouter.HashLocation, function (Root) {
  //React.render(<Root/>, document.getElementById('admin'));
});
*/