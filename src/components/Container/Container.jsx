import { Card } from "../Card/Card";
import "./container.css";

export const Container = () => {
  const list = ["something"];

  return (
    <div className='container'>
      {list.map((item) => (
        <Card />
      ))}
    </div>
  );
};
