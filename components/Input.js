const Input = ({
  handleClick, placeholder, type, name,
}) => (
    <input name={name} placeholder={placeholder} className="w-fit p-2.5 bg-back border border-primary rounded-lg text-primary focus:outline-none placeholder-primary" onChange={handleClick} type={type} />
);

export default Input;
