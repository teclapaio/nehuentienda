import { useState, useEffect } from "react";
import axios from "axios";

import CardUser from "../../components/CardUser/CardUser";

import { useParams } from "react-router-dom";

const ItemPage = () => {
 
  const [users, setUsers] = useState([]);

  let {id } = useParams();
  

  
useEffect(() => {
  axios(`https://api.github.com/users/${id}`)
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.error(error);
      // Maneja el error, por ejemplo, mostrando un mensaje de error al usuario
    });
}, [id]);
  
 return (
  <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
    {Object.keys(users).length > 0 ? <CardUser data={users} /> : null}
  </div>
);
};

export default ItemPage;