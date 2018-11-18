import React from "react";
import "./styles.css";

const Home = () => (
  <div className="home__container">
    <div className="home__wrapper ">
      <h1 className="home__title" style={{ color: "#FFF" }}>
        Ajudamos você a tomar as melhores decisões pro seu negócio.
      </h1>
      <div className="home__select-wrapper">
        <select className="home__select-input">
          <option value="">Selecione um estado</option>
          <option value="goias">Goias</option>
        </select>
        <select className="home__select-input">
          <option value="">Selecione uma cidade</option>
          <option>Goiania</option>
        </select>
      </div>
    </div>
  </div>
);

export default Home;
