var React = require('react');
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;

var API = require('./api');

var routes = (<Route handler={require('./components/App')}>
  <Route name='home' path='/' handler={require('./components/Home')}/>
  <Route name='user' path='/user' handler={require('./components/Home')}/>
</Route>);

API.fetchChirps();
API.fetchUsers();

ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root) {
  React.render(<Root/>, document.getElementById('app'));
});
