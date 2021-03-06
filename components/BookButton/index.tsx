import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Modal from 'react-bootstrap/Modal';
import BookForm from '../BookForm';
import { useAppContext } from '../../context';
import SC from './style';
import { Doctor } from '../../types';

interface Props {
  doctor: Doctor;
  label?: string;
}

const BookButton = ({ doctor, label = 'booking.trigger' }: Props) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation('common');
  const { resetSysError } = useAppContext();

  const handleClose = () => {
    setShow(false);
    resetSysError();
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <SC.Trigger variant="primary" onClick={handleShow} aria-label={t(label)}>
        {t(label)}
      </SC.Trigger>

      <Modal show={show} onHide={handleClose} data-testid="booking-modal">
        <Modal.Header closeButton>
          <Modal.Title>{`DR. ${doctor.name.toUpperCase()}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookForm doctor={doctor} />
        </Modal.Body>
      </Modal>
    </>
  );
};

BookButton.propTypes = {
  doctor: PropTypes.object,
  label: PropTypes.string
};

export default BookButton;
