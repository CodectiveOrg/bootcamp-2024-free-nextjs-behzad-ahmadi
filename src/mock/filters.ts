import { Filters } from '@/types/type';

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
    { label: 'خوش برخورد', id: ':rh:' },
    { label: 'محبوب', id: ':ri:' },
    { label: 'کمترین معطلی', id: ':rj:' },
    { label: 'نسخه نویسی آنلاین', id: ':rk:' },
  ],
};
