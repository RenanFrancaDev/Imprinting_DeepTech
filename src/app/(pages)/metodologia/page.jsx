import Container from "@/app/components/container_text";
import Card from "@/app/components/card";
import Image from "next/image";
import MiniCard from "@/app/components/mini-card";
import { Search } from "lucide-react";
import Accordion from "@/app/components/accordion";
const Metodologia = () => {
  return (
    <>
      <Container
        h2Text={"Metodologia Imprinting DeepTech"}
        pText={
          "A metodologia Imprinting DeepTech (imersão profunda) é uma abordagem holística e integrativa que visa promover o desenvolvimento de tecnologia baseada em evidências sociais. Essa metodologia incorpora três abordagens específicas:"
        }
      >
        <Image src="/images/client.png" alt="logo" width={100} height={100} />
      </Container>
      <Accordion
        title={"Abordagem científica"}
        text={
          "Essa abordagem incentiva a colaboração entre pesquisadores de diferentes disciplinas, o que pode ajudar a garantir que as novas tecnologias sejam baseadas nas melhores evidências disponíveis. Essa colaboração pode ajudar a garantir que as novas tecnologias sejam baseadas em uma compreensão profunda dos mecanismos biológicos, psicológicos, sociais e espirituais que contribuem para a saúde e o bem-estar. \n No contexto do programa Eu Sou: a abordagem científica será aplicada por meio de projetos de pesquisa e desenvolvimento que explorem as possibilidades terapêuticas de plantas medicinais, fungos alucinógenos e substâncias psicoativas. Esses projetos serão conduzidos por uma equipe multidisciplinar de pesquisadores, incluindo especialistas em medicina, psicologia, sociologia, antropologia e espiritualidade"
        }
      />
      <Accordion
        title={"Abordagem espiritual e cultural"}
        text={
          "Essa abordagem reconhece que a saúde é um fenômeno complexo que é influenciado por uma variedade de fatores, incluindo fatores biológicos, psicológicos, sociais e espirituais. Essa abordagem reconhece que a saúde é mais do que apenas a ausência de doença, e que o bem-estar físico, mental, social e espiritual são todos interconectados. \n No contexto do programa 'Eu Sou', a abordagem espiritual e cultural será aplicada por meio de um programa de acolhimento e acompanhamento que oferece suporte holístico aos participantes. Esse programa incluirá atividades que promovem o autoconhecimento, a espiritualidade e a integração social."
        }
      />
      <Accordion
        title={"Abordagem holística"}
        text={
          'Essa abordagem reconhece que a saúde é uma parte da saúde geral e que a saúde e a doença física estão interconectadas. Essa abordagem enfatiza a importância de considerar o indivíduo como um todo, e não apenas seus sintomas ou doenças específicas. \n No contexto do programa "Eu Sou", a abordagem holística será aplicada por meio de uma abordagem integrada que combina as abordagens científica, espiritual e cultural. Essa abordagem visa promover o desenvolvimento de tecnologias que sejam eficazes para tratar uma ampla gama de condições de saúde, incluindo condições físicas, mentais e espirituais. '
        }
      />

      <Container
        h2Text={"Pesquisa e desenvolvimento"}
        pText={
          "As parcerias de pesquisa e desenvolvimento entre a Universidade Digital Imprinting Corp e o Hospital digital Imprinting Neuromaps irão permitir comunidade explorem as possibilidades terapêuticas de plantas medicinais, fungos alucinógenos e substâncias psicoativas de forma mais eficaz. As parcerias querem envolver a colaboração com pesquisadores de universidades, institutos de pesquisa e outras organizações."
        }
        color={"color"}
      >
        <Search />
      </Container>
      <h2>Propostas pesquisas incluem:</h2>
      <MiniCard
        text={
          "Estudos clínicos para avaliar a eficácia de substâncias psicoativas no tratamento de doenças mentais, como depressão, ansiedade e estresse pós-traumático."
        }
      />
      <MiniCard
        text={
          "Estudos para investigar os mecanismos de ação de substâncias psicoativas no cérebro."
        }
      />
      <MiniCard
        text={
          "Estudos para desenvolver novas formas de administração e dosagem de substâncias psicoativas."
        }
      />
      <MiniCard
        text={
          "Estudos para desenvolver soluções e tecnologias de apoio e amparo as pesquisas por monitoramento digital em redes descritiva, diagnóstica, preditiva e prescritiva."
        }
      />
      <div className="color">
        <h2>Programas de educação e treinamento:</h2>
        <p className="text_center">
          Os programas de educação e treinamento oferecidos pelo Instituto
          Imprinting e pelo neuromaps imprinting irão ajudar a aumentar o
          conhecimento sobre as possibilidades terapêuticas de substâncias
          psicoativas. Os programas podem ser direcionados a profissionais de
          saúde, pesquisadores e outros interessados em aprender mais sobre o
          assunto.
        </p>
        <MiniCard
          text={
            "História e uso de substâncias psicoativas para fins terapêuticos."
          }
        />
        <MiniCard
          text={
            "Princípios da neurociência relacionados ao uso de substâncias psicoativas."
          }
        />
        <MiniCard
          text={
            "Evidências científicas sobre a eficácia de substâncias psicoativas no tratamento de doenças mentais"
          }
        />
      </div>
      <Container
        h2Text={"Serviços de apoio;"}
        pText={
          "Os serviços de apoio oferecidos pelo Instituto Imprinting e pelo neuromaps imprinting irão ajudar as pessoas que buscam tratamento com substâncias psicoativas. Os serviços podem incluir aconselhamento, terapia e acompanhamento."
        }
      />
      <MiniCard
        text={
          "Promover o desenvolvimento de novas terapias para doenças mentais"
        }
      />
      <MiniCard
        text={
          "Aumentar o conhecimento sobre as possibilidades terapêuticas de substâncias psicoativas."
        }
      />
      <MiniCard
        text={"Promover o uso responsável de substâncias psicoativas."}
      />
    </>
  );
};

export default Metodologia;
