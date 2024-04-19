const Typography = ({ type, text }) => {
  const renderTitle = () => {
    switch (type) {
      case 'main':
        return (
          <h1 className="text-5xl font-semibold  tracking-widest text-white">{text}</h1>
        );
      case 'secondary':
        return <h2 className="text-3xl text-accent">{text}</h2>;
      case 'title':
        return (
          <span className="inline-block text-white text-xl font-medium tracking-wider mb-8">
            {text}
          </span>
        );
      case 'typing':
        return (
          <span className="text-3xl relative w-[max-content] font-mono text-accent before:absolute before:inset-0 before:bg-main before:animate-typewriter">
            {text}
          </span>
        );
      default:
        return (
          <span className="text-lg font-semibold mt-2 text-white tracking-wide">
            {text}
          </span>
        );
    }
  };
  return <>{renderTitle()}</>;
};

export default Typography;
