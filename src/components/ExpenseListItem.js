import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`} id={id}>
        {description}{" "}
      </Link>
    </h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
