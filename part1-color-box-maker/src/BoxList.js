import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const add = (newBox) => {
    setBoxes((oldBoxes) => [...oldBoxes, newBox]);
  };
  const deleteBox = (id) => {
    setBoxes((oldBoxes) => oldBoxes.filter((box) => box.id !== id));
  };
  return (
    <>
      {boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          deleteBox={deleteBox}
        />
      ))}
      <NewBoxForm createBox={add} />
    </>
  );
}

export default BoxList;
