import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";


const CategoriaPage = () => {
    const [users, setUsers] = useState([]);
    let { categoriaId } = useParams();

    console.log("categor", categoriaId)
 
    let filteredUsuarios = users.filter((users) => {
        return users.type === categoriaId;
      });
      console.log("filteredUsuarios", filteredUsuarios);
    useEffect(() => {
        axios("https://api.github.com/users").then((json) =>
          setUsers(json.data)
        );
      }, []);
      return (
        <div className="Cards-List">
          { filteredUsuarios.map((user) => {
            return (
                <div style={{ margin: 10 }} key={user.id}>
                
                  <CardUser data={user} />    
                
              </div>
            );
          })}
        </div>
      );

}

export default CategoriaPage