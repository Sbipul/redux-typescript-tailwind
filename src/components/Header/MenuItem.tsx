const MenuItem = ({
  item,
  onClick,
}: {
  item: string;
  onClick: (item: string) => void;
}) => {
  return <div onClick={() => onClick(item)}>{item}</div>;
};

export default MenuItem;
