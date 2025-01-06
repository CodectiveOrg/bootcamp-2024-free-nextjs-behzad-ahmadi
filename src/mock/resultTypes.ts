import { ResultType } from '@/types/type';

export const resultsType: ResultType = {
  resultType: [
    { value: 'پزشکان بیمارستانی', count: 64, checked: true },
    { value: 'پزشکان مطبی', count: 1534, checked: false },
    { value: 'فقط پزشکان', count: 1577, checked: false },
  ],

  gender: [
    { value: 'آقا', count: 42, checked: false },
    { value: 'خانم', count: 13, checked: false },
  ],

  degree: [
    { value: 'فلوشیپ', count: 14, checked: false },
    { value: 'متخصص', count: 55, checked: false },
    { value: 'دکتری', count: 11, checked: false },
    { value: 'کارشناس', count: 4, checked: false },
  ],

  turnType: [{ value: 'نوبت حضوری', count: 64, checked: false }],

  filters: [
    { label: 'خوش برخورد', id: ':rh:', checked: false },
    { label: 'محبوب', id: ':ri:', checked: false },
    { label: 'کمترین معطلی', id: ':rj:', checked: false },
    { label: 'نسخه نویسی آنلاین', id: ':rk:', checked: false },
  ],
};
