import Actions from '@/app/[id]/ui/doctorCard/actions';
import styles from './style.module.css';
import Avatar from '@/ui/avatar';
import Badge from '@/ui/badge';

interface Props {
  badges: string[];
}

export default function DoctorCard({ badges }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Actions />
      </div>

      <div className={styles.info}>
        <Avatar image="" name="" subtitle1="" subtitle2="" />
      </div>

      <div className={styles.badges}>
        {badges.map((item, index) => (
          <Badge key={index}>{item}</Badge>
        ))}
      </div>

      <div className={styles.rating}></div>
    </div>
  );
}
