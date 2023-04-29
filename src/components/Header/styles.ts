import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;

  .cover {
    width: 100%;
    height: 18.75rem;
    object-fit: cover;
    object-position: top;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
  }

  .leftLines,
  .rightLines {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .leftLines {
    left: 0;
  }
  .rightLines {
    right: 0;
  }
`;
