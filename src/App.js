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
import CategoryPage from './pages/category';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import { useAuth } from './services/auth.service';
import CartPage from './pages/cart';
import ProfilePage from './pages/profile';
import MyLearning from './pages/myLearning';

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
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route
            exact
            path="/categories/:category/courses/:courseId"
            component={CourseDetail}
          />
          <Route exact path="/categories/:category" component={CategoryPage} />
          <Route exact path="/learning" component={MyLearning} />
          <Route exact path="/notFound" component={NotFound} />
          <Redirect exact from="/*" to="/notFound" />
        </Switch>
      </OverallLayout>
    </Router>
  );
}
export default App;
