import { KeyboardEvent, ChangeEvent, useState } from "react";
import { debounce } from 'lodash';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from "../../context";
import SC from './style';

const SearchBar = () => {
  const { t } = useTranslation('common');
  const { state, search } = useAppContext();
  const [term, setTerm] = useState(state.search);
  const handleClick = debounce(() => search(term), 300);
  const enterHandler = debounce((e: KeyboardEvent) => search((e.target as HTMLInputElement).value), 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    if (e.target.value.trim() === '') {
      search('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      enterHandler(e);
    }
  };

  return <SC.Container>
    <SC.Input
      name="search"
      placeholder={t('placeholder.search')}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      defaultValue={state.search}
      aria-label="search"
    />
    <SC.Icon onClick={handleClick} role="button" aria-label="search-icon">
      <FontAwesomeIcon icon={faSearch} />
    </SC.Icon>
  </SC.Container>;
}

export default SearchBar;