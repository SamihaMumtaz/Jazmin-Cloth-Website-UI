const Button = ({ text, onClick }) => {
  return (
    <div className='button'>
      <button className="button button--hyperion" onClick={onClick}>
        <span><span>{text}</span></span>
      </button>
    </div>
  );
};

export default Button;  