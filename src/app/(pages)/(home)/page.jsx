import Banner from "@/app/components/banner_img";
import Button from "@/app/components/button";
import ContainerText from "@/app/components/container_text";
import Card from "@/app/components/card";
import { Cog } from "lucide-react";

const Home = () => {
  return (
    <>
      <Banner image={"/images/logo.jpg"} />
      <ContainerText
        h2Text={
          "Revolucionando a Saúde Mental com o 1° IPO Humano Imprinting Crypto Tech!"
        }
        pText={
          "Prepare-se para uma nova era na saúde mental e bem-estar social! O Instituto Imprinting, liderado pelo visionário Jônatas Alexsandro da Rosa Rodrigues, anuncia o primeiro IPO Humano Imprinting Crypto Tech, abrindo caminho para um futuro mais promissor para todos.Participe da pré-venda e faça parte dessa transformação!"
        }
        color={"transparent"}
      />
      <Button text={"Saiba Mais"} link={"/crypto-tech"} />
      <ContainerText
        h2Text={"Instituto Imprinting: Transformando a Pesquisa em DeepTech"}
        pText={
          "Olá! Somos o Instituto Imprinting, uma startup de DeepTech dedicada a revolucionar a pesquisa científica e o desenvolvimento humano. Estamos empenhados em impulsionar a inovação e promover avanços significativos em neurobiologia por meio da pesquisa em Neuropsicofarmacologia e Nuroaprendizagem. Nosso objetivo é construir um futuro que une conhecimentos ancestrais com pesquisa científica e tecnologias de ponta para melhorar a qualidade de vida da população."
        }
        color={"color"}
      />

      <Card
        title={"Pesquisadores"}
        text={
          "Nosso sucesso é impulsionado pela nossa equipe apaixonada e altamente capacitada"
        }
      >
        <Cog width={45} height={45} />
      </Card>

      <Card
        title={"Terapias Integrativas"}
        text={
          "Para realizar pesquisas de ponta, nos juntamos a instituições de saúde, ensino e laboratórios de pesquisa em nível internacional."
        }
      >
        <Cog width={45} height={45} />
      </Card>

      <Card
        title={"Educação"}
        text={
          "Buscamos fomentar a educação por meio de cursos e capacitações meio de uma plataforma de educação integrada a uma inteligência artificial de aprendizagem avançada."
        }
      >
        <Cog width={45} height={45} />
      </Card>

      <Card
        title={"Banco de dados em Saúde"}
        text={
          "Estamos criando uma base de dados neurobiológicos por meio de pesquisas colaborativas em neuropsicofarmacologia e neuroaprendizagem."
        }
      >
        <Cog width={45} height={45} />
      </Card>

      <Card
        title={"Neuromaps"}
        text={
          "Estamos trabalhando para implementação de um hospital digital completo, que combina telemedicina,controle farmacêutico e gestão de saúde integrada para fornecer um cuidado holístico aos pacientes."
        }
      >
        <Cog width={45} height={45} />
      </Card>

      <Card
        title={"Neuromaps"}
        text={
          "Criação de uma agência de Desenvolvimento Humano e Fomento Social. Juntos, formamos uma rede colaborativa que funciona como uma força global para a mudança social"
        }
      >
        <Cog width={45} height={45} />
      </Card>

      <ContainerText
        h2Text={"Impacto Social"}
        pText={
          "Acreditamos que é fundamental abordar a saúde mental, física e emocional de maneira integrada. Por isso, nosso foco é desenvolver estudos científicos sobre terapias integrativas e psicodélicas, relacionando-as com neurociências, espiritualidade e filosofia. Ao reunir evidências clínicas, ajudamos a embasar cientificamente o uso de substâncias psicoativas e promover o bem-estar geral dos indivíduos."
        }
        color={"color"}
      />

      <ContainerText
        h2Text={"Venha fazer parte dessa comuniade global"}
        pText={
          "Para realizar pesquisas de ponta, nos juntamos a instituições de saúde, ensino e laboratórios de pesquisa em nível internacional. Juntos, formamos uma rede colaborativa que funciona como uma força global para a inovação científica."
        }
        color={"transparent"}
      />
    </>
  );
};

export default Home;
