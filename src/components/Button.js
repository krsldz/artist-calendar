const Button = ({ text, type, handleClick }) => (
  <button
    className="w-full p-2.5 mr-4 mt-4 border border-accent rounded-lg hover:bg-primary hover:border-primary text-accent hover:text-back"
    onClick={handleClick}
    type={type}
  >
    {text}
  </button>
);

export default Button;
