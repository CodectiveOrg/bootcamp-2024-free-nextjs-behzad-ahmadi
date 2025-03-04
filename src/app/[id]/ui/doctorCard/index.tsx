import Actions from '@/app/[id]/ui/DoctorCard/Actions';
import styles from './style.module.css';
import Avatar from '@/ui/Avatar';
import Badge from '@/ui/Badge';
import Card from '@/ui/Card';
import { DoctorData } from '@/types/type';
import { BaseSiteURL } from '@/lib/constants';

interface Props {
  doctor: DoctorData;
}

export default function DoctorCard({ doctor }: Props): React.ReactNode {
  return (
    <Card className={styles.doctor}>
      <div className={styles.actions}>
        <Actions
          viewCount={doctor.totalVotes}
          isBookmarked={false}
          shareData={{
            title: doctor.name,
            url: `${BaseSiteURL}/${doctor.id}`,
          }}
        />
      </div>

      <div className={styles.info}>
        <Avatar
          image={doctor.image}
          name={doctor.name}
          averageRating={doctor.averageRating}
          description={doctor.brief}
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
