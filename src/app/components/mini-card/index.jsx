import "./card.css";
const MiniCard = ({ children, text }) => {
  return (
    <div className="wrapper_miniCard">
      {children}
      <p className="text_miniCard">{text}</p>
    </div>
  );
};

export default MiniCard;
