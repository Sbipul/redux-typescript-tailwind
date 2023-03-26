import { FC } from "react";
import MenuItem from "./MenuItem";
import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const Header: FC = () => {
  const items = ["Home", "Posts", "About us", "Contact us"];
  const navigate = useNavigate();
  const onClick = (pageName: string): void => {
    navigate(pageName);
  };
  return (
    <div className="container">
      <div className="grid grid-cols-12 align-middle items-center py-2">
        <div className="col-span-1">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
              alt=""
              className="h-12 w-12 rounded-full overflow-hidden"
            />
          </div>
        </div>
        <div className="col-span-3">
          <div>
            <ul className="flex items-center justify-between">
              {items?.map((item, i) => (
                <li key={i}>
                  <MenuItem item={item} onClick={onClick} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-8">
          <div className="flex items-center justify-end">
            <button className="flex items-center">
              Login <HiArrowLongRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
