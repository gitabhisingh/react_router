import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';

import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Archives from './pages/Archives';
import Settings from './pages/Settings';

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path="/" component={Layout}>
         <IndexRoute component={Featured} />
         <Route path="archives/:article" component={Archives} />
         <Route path="settings" component={Settings} />
      </Route>
   </Router>
	
), document.getElementById('app'));