import coverImg from '../../assets/cover-clear.svg';
import leftLines from '../../assets/left-lines.svg';
import logoImg from '../../assets/logo.svg';
import rightLines from '../../assets/right-lines.svg';
import { HeaderContainer } from './styles';

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
