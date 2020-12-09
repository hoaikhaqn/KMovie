import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import { Container } from 'reactstrap';
// Suspense
// routes config
import routes from "../../routes";

// import $ from 'jquery'
// const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter.jsx"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader.jsx"));
// const DefaultLoading = React.lazy(() => import("./DefaultLoading.jsx"));

export default function DefaultLayout(props) {
  const signOut = e => {
    e.preventDefault();
    props.history.push("/login");
  };
  const handelKeyword = event =>{
    if (event.target.value !== "" && event.keyCode === 13) {
      props.history.push(`/tim-kiem/${event.target.value}`)
    }
  }
  return (
    <div className="App">
        <DefaultHeader handelKeyword={e=>handelKeyword(e)} onLogout={e => signOut(e)} />
        <main className="main">
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              ) : null;
            })}
            <Redirect from="/" to="/" />
          </Switch>
        </main>
        <footer>
          <DefaultFooter />
        </footer>
    </div>
  );
}
