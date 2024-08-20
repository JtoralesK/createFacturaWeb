import { MdDashboard } from "react-icons/md";
import { PiCardsThreeFill } from "react-icons/pi";
import { FaPoll } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

export function LeftBar() {
  return (
    <div className="fixed top-0 left-0 w-32 h-screen bg-principalColor flex flex-col items-center justify-between py-7">
      <div className="p-2 bg-tertiaryColor rounded-xl">
        <PiCardsThreeFill className="text-secondaryColor text-2xl cursor-pointer" />
      </div>
      <div className="flex flex-col gap-10">
        {LeftBarLinks.map((link) => {
          return <div key={link.id}>{link.icon}</div>;
        })}
      </div>
      <CiLogout className="text-secondaryColor text-3xl hover:text-white cursor-pointer" />
    </div>
  );
}
const LeftBarLinksClass =
  "text-secondaryColor text-3xl hover:text-white cursor-pointer";
const LeftBarLinks = [
  {
    icon: <MdDashboard className={LeftBarLinksClass} />,
    link: "/dashboard",
    id: 1,
  },
  {
    icon: <FaFileAlt className={LeftBarLinksClass} />,
    link: "/invoices",
    id: 2,
  },
  {
    icon: <FaPoll className={LeftBarLinksClass} />,
    link: "/reports",
    id: 3,
  },
  {
    icon: <FaUser className={LeftBarLinksClass} />,
    link: "/profile",
    id: 4,
  },
  {
    icon: <FaFileInvoice className={LeftBarLinksClass} />,
    link: "/invoice",
    id: 5,
  },
];
