
import { RiHome2Fill, RiHome2Line, RiMessengerFill,RiMessengerLine  } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";
import {MdOutlineFavoriteBorder, MdOutlineFavorite} from "react-icons/md"
import {IoMdNotificationsOutline, IoMdNotifications} from "react-icons/io"
import {FiLogOut} from "react-icons/fi"
interface NavItemProps {
  id: number;
  href?: string;
  activeIcon: IconType;
  passiveIcon: IconType;
  onClick?: () => void;
  size: number;
  additionalStyle?: string
}

export default function Navbar() {
  const navItems: NavItemProps[] = [
    {
      id: 1,
      href: "/",
      activeIcon: RiHome2Fill,
      passiveIcon: RiHome2Line,
      size: 30,
    },
    {
        id: 2,
        href: '/favorites',
        activeIcon: MdOutlineFavorite,
        passiveIcon: MdOutlineFavoriteBorder,
        size: 30
    },
    {
        id: 3,
        href: '/messages',
        activeIcon: RiMessengerFill,
        passiveIcon: RiMessengerLine,
        size: 30
    },
    {
        id: 4,
        href: '/notifications',
        activeIcon: IoMdNotifications,
        passiveIcon: IoMdNotificationsOutline,
        size:30
    },
    /* TODO:USER PROFILE  */
    {
        id: 6,
        activeIcon: FiLogOut,
        passiveIcon: FiLogOut,
        size: 27,
        additionalStyle: 'ml-4'
    }
  ];
  return (
    <nav className="flex items-center gap-x-6">
      {navItems.map((navItem: NavItemProps) => (
        <NavItem key={navItem.id} navItem={navItem} />
      ))}
    </nav>
  );
}

function NavItem({ navItem }: { navItem: NavItemProps }) {
  if (navItem?.href  ) {
    return (
      <NavLink to={navItem.href} className={"text-black"}>
        {({ isActive }) => {
          return isActive ? (
            <navItem.activeIcon size={navItem.size} />
          ) : (
            <navItem.passiveIcon size={navItem.size} />
          );
        }}
      </NavLink>
    );
  }

  return (
    <button className={"text-black " + navItem.additionalStyle}>
        <navItem.activeIcon size={navItem.size}/>
    </button>
  )
}
