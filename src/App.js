import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './css/base.css'
import './css/vendor.css'
import './css/main.css'


import BlogContentDisplay from './pages/BlogContentDisplay';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Route>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/blog" component={BlogContentDisplay} />
            </Switch>
            <Footer />
        </Route>
    </Router>
    </>
  );
}

export default App;
