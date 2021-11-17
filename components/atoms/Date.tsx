import { FaRegCalendarAlt } from 'react-icons/fa';
import * as dateLib from 'lib/date';

export type Props = {
  iso8601: string;
};

const Date = ({ iso8601 }: Props) => (
  <div className='inline-box pt-3 text-gray-500'>
    <FaRegCalendarAlt className='flex-shrink-0 inline-block' />
    <span className='flex-shrink-0 inline-block pl-2 text-sm align-middle'>
      {dateLib.formatISO(iso8601)}
    </span>
  </div>
);

export default Date;
