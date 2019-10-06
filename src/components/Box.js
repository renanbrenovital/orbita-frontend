import styled from 'styled-components';

const Box = styled.div`
  width: 400px;
  max-width: 600px;
  background-image: linear-gradient(to bottom, #7c9fff 0%, #c1a0fb 100%);
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;

  h1 {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h1 span {
    display: flex;
    flex-direction: row;
  }

  h1 small {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    text-align: right;
    font-weight: normal;
  }

  h1 svg {
    margin-right: 10px;
  }

  a {
    color: rgba(0, 0, 0, 0.5);
    margin-right: 5px;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Box;
