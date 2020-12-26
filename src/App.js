import React from 'react'
import InputSpirit from './Components/InputSpirit.js'
import Detail from './Components/Detail.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'



const App = () => {
 
  return (
    <Router>
    
    <div className="App">

      <Switch>
      <Route path="/" exact component={InputSpirit} />
      <Route path="/detail/:id"   exact component={Detail} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
