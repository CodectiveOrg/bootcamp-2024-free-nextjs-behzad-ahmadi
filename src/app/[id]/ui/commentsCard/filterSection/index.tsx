import SelectInput from '@/ui/selectInput';
import styles from './style.module.css';
import { Input } from '@/ui/input';

export default function FilterSection() {
  return (
    <div className={styles.container}>
      <div className={styles.selects}>
        <SelectInput options={[]} label="" className={styles.item} />
        <SelectInput options={[]} label="" className={styles.item} />
      </div>

      <Input label="" placeholder="جستجو در نظرات بیماران" />
    </div>
  );
}
