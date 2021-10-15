import { forwardRef, MouseEventHandler } from "react";
import { useRouter } from 'next/router';
import Dropdown from 'react-bootstrap/Dropdown';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import SC from './style';

interface Props {
  children: any;
  onClick: MouseEventHandler;
}

const LangToggle = forwardRef<HTMLAnchorElement, Props>(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <SC.Container>
      <SC.Icon icon={faLanguage} />
      {children}
    </SC.Container>
  </a>
));

const LangMenu = () => {
  const router = useRouter();

  const handleClick = (e: any): void => {
    e.preventDefault();
    router.push('/', '/', { locale:  e.target.hreflang })
  };

  return <SC.Dropdown>
    <Dropdown.Toggle as={LangToggle} id="dropdown-custom-components">
      <SC.Lang>{router.locale}</SC.Lang>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item hreflang="en" onClick={handleClick} active>English</Dropdown.Item>
      <Dropdown.Item hreflang="de" onClick={handleClick}>German</Dropdown.Item>
    </Dropdown.Menu>
  </SC.Dropdown>;
}

export default LangMenu;
