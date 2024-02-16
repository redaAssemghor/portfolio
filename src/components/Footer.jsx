import {
  faFacebookMessenger,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer className=" mt-40">
      {location.pathname === "/" && <Info />}
      <div className="flex justify-between items-center h-36 footer-bg">
        <dir className="flex gap-10">
          <a
            className="text-gray-500 text-2xl lg:text-4xl hover:scale-125 duration-500"
            href="https://www.instagram.com/redaassemghor_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="text-gray-500 text-2xl lg:text-4xl hover:scale-125 duration-500"
            href="https://www.facebook.com/profile.php?id=100003490687218"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </a>
          <a
            className="text-gray-500 text-2xl lg:text-4xl hover:scale-125 duration-500"
            href="https://twitter.com/AssemghorReda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </dir>
        <p className="text-gray-500 dark:text-gray-400 font-light">
          © 2024 . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

function Info() {
  return (
    <div id="contact" className="flex flex-col items-center ">
      <h1 className="font-semibold text-pink-600">Contact Me</h1>
      <p className="text-5xl font-bold w-1/2 text-center m-8">
        Let's Create Together A Unique Site That Looks Like You.
      </p>
      <div className="font-bold flex items-center">
        <img
          className=" h-16 border rounded-full mr-8"
          src="src/assets/avatar.png"
          alt=""
        />
        <a href="/contact">
          <span className=" underline mr-1">SEND ME</span>{" "}
          <span className="text-pink-600 underline">A MESSAGE</span>
        </a>
      </div>
    </div>
  );
}
export default Footer;
