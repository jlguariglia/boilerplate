import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.large};
  color: ${({ theme }) => theme.colors.primary.contrastText};
`;

export const Description = styled.h2`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
