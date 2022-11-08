import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./container.css";

export const Container = () => {
<<<<<<< HEAD
  const list = [];
=======
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setList(["c1", "c2", "c3"]);
    };
    fetchCharacters();
  }, []);
>>>>>>> f4ebe85c06c5ab8fd3bf8649a19afb3ab4e51434

  return (
    <div className='container'>
      {list.map((item) => (
        <Card />
      ))}
    </div>
  );
};
