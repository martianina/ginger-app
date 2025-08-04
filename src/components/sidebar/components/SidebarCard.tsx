const GingerScienceCard = () => {
  return (
    <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-brand-700 via-brand-500 to-brand-300 pb-4 dark:from-brand-800 dark:via-brand-600 dark:to-brand-400">
      <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-brand-300 to-brand-600 dark:border-gray-800">
        <img
          src="/favicon.png"
          alt="Ginger Science Icon"
          className="h-12 w-12"
        />
      </div>

      <div className="mt-16 flex h-fit flex-col items-center text-white">
        <p className="text-lg font-bold">Ginger Science</p>
        <p className="mt-1 px-4 text-center text-sm">
          Explore the world’s only science platform focused on redhead genetics.
        </p>
{/*
        <a
          href="https://gingerscience.org"
          target="_blank"
          className="text-medium mt-7 block rounded-full bg-white/20 px-8 py-[10px] text-center text-sm font-semibold hover:bg-white/30 transition-all"
        >
          Visit the Site
        </a>
 */}
      </div>
    </div>
  );
};

export default GingerScienceCard;
