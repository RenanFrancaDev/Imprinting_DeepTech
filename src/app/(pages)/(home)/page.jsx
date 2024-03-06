import Banner from "@/app/components/banner_img";
import Button from "@/app/components/button";
import ContainerWhite from "@/app/components/container_text";
import Header from "@/app/components/header";

const Home = () => {
  return (
    <>
      <Header />
      <Banner image={"/images/logo.jpg"} />
      <ContainerWhite
        h2Text={
          "Revolucionando a Saúde Mental com o 1° IPO Humano Imprinting Crypto Tech!"
        }
        pText={
          "Prepare-se para uma nova era na saúde mental e bem-estar social! O Instituto Imprinting, liderado pelo visionário Jônatas Alexsandro da Rosa Rodrigues, anuncia o primeiro IPO Humano Imprinting Crypto Tech, abrindo caminho para um futuro mais promissor para todos.Participe da pré-venda e faça parte dessa transformação!"
        }
        color={"transparent"}
      />
      <Button />
      <ContainerWhite
        h2Text={"Instituto Imprinting: Transformando a Pesquisa em DeepTech"}
        pText={
          "Olá! Somos o Instituto Imprinting, uma startup de DeepTech dedicada a revolucionar a pesquisa científica e o desenvolvimento humano. Estamos empenhados em impulsionar a inovação e promover avanços significativos em neurobiologia por meio da pesquisa em Neuropsicofarmacologia e Nuroaprendizagem. Nosso objetivo é construir um futuro que une conhecimentos ancestrais com pesquisa científica e tecnologias de ponta para melhorar a qualidade de vida da população."
        }
        color={"color"}
      />
    </>
  );
};

export default Home;
