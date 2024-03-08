import Container from "@/app/components/container_text";
import Image from "next/image";
import { Waypoints } from "lucide-react";

const QuemSomos = () => (
  <>
    <Container
      h2Text={"Hub Digital de Saúde Mental e Bem-estar Social."}
      pText={
        "Uma comunidade Ethereum de qualificação científica e tecnológica, formada por brasileiros e focada na cooperação internacional de saúde mental e e bem-estar por desenvolvimento humano em acolimento digital."
      }
      color={"color"}
    >
      <Image src="/images/client.png" alt="logo" width={100} height={100} />
    </Container>

    <div className="div_color">
      <h2>Nossa História</h2>
      <Waypoints height={45} width={45} />
      <p>
        Fundada em Porto Alegre/RS, em 2024 dentro do Instituto Caldeira,
        Ecossistema social de inovação de refrência em empreendedorismo
        nacional. A comunidade é composta universitários, profissionais de
        saúde, pesquisadores, desenvolvedores, designers, empreendedores e
        ativistas sociais que cooperam para promover a saúde mental e o
        bem-estar por desenvolvimento e implementação de tecnologias inovadoras
        dentro da comunidade Ethereum." + "A comunidade está alinhada com as
        políticas da Organização Pan-Americana da Saúde (OPAS) e dos Objetivos
        de Desenvolvimento Sustentável (ODS) da Organização das Nações Unidas
        (ONU) e visa fomentar o Plano Nacional de Saúde (PNS) por meio da
        implantação do Plano de Pós Graduação 2024 A 2028 CNPq em metodologia de
        gestão do conhecimento em inovação aberta, tendo como meta promover o
        credenciado de 1 milhão de pesquisadores Brasileiros ao intercâmbio
        ciêntifico e tecnologico em rede global de inovação aberta.
      </p>
      <p>
        A rede de cooperação será diretamente responsavel pela promoção e
        aplicação do programa de Saúde Social em pesquisa clinica aplicada
        denominado “Eu Sou” a pacientes voluntários em saúde e bem-estar no
        Brasil e no mundo.
      </p>
      <p>
        A comunidade pretende fomentar, promover e financiar a aplicação de
        pesquisas clinicas longituninais por redes de acolhimento digital,
        executando a criação, gestão e distribuição de sua criptomoeda social
        Imprinting Coin (IMP), com emissão inicial de 100 bilhões de tokens em
        garantia gov.br.
      </p>
    </div>
  </>
);

export default QuemSomos;
