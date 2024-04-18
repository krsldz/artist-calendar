const Button = ({ text, type, handleClick }) => (
  <div className="w-fit p-2.5 border border-accent rounded-lg hover:bg-primary hover:border-primary text-accent hover:text-back">
    <button onClick={handleClick} type={type}>
      {text}
    </button>
  </div>
);

export default Button;
