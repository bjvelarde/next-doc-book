import * as Yup from 'yup';
import { TFunction } from 'next-i18next';

const BookingSchema = (t: TFunction) => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, t('booking.error.name.invalid'))
      .max(50, t('booking.error.name.invalid'))
      .matches(/^[A-Za-z. ]+$/, t('booking.error.name.invalid'))
      .required(t('booking.error.name.required')),
    date: Yup.string()
      .required(),
    start: Yup.number().required(t('booking.error.start.required')),
  }).transform((value) => {
    value.start = parseInt(value.start);
    return value;
  });;
}

  export default BookingSchema;