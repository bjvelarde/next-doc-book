import PropTypes from 'prop-types';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import BookButton from '../BookButton';
import { useDoctor } from '../../hooks/useDoctor';
import { formatTime } from '../../utils/timeUtils';
import SC from './style';
import { Doctor } from '../../types';

interface Props {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: Props) => {
  const { t } = useTranslation('common');
  const { fullAddress, sortedOpeningHours } = useDoctor(doctor);

  const showOpeningHours = () => {
    return sortedOpeningHours.map(slot => {
      return <SC.TableRow key={slot.day}>
          <td>{slot.day}</td>
          <td>{slot.isClosed ? t('opening-hours.closed') : formatTime(slot.start)}</td>
          <td>{slot.isClosed ? t('opening-hours.closed') : formatTime(slot.end)}</td>
        </SC.TableRow>;
    });
  };

  return <SC.Container data-testid="doctor-card">
    <Link href={`/doctor/${doctor.id}`}>
        <a>
          <SC.Header>
            <SC.Icon>
              <FontAwesomeIcon icon={faUserMd} />
            </SC.Icon>
              <SC.Title role="heading">{doctor.name}</SC.Title>
          </SC.Header>
          <SC.CardBody>
            <SC.Subtitle className="mb-2 text-muted">{doctor.description}</SC.Subtitle>
            <SC.Address>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {fullAddress}
            </SC.Address>
          </SC.CardBody>
        </a>
    </Link>
    <Accordion>
      <SC.AccordionItem eventKey="0">
        <SC.AccordionHeader>{t('opening-hours')}</SC.AccordionHeader>
        <SC.AccordionBody>
          <Table striped bordered hover size="sm">
            <thead>
              <SC.TableRow>
                <th>{t('opening-hours.day')}</th>
                <th>{t('opening-hours.start')}</th>
                <th>{t('opening-hours.end')}</th>
              </SC.TableRow>
            </thead>
            <tbody>
              {showOpeningHours()}
            </tbody>
          </Table>
        </SC.AccordionBody>
      </SC.AccordionItem>
      </Accordion>
    <BookButton doctor={doctor} />
  </SC.Container>;
}

DoctorCard.propTypes = {
  doctor: PropTypes.object
};

export default DoctorCard;