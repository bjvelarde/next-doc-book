import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Alert from 'react-bootstrap/Alert';
import { Formik, Form } from 'formik';
import { useAppContext } from '../../context';
import FormUI from './FormUI';
import ThankYou from './ThankYou';
import { Doctor } from '../../types';
import formSchema from './formSchema';

interface Props {
  doctor: Doctor;
}

interface FormFields {
  name?: string;
  date?: string;
  start?: any;
};

const BookForm = ({ doctor }: Props) => {
  const { createBooking } = useAppContext();
  const [status, setStatus] = useState({
    status: '',
    message: ''
  });
  const { t } = useTranslation('common');

  return (
    <Formik
      initialValues={{ name: '', date: '', doctorId: doctor.id, start: '' }}
      validationSchema={formSchema(t)}
      onSubmit={async (values: FormFields, { setSubmitting }) => {
        try {
          values.start = parseInt(values.start);
          await createBooking(values);
          setStatus({
            status: 'SUCCESS',
            message: t('booking.alert.success')
          });
        } catch (e: any) {
          setStatus({
            status: 'FAIL',
            message: e.toJSON().message
          });
        }

        setSubmitting(false);
      }}
      >
      {status.status === 'SUCCESS' ? <ThankYou /> : <Form>
        {status.status === 'FAIL' && <Alert variant="danger">{status.message}</Alert>}
        <FormUI doctor={doctor} />
      </Form>}
    </Formik>
  );
};

BookForm.propTypes = {
  doctor: PropTypes.object
}

export default BookForm;