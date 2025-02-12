'use client';

import Switch from '@/ui/Switch';
import useSearch, { SearchParam, SearchParams } from '@/hook/useSearch';
import { useMemo } from 'react';

interface Props {
  id: Partial<SearchParams>;
  title: string;
}

export default function SwitchFilter({ id, title }: Props): JSX.Element {
  const { setParam, getParam, deleteParam } = useSearch();
  const checkedItem = useMemo(() => getParam(id) != null, [getParam, id]);

  const handleSetFilter = ({ name, value }: SearchParam) => {
    if (checkedItem) deleteParam(name);
    else setParam({ name, value });
  };

  return (
    <Switch
      title={title}
      checked={checkedItem}
      onClick={() => handleSetFilter({ name: id, value: title })}
    />
  );
}
