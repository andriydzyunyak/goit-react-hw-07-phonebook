import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const PhonebookForm = styled(Form)`
  border: 1px solid #2a2a2a;
  width: 340px;
  padding: 10px;
`;

export const LabelName = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.18;
  display: block;
  margin-bottom: 4px;
`;

export const InputForm = styled(Field)`
  display: block;
  padding: 3px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.18;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  color: #ff0000;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: #212121;
  background-color: #f5f4fa;
  border: 1px solid #d3d2d7;
  border-radius: 6px;
  cursor: pointer;
  padding: 3px 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    border: transparent;
    color: #ffffff;
    background-color: #2196f3;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
