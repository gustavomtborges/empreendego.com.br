import React from "react";

import HomeContainer from "./components/HomeContainer";
import HomeWrapper from "./components/HomeWrapper";
import HomeTitle from "./components/HomeTitle";
import HomeSelectWrapper from "./components/HomeSelectWrapper";
import HomeSelect from "./components/HomeSelect";
import HomeButton from "./components/HomeButton";

export default class HomePage extends React.Component {
  goToDashboard = () => {};
  render() {
    return (
      <HomeContainer>
        <HomeWrapper>
          <HomeTitle>
            Ajudamos você a tomar as melhores decisões pro seu negócio.
          </HomeTitle>
          <HomeSelectWrapper>
            <HomeSelect>
              <option value="">Selecione um estado</option>
              <option value="goias">Goias</option>
            </HomeSelect>
            <HomeSelect>
              <option value="">Selecione uma cidade</option>
              <option>Goiania</option>
            </HomeSelect>
            <HomeSelect>
              <option value="">Selecione um setor da economia</option>
              <option>Comércio</option>
              <option>Indústria</option>
              <option>Serviços</option>
            </HomeSelect>
          </HomeSelectWrapper>
          <HomeButton>Entrar</HomeButton>
        </HomeWrapper>
      </HomeContainer>
    );
  }
}
