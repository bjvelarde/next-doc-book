import { useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';
import { Booking } from '../../types';

const ThankYou = () => {
  const { values } = useFormikContext<Booking>();
  const { t } = useTranslation('common');

  return <div>
    <p>{t('booking.thankyou', values)}</p>
  </div>;
}

export default ThankYou;