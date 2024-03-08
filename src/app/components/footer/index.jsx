import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        © 2023 Imprinting. Template by{" "}
        <a href="https://www.escoladnc.com.br/">Escola DNC</a>
      </p>
      <ul>
        <a href="">
          <li>
            <Facebook />
          </li>
        </a>
        <a href="">
          <li>
            <Twitter />
          </li>
        </a>
        <a href="">
          <li>
            <Instagram />
          </li>
        </a>
        <a href="">
          <li>
            <Linkedin />
          </li>
        </a>
        <a href="">
          <li>
            <Youtube />
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
