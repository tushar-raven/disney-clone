import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommends = () => {
  return (
    <Container>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </Wrap>{" "}
        <Wrap>
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </Wrap>{" "}
        <Wrap>
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
export default Recommends;