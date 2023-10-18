import "../../src/styles.css";

function CatPictures({ index, pictures }) {
  let data = [...pictures];
  return (
    <>
      <div>
        <img className="image" src={`${data[index]?.url}`} alt="cat picture" />
      </div>
    </>
  );
}

export default CatPictures;
