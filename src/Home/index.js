import React from "react";

import HomeContainer from "./components/HomeContainer";
import HomeWrapper from "./components/HomeWrapper";
import HomeTitle from "./components/HomeTitle";
import HomeSelectWrapper from "./components/HomeSelectWrapper";
import HomeSelect from "./components/HomeSelect";
import HomeButton from "./components/HomeButton";

export default class HomePage extends React.Component {
  state = {
    districties: [{ id: "goias", name: "Goiás" }],
    cities: [{ id: "goiania", name: "Goiânia" }],
    sectors: [
      { id: "comercio", name: "Comércio" },
      { id: "industria", name: "Indústria" },
      { id: "servicos", name: "Serviços" }
    ],
    selectedDistrict: null,
    selectedCity: null,
    selectedSector: null
  };

  handleSelectDistrict = event =>
    this.setState({ selectedDistrict: event.target.value });

  handleSelectCity = event =>
    this.setState({ selectedCity: event.target.value });

  handleSelectSector = event =>
    this.setState({ selectedSector: event.target.value });

  goToDashboard = () => {
    const { selectedDistrict, selectedCity, selectedSector } = this.state;
    const { history } = this.props;

    if (!selectedDistrict || !selectedCity || !selectedSector) {
      alert("Estado, cidade e setor devem ser selecionados.");
      return;
    }

    history.push(
      `/dashboard/${selectedDistrict}/${selectedCity}/${selectedSector}`
    );
  };
  render() {
    const { districties, cities, sectors } = this.state;
    return (
      <HomeContainer>
        <HomeWrapper>
          <HomeTitle>
            Ajudamos você a tomar as melhores decisões pro seu negócio.
          </HomeTitle>
          <HomeSelectWrapper>
            <HomeSelect onChange={this.handleSelectDistrict}>
              <option value="">Selecione um estado</option>
              {districties.map(district => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </HomeSelect>
            <HomeSelect onChange={this.handleSelectCity}>
              <option value="">Selecione uma cidade</option>
              {cities.map(city => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </HomeSelect>
            <HomeSelect onChange={this.handleSelectSector}>
              <option value="">Selecione um setor da economia</option>
              {sectors.map(sector => (
                <option key={sector.id} value={sector.id}>
                  {sector.name}
                </option>
              ))}
            </HomeSelect>
          </HomeSelectWrapper>
          <HomeButton primary onClick={this.goToDashboard}>
            Entrar
          </HomeButton>
        </HomeWrapper>
      </HomeContainer>
    );
  }
}
