function Button({ buttonName, onClick }) {
  return (
    <>
      <button className="button" onClick={onClick}>
        {buttonName}
      </button>
    </>
  );
}

export default Button;
