import styled from 'styled-components';

export const AcceptedFiles = styled.div`
  font-size: 14px;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.error.main};
`;
