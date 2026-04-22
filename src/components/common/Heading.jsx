export const Heading = ({ text, spanText, spanClassName, className }) => {
  return (
    <h1
      className={`${className} text-3xl sm:text-4xl lg:text-5xl leading-120 font-semibold `}
    >
      {text}
      <span className={spanClassName}>{spanText}</span>
    </h1>
  );
};
