import React, { useEffect, useState } from "react";
import CatPictures from "./CatPictures";
import Button from "./Button";
import "../../src/styles.css";

function CatCarousel() {
  const [pictures, setPictures] = useState([]);
  const fetchData = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_N9aTSxUUWrVYuPr7TWAnq9Ll3uSjdGZIKCSRyyzY5KxQVhIvFkxd6xB1PPI2nQJs")
      .then((data) => data.json())
      .then((data) => {
        let newData = data;
        setPictures(newData);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [pictureIndex, setPictureIndex] = useState(0);
  const handleForwardIndex = () => {
    if (pictureIndex === pictures.length - 1) {
      setPictureIndex(0);
    } else {
      let newIndex = pictureIndex + 1;
      setPictureIndex(newIndex);
    }
  };
  const handleBackwardIndex = () => {
    if (pictureIndex === 0) {
      setPictureIndex(pictures.length - 1);
    } else {
      let newIndex = pictureIndex - 1;
      setPictureIndex(newIndex);
    }
  };
  return (
    <>
      <div className="container">
        <div className="carousel-control">
          <Button buttonName={"⇦"} onClick={handleBackwardIndex} />
          <div>
            <CatPictures className="carousel" index={pictureIndex} pictures={pictures} />
          </div>
          <Button buttonName={"⇨"} onClick={handleForwardIndex} />
        </div>
      </div>
    </>
  );
}

export default CatCarousel;
