import styled from 'styled-components';

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input,
  select {
    flex: 1;
    background: #eee;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;

    ::-webkit-input-placeholder {
      color: #222;
    }
  }

  select {
    padding-left: 10px;
  }
`;

export default Form;
