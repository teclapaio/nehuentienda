import React, { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
import { Link } from "react-router-dom";

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://api.github.com/users").then((json) =>
      setUsers(json.data)
    );
  }, []);

  return (
    <div className="Cards-List">
      {users.map((user) => {
        return (
          <div key={user.login}>
            <Link to={`item/${user.login}`}>
              <CardUser data={user} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;