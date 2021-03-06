var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var ReactBootstrap = require('react-bootstrap');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;

var Navigation = require('./components/navigation');
var SearchPage = require('./pages/search');
var ResultsPage = require('./pages/results');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation />
        <RouteHandler />
      </div>
    );
  }
});

var NotFound = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={SearchPage}/>
    <Route name="home" path="/" handler={SearchPage}/>
    <Route name="results" path="results" handler={ResultsPage}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});