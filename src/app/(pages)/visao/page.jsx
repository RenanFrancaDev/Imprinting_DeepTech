import Container from "@/app/components/container_text";
import MiniCard from "@/app/components/mini-card";
import Card from "@/app/components/card";
import { Cog } from "lucide-react";

const QuemSomos = () => {
  return (
    <section>
      <Container
        h2Text={"Quem somos nós?"}
        pText={
          "O Instituto Imprinting está na vanguarda da inovação científica e tecnológica. Nossa missão é transformar a pesquisa em DeepTech para impulsionar o desenvolvimento humano. Junte-se a nós nessa jornada emocionante e juntos criaremos um futuro mais feliz e saudável para todos"
        }
        color={"color"}
      />

      <Container
        h2Text={"Visão"}
        pText={
          "A Agência acredita que a saúde mental é um direito humano fundamental e que todos devem ter acesso a serviços de saúde mental de qualidade, independentemente de suas características individuais. A agência se compromete a promover a saúde mental de qualidade e inclusiva para todas as pessoas, por meio de um modelo inovador de atendimento que combina tecnologia, humanização e experiência."
        }
        color={"transparent"}
      />
      <h2>Missão:</h2>
      <Cog width={45} height={45} />

      <MiniCard
        text={
          "Transformar a forma como as pessoas acessam e recebem cuidados psicológicos e sociais."
        }
      ></MiniCard>
      <MiniCard
        text={
          "Oferecer serviços de saúde mental de qualidade, acessíveis e inclusivos."
        }
      ></MiniCard>
      <MiniCard
        text={
          "Promover modelos de acolhimento humanizado em desenvolvimento humano."
        }
      ></MiniCard>
      <MiniCard
        text={"Incentivar a pesquisa e a inovação na área da saúde mental."}
      ></MiniCard>

      <h2>Metas:</h2>
      <Cog width={45} height={45} />

      <MiniCard
        text={
          "Consolidar a comunidade Imprinting Ethereum com 100.000 milhões de Agêntes credenciadoscooperando para o desenvolvimentoo das ODS da ONU em rede global até 2030."
        }
      ></MiniCard>
      <MiniCard
        text={
          "Oferecer serviços de saúde mental a pelo menos 1 bilhão de pacientes volintários nas americas latinas até 2035."
        }
      ></MiniCard>
      <MiniCard
        text={
          "Desenvolver e fomentar a produção, qualificação e aplicação de protocolos de pesquisa que atendem aos normativos da OPA, OMS e PNS por neuroaprendizagem em impressão profunda por estampagem de imagem (Imprinting)."
        }
      ></MiniCard>
      <MiniCard
        text={
          "Desenvolver redes de monitoramento, desenvolvimento social e acolhimento humanizado que seja replicaveis em escala global."
        }
      ></MiniCard>
      <MiniCard
        text={"Influenciar políticas públicas na área da saúde mental"}
      ></MiniCard>

      <div className="div_color">
        <h2>Objetivos:</h2>
        <Cog width={45} height={45} />
        <p>
          Promover, fomentar e financiar o acolhimento humanizado em metodologia
          Deeptech Imprinting.
        </p>
        <p>
          Reduzir a carga de doenças mentais da comunidade Ethereum, com foco na
          prevenção, detecção precoce e tratamento de doenças mentais comuns,
          como depressão, ansiedade e estresse pós-traumático.
        </p>
        <p>
          Melhorar o acesso a serviços de saúde mental de qualidade, expandindo
          a cobertura, melhorando a qualidade e reduzindo os custos.
        </p>
        <p>
          Promover a equidade em saúde mental, garantindo que todas as pessoas
          tenham acesso a serviços de saúde mental de qualidade,
          independentemente de sua idade, sexo, raça, etnia, orientação sexual,
          identidade de gênero, condição socioeconômica ou qualquer outra
          condição.
        </p>
      </div>
      <h2>Principios:</h2>
      <Card
        title={"Direitos humanos"}
        text={
          "A saúde mental é um direito humano fundamental. Todos têm o direito de acesso a serviços de saúde mental de qualidade, sem discriminação."
        }
      >
        <Cog width={45} height={45} />
      </Card>
      <Card
        title={"Integração"}
        text={
          "Os serviços de saúde mental devem ser integrados aos sistemas de saúde e centrados nas pessoas."
        }
      >
        <Cog width={45} height={45} />
      </Card>
      <Card
        title={"Equidade"}
        text={
          "Os serviços de saúde mental devem ser equitativos e acessíveis a todas as pessoas, independentemente de suas escolhas e diversidades.."
        }
      >
        <Cog width={45} height={45} />
      </Card>
      <Card
        title={"Participação"}
        text={
          "As pessoas com problemas de saúde mental e seus cuidadores devem participar da tomada de decisões sobre sua saúde"
        }
      >
        <Cog width={45} height={45} />
      </Card>

      <div className="div_color">
        <h2>Ações:</h2>
        <MiniCard
          text={
            "Redução da carga de doenças mentais da comunidade Imprinting Ethereum"
          }
        ></MiniCard>
        <MiniCard
          text={
            "Promover, fomentar e financiar a transferência de dados e informação em desenvolvimento humano monitorado em aplicações terapêutica de plantas medicinais, fungos e substânciaspsicoativas integradas a saúde mental e bem-estar emocional."
          }
        ></MiniCard>
        <MiniCard
          text={
            "Fomentar, adotar e promover políticas e programas para prevenir, detectar precocemente e tratar doenças mentais."
          }
        ></MiniCard>
        <MiniCard
          text={"Melhoria do acesso a serviços de saúde mental de qualidade."}
        ></MiniCard>
        <MiniCard
          text={"Expandir a cobertura de serviços de saúde mental."}
        ></MiniCard>
        <MiniCard
          text={"Melhorar a qualidade dos serviços de saúde mental."}
        ></MiniCard>
        <MiniCard
          text={"Reduzir os custos dos serviços de saúde mental."}
        ></MiniCard>
        <MiniCard text={"Garantir a continuidade do tratamento."}></MiniCard>
      </div>
    </section>
  );
};

export default QuemSomos;
