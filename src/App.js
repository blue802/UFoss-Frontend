import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import OverallLayout from './layouts/OverallLayout';
import Authentication from './pages/auth';
import NotFound from './pages/error';
import HomePage from './pages/home';
import CourseDetail from './pages/course';
import CategoryDetail from './pages/category';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import runServer from './server';
import { useAuth } from './services/auth.service';
import CartPage from './pages/cart';

// runServer();

function App() {
  const [logged] = useAuth();

  return (
    <Router>
      <OverallLayout>
        <Switch>
          {!logged && <Route exact path="/login" component={Authentication} />}
          {!logged && (
            <Route exact path="/register" component={Authentication} />
          )}
          {!logged && (
            <Route
              exact
              path="/reset-password"
              component={ForgotPasswordPage}
            />
          )}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/courses/:courseId" component={CourseDetail} />
          <Route exact path="/categoryDetail" component={CategoryDetail} />
          <Route exact path="/notFound" component={NotFound} />
          <Redirect exact from="/*" to="/notFound" />
        </Switch>
      </OverallLayout>
    </Router>

  );
}
export default App;
