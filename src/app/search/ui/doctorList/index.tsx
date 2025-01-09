import { DoctorData } from '@/types/type';

interface Props {
  list: DoctorData[];
}

export default function DoctorList({ list }: Props) {
  return list.map(item => {});
}
