import { ShareData } from '@/ui/Share';
import { FetchData } from '@/types/api.response.type';
import { toast } from 'react-toastify';

export function formatDateToRelativePersian(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const rtf = new Intl.RelativeTimeFormat('fa', { numeric: 'auto' });

  const diffInMilliseconds = date.getTime() - now.getTime();
  const diffInMinutes = Math.round(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.round(diffInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.round(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.round(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 7),
  );
  const diffInMonths = Math.round(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 30),
  );
  const diffInYears = Math.round(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 365),
  );

  if (Math.abs(diffInMinutes) < 60) {
    return rtf.format(diffInMinutes, 'minute');
  } else if (Math.abs(diffInHours) < 24) {
    return rtf.format(diffInHours, 'hour');
  } else if (Math.abs(diffInDays) < 30) {
    return rtf.format(diffInDays, 'days');
  } else if (Math.abs(diffInDays) < 8) {
    return rtf.format(diffInWeeks, 'week');
  } else if (Math.abs(diffInDays) < 30) {
    return rtf.format(diffInMonths, 'month');
  } else {
    return rtf.format(diffInYears, 'year');
  }
}

export const shareContent = async ({
  title,
  url,
}: ShareData): Promise<void> => {
  try {
    await navigator.share({
      title,
      url,
    });
  } catch (err) {
    console.log('Sharing failed:', err);
  }
};

export async function fetcher<T>(
  input: string | URL | Request,
  init?: RequestInit,
  showToast: boolean = true,
): Promise<FetchData<T>> {
  const res = await fetch(input, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });

  const result = await res.json();

  if (!res.ok) {
    let message = 'خطای غیر منتظره';

    if ('error' in result) message = result.error;

    if (showToast) toast.error(message);

    return result;
  }

  if (showToast) toast.success(result.message);

  return result;
}
