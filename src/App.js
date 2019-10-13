import React from 'react';
import IndexRoute from './pages/index';
import ImageDetailRoute from './pages/imageDetail';
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component = {IndexRoute} />
        <Route exact path="/image/:name" render={ props => <ImageDetailRoute {...props} /> } />
      </Switch>
    </div>
  );
}

export default App;
