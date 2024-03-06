import "./card.css";
const Card = ({ children, title, text }) => {
  return (
    <div className="wrapper_card">
      {children}
      <h4 className="title_card">{title}</h4>
      <p className="text_card">{text}</p>
    </div>
  );
};

export default Card;
