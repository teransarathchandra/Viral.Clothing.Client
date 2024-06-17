import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
`;

export const PasswordHandleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LinkText = styled.span`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const AccountOption = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.3em 0;
`;

export const HaveAccountButton = styled.span`
  font-weight: 600;
  color: #05961d;
  padding-left: 0.5em;
  &:hover {
    cursor: pointer;
  }
`;