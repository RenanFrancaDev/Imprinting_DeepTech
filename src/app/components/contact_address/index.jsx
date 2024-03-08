import "./contact.css";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <ul className="contact_address">
      <li>
        <Mail height={20} width={20} />
        <p>E-mail: contact@institutoimprinting.com.br</p>
      </li>
      <li>
        <Phone height={20} width={20} />
        <p>Telefone: +55 (51)98546-6852</p>
      </li>
    </ul>
  );
};

export default Contact;
