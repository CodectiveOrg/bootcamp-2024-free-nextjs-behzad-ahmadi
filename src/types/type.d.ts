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
