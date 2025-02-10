import Actions from '@/app/[id]/ui/doctorCard/actions';
import styles from './style.module.css';
import Avatar from '@/ui/avatar';
import Badge from '@/ui/badge';
import Card from '@/ui/card';
import { DoctorData } from '@/types/type';
import { BaseSiteURL } from '@/lib/constants';

interface Props {
  doctor: DoctorData;
}

export default function DoctorCard({ doctor }: Props) {
  return (
    <Card className={styles.container}>
      <div className={styles.actions}>
        <Actions
          viewCount={doctor.totalVotes}
          isBookmarked={false}
          shareTitle={doctor.name}
          shareUrl={`${BaseSiteURL}/${doctor.id}`}
        />
      </div>

      <div className={styles.info}>
        <Avatar
          image={doctor.image}
          name={doctor.name}
          averageRating={doctor.averageRating}
          subtitle1={doctor.brief}
        />

        <div className={styles.badges}>
          {doctor.badges.map((item, index) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
