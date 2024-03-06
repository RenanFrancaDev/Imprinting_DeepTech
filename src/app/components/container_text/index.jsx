import "./container_text.css";
const Container = ({ h2Text, pText, color }) => {
  return (
    <section className={color}>
      <h2
        className="title_white"
        // style={(color = "color" ? { color: "white" } : { color: "black" })}
      >
        {h2Text}
      </h2>
      <p className="text_white ">{pText}</p>
    </section>
  );
};

export default Container;
