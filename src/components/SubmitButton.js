import styled from 'styled-components';

const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 0;
  padding: 10px;
  font-size: 18px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default SubmitButton;
