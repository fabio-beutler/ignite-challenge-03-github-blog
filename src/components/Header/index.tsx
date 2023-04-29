import { HeaderContainer } from './styles';

import coverImg from '../../assets/cover-clear.svg';
import logoImg from '../../assets/logo.svg';
import leftLines from '../../assets/left-lines.svg';
import rightLines from '../../assets/right-lines.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverImg} alt='' className='cover' />
      <img src={logoImg} alt='' className='logo' />
      <img src={leftLines} alt='' className='leftLines' />
      <img src={rightLines} alt='' className='rightLines' />
    </HeaderContainer>
  );
}
