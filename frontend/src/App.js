import React, {Fragment} from 'react';
import MainPage from "./containers/MainPage/MainPage";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <Fragment>
      <Container style={{marginTop: '30px'}}>
        <Switch>
          <Route path='/' exact component={MainPage} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
