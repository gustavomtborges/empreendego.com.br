import React from "react";

import HomeContainer from "./components/HomeContainer";
import HomeWrapper from "./components/HomeWrapper";
import HomeTitle from "./components/HomeTitle";
import HomeSelectWrapper from "./components/HomeSelectWrapper";
import HomeSelect from "./components/HomeSelect";

const HomePage = () => (
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
      </HomeSelectWrapper>
    </HomeWrapper>
  </HomeContainer>
);

export default HomePage;
