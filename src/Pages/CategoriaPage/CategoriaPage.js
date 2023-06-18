import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const CategoriaPage = () => {
  const [users, setUsers] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    axios("https://api.github.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const filteredUsuarios = users.filter((user) => {
    return user.type === categoriaId;
  });

  return (
    <div className="Cards-List">
      {filteredUsuarios.map((user) => (
        <div style={{ margin: 10 }} key={user.id}>
          <Link to={`/item/${user.login}`}>
            <CardUser data={user} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriaPage;