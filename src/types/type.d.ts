export type DoctorData = {
  id: string;
  name: string;
  image: string;
  isVerified: boolean;
  averageRating: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointment: string;
  brief: string;
  badges: string[];
};

export type DoctorSpecialty =
  | 'پزشک خانواده'
  | 'پزشک متخصص داخلی'
  | 'پزشک متخصص اطفال و کودکان'
  | 'دکتر بیهوشی و مراقبت‌های ویژه'
  | 'دکتر استخوان و مفاصل'
  | 'دکتر خون'
  | 'دکتر آزمایشگاه و تصویربرداری'
  | 'دکتر آلرژی، اختلالات تنفسی و ریه'
  | 'دکتر کلیه و مجاری ادراری'
  | 'دکتر تغذیه'
  | 'دکتر پوست و مو'
  | 'دکتر جراحی'
  | 'دکتر چشم پزشکی'
  | 'دکتر معده و گوارش'
  | 'دکتر دهان و دندان'
  | 'دکتر روانپزشکی و دکتر روانشناسی'
  | 'دکتر زنان و زایمان'
  | 'دکتر ژنتیک'
  | 'دکتر طب تسکینی و درد'
  | 'دکتر عفونی'
  | 'دکتر غدد'
  | 'دکتر قلب و عروق'
  | 'دکتر گوش، حلق و بینی'
  | 'دکتر مغز و اعصاب'
  | 'دکتر طب سنتی'
  | 'دکتر توانبخشی و طب فیزیکی'
  | 'دکتر کرونا ویروس'
  | 'دکتر داروسازی'
  | 'دکتر سلامت جنسی';

export interface ResultTypeItem {
  value: string;
  count: number;
  checked: boolean;
}

export interface FilterItem {
  label: string;
  id: string;
  checked: boolean;
}

export interface ResultType {
  [key: string]: Array<ResultTypeItem>;
  filters: Array<FilterItem>;
}
