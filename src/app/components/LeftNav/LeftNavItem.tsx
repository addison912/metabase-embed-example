import Link from "next/link";
import type { MenuItem } from "@/types/ui";

type NavItemProps = {
  item: MenuItem;
  open: boolean;
};

const NavItem = ({ ...props }: NavItemProps) => {
  const { item, open } = props;
  return (
    <>
      {item.href ? (
        <li
          className={`${item.separator ? "before:content-['Hello_World']" : ""}`}
        >
          <Link href={item.href} className="aside-item aside-item-primary">
            <div className="group flex items-center">
              <item.icon
                className={`${item.separator ? "" : ""} h-6 w-6 shrink-0 text-gray-500 transition duration-150 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white`}
              />
              {open ? <span className="ms-3">{item.name}</span> : null}
            </div>
            {open ? <div>{item.after}</div> : null}
          </Link>
        </li>
      ) : (
        <li>
          <button
            onClick={item.onClick}
            className="aside-item aside-item-primary group flex w-full items-center"
          >
            <div
              className={`group flex items-center ${open ? "" : "w-full justify-center"}`}
            >
              <item.icon className="h-6 w-6 shrink-0 text-gray-500 transition duration-150 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              {open ? <span className="ms-3">{item.name}</span> : null}
            </div>
          </button>
        </li>
      )}
    </>
  );
};

export default NavItem;
