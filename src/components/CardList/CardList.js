<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { collection, getDocs } from "firebase/firestore";
//import { db } from "./firebase"; // Ajusta la ruta a firebase.js según tu estructura de archivos
import CardUser from "../CardUser/CardUser";
import "./CardList.css";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";// Ajusta la ruta a firebase.js según tu estructura de archivos
import { collection, query, getDocs } from "firebase/firestore";

=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
import { Link } from "react-router-dom";
>>>>>>> 568bbe647ec2ea9a82f722b802fa390072c8897f

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    const getUsers = async () => {
    const q = query(collection(db, "productos"));
    const docs = [];
    const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setUsers (docs);
      };
      getUsers();
    }, []);
  




    // antes 
   //* const fetchData = async () => {
   //   const collectionRef = collection(db, "nombre-coleccion"); // Reemplaza "nombre-coleccion" con el nombre de tu colección en Firestore
   //   const snapshot = await getDocs(collectionRef);
     // const data = snapshot.docs.map((doc) => doc.data());
      //setUsers(data);
    //};

    //fetchData();
  //}, []);
/////// ver que es user
=======
    axios("https://api.github.com/users").then((json) =>
      setUsers(json.data)
    );
  }, []);

>>>>>>> 568bbe647ec2ea9a82f722b802fa390072c8897f
  return (
    <div className="Cards-List">
      {users.map((user) => {
        return (
<<<<<<< HEAD
          <div key={user.id}>
            <Link to={`item/${user.id}`}>
=======
          <div key={user.login}>
            <Link to={`item/${user.login}`}>
>>>>>>> 568bbe647ec2ea9a82f722b802fa390072c8897f
              <CardUser data={user} />
            </Link>
          </div>
        );
      })}
    </div>
  );
<<<<<<< HEAD
}


export default CardList; 
=======
};

export default CardList;
>>>>>>> 568bbe647ec2ea9a82f722b802fa390072c8897f
