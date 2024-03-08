import Banner from "@/app/components/banner_img";
import Container from "@/app/components/container_text";
import MiniCard from "@/app/components/mini-card";
import Image from "next/image";
import { DollarSignIcon, Group, Rocket, Target } from "lucide-react";

const Crypto = () => {
  return (
    <>
      <div className="color">
        <Banner image={"/images/design2.png"} />
      </div>
      <Container
        h2Text={"O que é o IPO Humano Imprinting Crypto Tech?"}
        pText={
          "É uma iniciativa inovadora que visa democratizar o acesso à saúde mental de qualidade através da distribuição da Imprinting Coin (IMP), a criptomoeda propulsora da revolução nesse setor."
        }
      />
      <div className="div_color">
        <h2>Mais que uma Criptomoeda!</h2>
        <MiniCard
          text={
            "Criação de um repositório nacional de dados em saúde mental e bem-estar social."
          }
        />
        <MiniCard
          text={
            "Equipe altamente qualificada e comprometida em fazer a diferença no mundo."
          }
        />
        <a href="/contato">
          <h4>Junte-se a nós nesta jornada!</h4>
        </a>
        <Image
          src={"/images/design4.png"}
          height={200}
          width={150}
          className="img_center"
        />

        <p>
          Saiba mais sobre o programa
          <a href="/eu-sou">
            <b>
              {" "}
              <u>"Eu Sou"</u>
            </b>
          </a>
        </p>
      </div>
      <div>
        <h2>Objetivos</h2>
        <MiniCard
          text={
            "Distribuir 1 bilhão de tokens IMP por R$0,01 (um centavo de real) por copia"
          }
        >
          <Target height={45} width={45} />
        </MiniCard>
        <MiniCard
          text={"Captar R$ 10 milhões na distribuição do primeiro lote."}
        >
          <DollarSignIcon height={45} width={45} />
        </MiniCard>
        <MiniCard
          text={
            "Integrar co-fundadores excepcionais para impulsionar a inovação e o crescimento."
          }
        >
          <Group height={45} width={45} />
        </MiniCard>
        <MiniCard
          text={
            "Lançar a Agência de soluções e tecnologias Ethereum Instituto Imprinting em rede internacional, democratizando o acesso a serviços de alta qualidade."
          }
        >
          <Rocket height={45} width={45} />
        </MiniCard>
      </div>
    </>
  );
};

export default Crypto;
