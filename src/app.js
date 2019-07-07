import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
//import "./firebase/firebase";

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

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
