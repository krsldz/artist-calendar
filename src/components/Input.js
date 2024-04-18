const Input = ({ handleClick, placeholder, type, name }) => (
  <input
    name={name}
    placeholder={placeholder}
    className="w-64 p-2.5 mr-4 bg-main rounded-lg text-white focus:outline-none placeholder:text-slate-400"
    onChange={handleClick}
    type={type}
  />
);

export default Input;
