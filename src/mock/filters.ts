import { Filters } from '@/types/type';
import { SelectOption } from '@/ui/selectInput';

export const filters: Filters = {
  resultType: [
    { value: 'پزشکان بیمارستانی', count: 64 },
    { value: 'پزشکان مطبی', count: 1534 },
    { value: 'فقط پزشکان', count: 1577 },
  ],

  gender: [
    { value: 'آقا', count: 42 },
    { value: 'خانم', count: 13 },
  ],

  degree: [
    { value: 'فلوشیپ', count: 14 },
    { value: 'متخصص', count: 55 },
    { value: 'دکتری', count: 11 },
    { value: 'کارشناس', count: 4 },
  ],

  turnType: [
    { value: 'نوبت حضوری', count: 64 },
    { value: 'ویزیت آنلاین', count: 2 },
  ],

  filters: [
    { label: 'خوش برخورد', id: 'badge1' },
    { label: 'محبوب', id: 'badge2' },
    { label: 'کمترین معطلی', id: 'badge3' },
    { label: 'نسخه نویسی آنلاین', id: 'badge4' },
  ],
};

export const sortOptions: SelectOption[] = [
  { label: 'بهترین', value: 'بهترین' },
  { label: 'محبوب‌ترین', value: 'محبوب‌ترین' },
  { label: 'نزدیک‌ترین نوبت', value: 'نزدیک‌ترین نوبت' },
  {
    label: 'کمترین زمان معطلی در مرکز درمانی',
    value: 'کمترین زمان معطلی در مرکز درمانی',
  },
  { label: 'پربازدیدترین', value: 'پربازدیدترین' },
];

export const appointmentOptions = [
  { label: 'هر زمان', value: 'هر زمان' },
  { label: 'امروز', value: 'امروز' },
  { label: 'تا فردا', value: 'تا فردا' },
  { label: 'تا سه روز آینده', value: 'تا سه روز آینده' },
  { label: 'تا پنج روز آینده', value: 'تا پنج روز آینده' },
  { label: 'تا هفت روز آینده', value: 'تا هفت روز آینده' },
];
