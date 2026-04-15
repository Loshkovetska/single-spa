type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="primary">{children}</button>;
};

export { Button };
