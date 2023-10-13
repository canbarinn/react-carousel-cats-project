import React, { useState } from "react";
import CatPictures from "./CatPictures";
import { catData } from "../data/catData";
import Button from "./Button";

const data = [...catData];
function CatCarousel() {
  const [pictureIndex, setPictureIndex] = useState(0);
  const handleForwardIndex = () => {
    if (pictureIndex === data.length - 1) {
      setPictureIndex(0);
    } else {
      let newIndex = pictureIndex + 1;
      setPictureIndex(newIndex);
    }
  };
  const handleBackwardIndex = () => {
    if (pictureIndex === 0) {
      setPictureIndex(data.length - 1);
    } else {
      let newIndex = pictureIndex - 1;
      setPictureIndex(newIndex);
    }
  };
  return (
    <>
      <div>
        <Button buttonName={"Backward"} onClick={handleBackwardIndex}/>
        <div>
          <CatPictures url={data[pictureIndex]} />
        </div>
        <Button buttonName={"Forward"} onClick={handleForwardIndex}/>
      </div>
    </>
  );
}

export default CatCarousel;
