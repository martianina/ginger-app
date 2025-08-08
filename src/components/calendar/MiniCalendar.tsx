'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Card from '@/components/card';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import '@/styles/MiniCalendar.css';

const Calendar = dynamic(() => import('react-calendar'), {
  ssr: false,
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200 rounded"></div>
});

const MiniCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Card extra="flex w-full h-full flex-col px-3 py-3">
        <Calendar
          onChange={onChange}
          value={value}
          prevLabel={<MdChevronLeft className="ml-1 h-6 w-6 " />}
          nextLabel={<MdChevronRight className="ml-1 h-6 w-6 " />}
          view={'month'}
        />
      </Card>
    </div>
  );
};

export default MiniCalendar;
