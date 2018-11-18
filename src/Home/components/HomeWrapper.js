import styled from "styled-components";
import imageBackground from "../../assets/images/home-bg.jpg";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${imageBackground}) center;
`;

export default HomeWrapper;
