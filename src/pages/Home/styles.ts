import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 864px;
  margin: -5.5rem auto 0;
`;

export const ProfileCard = styled.div`
  position: relative;

  border-radius: 10px;
  background: ${({ theme }) => theme["base-profile"]};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;

  display: flex;
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > a {
    text-decoration: none;
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    color: ${({ theme }) => theme["blue"]};
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s ease-in-out;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme["blue"]};
    }
  }
`;

export const ProfileCardInfo = styled.div`
  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme["base-title"]};
  }

  p {
    margin-top: 0.5rem;
    line-height: 1.6;
  }
`;

export const ProfileCardStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme["base-label"]};
    }
  }
`;
