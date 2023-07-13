import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { collection, getDocs } from "firebase/firestore";
//import { db } from "./firebase"; // Ajusta la ruta a firebase.js según tu estructura de archivos
import CardUser from "../CardUser/CardUser";
import "./CardList.css";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";// Ajusta la ruta a firebase.js según tu estructura de archivos
import { collection, query, getDocs } from "firebase/firestore";


const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
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
  return (
    <div className="Cards-List">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`item/${user.id}`}>
              <CardUser data={user} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}


export default CardList; 