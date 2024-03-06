import Image from "next/image";

const Banner = ({ image }) => {
  return (
    <Image
      src={image}
      alt="logo imprinting"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto", opacity: "0.8" }}
    />
  );
};

export default Banner;
