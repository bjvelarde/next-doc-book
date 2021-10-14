import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import SC from './style';

const Header = () => {
  const { t } = useTranslation('common');

  return <SC.Container title="top-bar">
    <Link href="/">
      <a>
        <SC.LogoContainer>
          <SC.Icon><FontAwesomeIcon icon={faClinicMedical} /></SC.Icon>
          <SC.Title>{t('main-title')}</SC.Title>
        </SC.LogoContainer>
      </a>
    </Link>
  </SC.Container>;
};

export default Header;