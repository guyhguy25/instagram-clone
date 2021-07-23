import './App.css';
import Profile from './Profile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Messenger from './Messenger';
import Post from './Post';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
        {/* <h1>CHECK INSTAGRAM CLONE</h1>
        <h2>Not functional</h2>
        <h3>Only Styled</h3> */}
        {/* <Post /> */}
        {/* <Messenger/> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Profile /> */}

        <Router>
            <Switch>
                <Route path="/Register" component={Register} />
                <Route path="/Login" component={Login} />
                <Route path="/direct/inbox" component={Messenger} />
                <Route path="/p/" component={Post} />
                <Route path="/Christopher" component={Profile} />
                <Route exact path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
