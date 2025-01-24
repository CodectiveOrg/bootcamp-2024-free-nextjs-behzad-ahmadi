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
  id: number;
  avgRateValue: number;
  description: string;
  userDisplayName: string | null;
  recommended: boolean | null;
  treatmentStatus: string | null;
  qualityOfTreatment: number;
  countLike: number | null;
  show: number;
  doctorEncounter: number;
  replyToFeedbackId: number | null;
  recommendRange: number;
  explanationOfIssue: number;
  centerName: string;
  createdAt: string; // ISO date string
  visitDate: string | null;
  visitStatus: 'visited' | 'not_visited' | null;
  visitReason: string | null;
  userId: number;
  waitingTime: number;
  centerId: string;
  clinicFeedbackId: string | null;
  doctorSlug: string;
}
