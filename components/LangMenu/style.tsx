import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TheDropdown = styled(Dropdown)`
  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  display: flex;
  background: lightseagreen;
  padding: 6px 13px;
  margin-left: 20px;
  border-radius: 25px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ivory;
  font-size: 24px;
`;

const Lang = styled.span`
  padding: 0 10px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;

const SC = {
  Container,
  Icon,
  Lang,
  Dropdown: TheDropdown
};

export default SC;
