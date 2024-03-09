import Banner from "@/app/components/banner_img";
import Container from "@/app/components/container_text";
import Card from "@/app/components/card";
import { DatabaseIcon, Download } from "lucide-react";
import MiniCard from "@/app/components/mini-card";
const EuSou = () => {
  return (
    <>
      <div className="color">
        <Banner image={"/images/design3.png"} />
      </div>
      <div className="div_center">
        <h2>O programa “Eu Sou” (IMP) se concentra em três pilares</h2>
        <Card
          title={"Transferência de dados"}
          text={
            "O projeto usará a tecnologia blockchain para proteger e compartilhar dados de pesquisa clínica de forma segura e eficiente. Isso permitirá que os pesquisadores coletem dados de um grande número de participantes na rede global Ethereum"
          }
        ></Card>
        <Card
          title={"Pesquisa clínica"}
          text={
            "O projeto usará inteligência artificial para aplicar os resultados das pesquisas clínicas em larga escala. Isso permitirá que os profissionais de saúde mental personalizem e monitorem o tratamento de acordo com as necessidades específicas de cada paciente."
          }
        ></Card>
        <Card
          title={"Redes Ethereum"}
          text={
            "O projeto usará redes Ethereum para criar um ambiente de apoio e acolhimento para os participantes da pesquisa. Isso ajudará a reduzir o estigma associado às condições de saúde mental e incentivará as pessoas a buscar ajuda."
          }
        ></Card>
      </div>
      <div className="div_color">
        <h4>O programa “Eu Sou” tem quatro objetivos principais:</h4>
        <MiniCard
          text={
            "Promover e implementar soluções de saúde e desenvolvimento humano que utilizam plantas medicinais, fungos alucinógenos e substâncias psicoativas."
          }
        />
        <MiniCard
          text={
            "Fornecer acesso a essas soluções a pessoas em situação de vulnerabilidade e/ou econômica."
          }
        />
        <MiniCard
          text={
            "Promover a pesquisa e o desenvolvimento de novos conhecimentos sobre as aplicações terapêuticas dessas substâncias."
          }
        />
        <MiniCard
          text={
            "Distribuir conhecimento por neuroaprendizagem em redes de inovação aberta."
          }
        />
      </div>
      <div className="div_center">
        <h2> Permita-se para uma Jornada de Cura e Transformação!</h2>
        <Banner image={"/images/design7.png"} />
        <p>
          O programa "Eu Sou" é uma iniciativa inovadora que visa promover a
          cura e o desenvolvimento humano por meio do uso terapêutico de plantas
          medicinais, fungos alucinógenos e substâncias psicoativas. Acreditamos
          que essas substâncias, quando utilizadas de forma segura e
          responsável, possuem o potencial de transformar a vida de pessoas que
          sofrem de diversas condições, como:
        </p>
      </div>
      <div>
        <h4>Cartilha completa:</h4>
        <div className="div_center">
          <Download width={30} height={30} />
        </div>
      </div>
      <div>
        <h2>Estapas do Programa:</h2>
        <div>
          <h4>
            <b>Imersão: 2 meses</b>
          </h4>
          <h4>Experimentação terapêutica com acompanhamento profissional</h4>

          <MiniCard
            text={
              "Módulo 1: Saúde e bem-estar (fisiologia, neurociências, psicologia, nutrição, exercício, espiritualidade)."
            }
          />
          <MiniCard
            text={
              "Módulo 2: Tecnologia e inovação (inteligência artificial, realidade virtual, blockchain, design thinking)"
            }
          />
          <MiniCard
            text={
              "Módulo 3: Desenvolvimento humano (ODS, equidade, inclusão, sustentabilidade)."
            }
          />
        </div>
        <div>
          <h4>
            <b>Imersão: 6 meses</b>
          </h4>
          <h4>Experimentação terapêutica com acompanhamento profissional</h4>

          <MiniCard
            text={
              "Preparação: Orientação individualizada sobre a substância escolhida, seus efeitos e como se preparar para a experiência."
            }
          />
          <MiniCard
            text={
              "Experiência: Acompanhamento durante a experiência terapêutica por profissionais qualificados"
            }
          />
          <MiniCard
            text={
              "Integração: Reflexão e análise da experiência para maximizar seus benefícios e aprendizados"
            }
          />
        </div>
        <div className="div_color">
          <p>
            <b>Junte-se a Nós!</b>
          </p>
        </div>
        <Banner image={"/images/design8.png"} />
      </div>
    </>
  );
};

export default EuSou;
