import { format, parseISO } from 'date-fns';

export const formatISO = (iso: string): string => {
  return format(parseISO(iso), 'yyyy年M月d日');
};
