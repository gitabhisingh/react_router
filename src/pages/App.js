import React from 'react';
//import {Link} from 'react-router-dom';

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><a href="/featured">Featured</a></li>
               <li><a href="/archives">Archives</a></li>
               <li><a href="/settings">Settings</a></li>
            </ul>
				
            {this.props.children}
            <a href="/featured" className="btn btn-danger">featured</a>
            <a href="/archives"><button className="btn btn-success">archives</button></a>
         </div>
      )
   }
}
export default App;