'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import PieChartCard from 'components/admin/default/PieChartCard';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';
import { FaUserPlus, FaClipboardList, FaChartBar, FaFlask, FaShieldAlt, FaBoxes } from 'react-icons/fa';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Link href="/enrollment">
          <Widget
            icon={<FaUserPlus className="h-7 w-7" />}
            title={'Study Enrollment'}
            subtitle={'Join Research'}
          />
        </Link>
        <Link href="/review">
          <Widget
            icon={<FaClipboardList className="h-6 w-6" />}
            title={'Product Review'}
            subtitle={'Rate Products'}
          />
        </Link>
        <Link href="/survey">
          <Widget
            icon={<FaChartBar className="h-7 w-7" />}
            title={'User Survey'}
            subtitle={'Share Feedback'}
          />
        </Link>
        <Link href="/admin/research">
          <Widget
            icon={<FaFlask className="h-6 w-6" />}
            title={'Research'}
            subtitle={'Study Data'}
          />
        </Link>
        <Link href="/protocol">
          <Widget
            icon={<IoDocuments className="h-7 w-7" />}
            title={'Protocol'}
            subtitle={'Study Methods'}
          />
        </Link>
        <Link href="/regulatory">
          <Widget
            icon={<FaShieldAlt className="h-6 w-6" />}
            title={'Regulatory'}
            subtitle={'Compliance Info'}
          />
        </Link>
        <Link href="/products">
          <Widget
            icon={<FaBoxes className="h-6 w-6" />}
            title={'Products'}
            subtitle={'Product Database'}
          />
        </Link>
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable tableData={tableDataComplex} />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
