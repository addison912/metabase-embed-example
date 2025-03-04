type IconProps = {
  symbol: string;
  className?: string;
};

const Icon = ({ symbol, className }: IconProps) => {
  return (
    <span className={`${"material-symbols-outlined"} ${className}`}>
      {symbol}
    </span>
  );
};

export default Icon;
