import { NavLink } from "react-router-dom";
import cls from "classnames";
type SidebarProps = {
  title: string;
  icon: string;
  path: string;
};
const sidebarItems: SidebarProps[] = [
  { title: "Dashboard", icon: "dashboard", path: "/dashboard" },
  { title: "Users", icon: "users", path: "/users" },
  { title: "Products", icon: "products", path: "/products" },
  { title: "Orders", icon: "orders", path: "/orders" },
  { title: "Settings", icon: "settings", path: "/settings" },
];
export default function Sidebar() {
  return (
    <div className="flex flex-col flex-1 w-full">
      {sidebarItems.map((item, index: number) => {
        return (
          <div key={index} className="w-full">
            <NavLink
              to={`/dashboard/${item.path}`}
              className="flex items-center"
            >
              <span>{item.title}</span>
              <span className="ml-2">{item.icon}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
