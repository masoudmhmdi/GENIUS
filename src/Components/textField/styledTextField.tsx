import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';

const styledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  backgroundColor: 'red',
}));

export default styledTextField;
