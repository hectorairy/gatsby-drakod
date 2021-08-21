import styled from "@emotion/styled"

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 0 auto;
  padding: 3rem;
  border-radius: 2rem;
  background-color: #f6faff;
`

export const Error = styled.div`
  flex: 1;
  background-color: rgba(131, 56, 236, 1);
  margin: 1rem;
  padding: 2rem 1rem;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
`

export const Label = styled.label`
  color: #8338ec;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 1rem;
  &:first-of-type {
    margin-top: 0;
  }
`
export const Input = styled.input`
  flex: 1;
  padding: 1rem;
  margin-top: 1rem;
  border-color: rgba(131, 56, 236, 0.4);
  outline: none;
  border-radius: 0.5rem;
`

export const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  margin-top: 1rem;
  border-color: rgba(131, 56, 236, 0.8);
  outline: none;
  border-radius: 0.5rem;
`

export const TextArea = styled.textarea`
  padding: 1rem;
  margin-top: 1rem;
  border-color: rgba(131, 56, 236, 0.8);
  outline: none;
  border-radius: 0.5rem;
  resize: none;
`

export const Button = styled.button`
  margin: 2rem 2rem 4rem 2rem;
  padding: 1rem 2rem;
  border: none;
  background-color: rgba(0, 180, 216, 1);
  border-color: rgba(0, 180, 216, 1);
  border-radius: 7px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`
