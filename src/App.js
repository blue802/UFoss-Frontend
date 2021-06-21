import React from 'react';
import { Switch, Route } from 'react-router-dom';

import OverallLayout from './layouts/OverallLayout';
import Authentication from './pages/auth';
import HomePage from './pages/home';
import CourseDetail from "./pages/courseDetail"

function App() {
  return (
    <CourseDetail />
    // <OverallLayout>
    //   <Switch>
    //     <Route exact path="/login" component={Authentication} />
    //     <Route exact path="/signup" component={Authentication} />
    //     <Route exact path="/coursedetail" component={CourseDetail} />
    //     <Route exact path="/" component={HomePage} />
    //   </Switch>
    // </OverallLayout>
  );
}
export default App;
