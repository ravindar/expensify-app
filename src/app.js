import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpense);
// });

// const expenseOne = store.dispatch(
//   addExpense({ description: "Water bill", amount: 4500, createdAt: 10000 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Gas bill", amount: 300, createdAt: 100000 })
// );
// const expenseThree = store.dispatch(
//   addExpense({ description: "Rent", amount: 109500, createdAt: 1000 })
// );

//store.dispatch(setTextFilter("bill"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
