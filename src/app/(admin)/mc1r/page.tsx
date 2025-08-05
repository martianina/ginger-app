'use client';

import Card from 'components/card';

const MC1RDataFoundation = () => {
  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      <div className="grid grid-cols-1 gap-5">
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
          <div className="ml-[18px] flex h-[90px] w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">MC1R Data Foundation</p>
            <p className="text-[34px] font-bold text-navy-700 dark:text-white">
              Coming Soon
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
          <div className="ml-[18px] flex h-[90px] w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">Gene Variants</p>
            <p className="text-[34px] font-bold text-navy-700 dark:text-white">
              TBD
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
          <div className="ml-[18px] flex h-[90px] w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">Research Studies</p>
            <p className="text-[34px] font-bold text-navy-700 dark:text-white">
              TBD
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
          <div className="ml-[18px] flex h-[90px] w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">Data Sources</p>
            <p className="text-[34px] font-bold text-navy-700 dark:text-white">
              TBD
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
          <div className="ml-[18px] flex h-[90px] w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">Publications</p>
            <p className="text-[34px] font-bold text-navy-700 dark:text-white">
              TBD
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
          <div className="ml-[18px] flex h-[90px] w-auto flex-col justify-center">
            <p className="font-dm text-sm font-medium text-gray-600">Collaborations</p>
            <p className="text-[34px] font-bold text-navy-700 dark:text-white">
              TBD
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MC1RDataFoundation; 