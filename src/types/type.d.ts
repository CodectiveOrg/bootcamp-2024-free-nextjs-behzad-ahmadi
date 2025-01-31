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

export interface FilterItem {
  value: string;
  count: number;
}

export interface FilterFilterItem {
  label: string;
  id: string;
}

export interface Filters {
  resultType: Array<FilterItem>;
  gender: Array<FilterItem>;
  degree: Array<FilterItem>;
  turnType: Array<FilterItem>;
  filters: Array<FilterFilterItem>;
}

export interface Feedback {
  Id: number;
  avg_rate_value: number;
  description: string;
  user_display_name: string;
  recommended: boolean;
  treatment_status: string;
  quality_of_treatment: number;
  count_like: number;
  show: number;
  doctor_encounter: number;
  reply_to_feedback_id: number;
  recommend_range: number;
  explanation_of_issue: number;
  center_name: string;
  created_at: string; // ISO date string
  visit_date: string;
  visit_status: 'visited' | 'not_visited';
  visit_reason: string;
  user_id: number;
  waiting_time: number;
  centerId: string;
  clinic_feedback_id: string;
  doctor_slug: string;
}
