import Button from "./button";
import { SiUdemy } from "react-icons/si";
import { RiYoutubeFill } from "react-icons/ri";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <SiUdemy className="w-4 h-4" />,
    link: "#",
    username: "Kubilay Özdemir",
  },
  {
    icon: <RiYoutubeFill className="w-5 h-5" />,
    link: "#",
    username: "Dev7",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "#",
    username: "Kubilay Özdemir",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: "#",
    username: "Kubilay Özdemir",
  },
];
