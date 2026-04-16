type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-primary px-2 py-1 text-label-sm">{children}</button>
  );
};

export { Button };
