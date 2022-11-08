import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./container.css";

export const Container = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setList(["c1", "c2", "c3"]);
    };
    fetchCharacters();
  }, []);

  return (
    <div className='container'>
      {list.map((item) => (
        <Card />
      ))}
    </div>
  );
};
