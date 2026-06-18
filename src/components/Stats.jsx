import React from 'react';

const Card = ({ bg, title, subtitle }) => (
  <div className={`${bg} rounded-[1.5rem] p-3 md:p-4 flex flex-col justify-between w-[140px] shrink-0 snap-center md:w-auto md:shrink md:flex-1 aspect-[4/5] min-w-[140px] md:min-w-0 transition-transform duration-300 md:group-hover:-translate-x-1`}>
    <h3 className="text-black font-medium leading-tight text-[12px] md:text-[14px] whitespace-pre-line truncate whitespace-normal line-clamp-2">{title}</h3>
    <div className="flex justify-between items-end mt-2 md:mt-4">
      <span className="text-black/60 text-[10px] md:text-[12px]">{subtitle}</span>
      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center shrink-0">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  </div>
);

const Bar = ({ bg, num, label }) => (
  <div className={`${bg} rounded-full py-3 px-5 flex justify-between items-center w-full`}>
    <span className="text-black font-semibold text-xl">{num}</span>
    <span className="text-black/80 text-[13px] font-medium">{label}</span>
  </div>
);

const Stats = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-[#0A0A0A] transition-colors duration-500 overflow-hidden">
      <div className="w-full px-6 lg:px-[40px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Block 1: Icons Pill Container */}
            <div className="bg-[#F6F6F5] dark:bg-[#111111] rounded-[2.5rem] p-6 lg:p-8 flex items-center justify-center shadow-sm w-full transition-colors duration-500 group cursor-pointer">
              {/* The Widget */}
              <div className="bg-white dark:bg-[#1A1A1A] rounded-full py-5 px-12 lg:px-16 shadow-sm inline-flex items-center gap-12 relative transition-colors duration-500">
                <svg className="text-black/30 dark:text-white/30 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <svg className="text-black dark:text-white transform transition-transform duration-500 group-hover:-rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
                <svg className="text-black/30 dark:text-white/30 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
            </div>

            {/* Block 2: 4 Cards Container */}
            <div className="bg-[#F6F6F5] dark:bg-[#111111] rounded-[2.5rem] p-5 lg:p-6 shadow-sm flex gap-2 overflow-x-auto md:overflow-hidden snap-x no-scrollbar group transition-colors duration-500 w-full">
              <Card bg="bg-[#BCE6FF]" title="Empanadas&#10;at Tucumán" subtitle="Food tour" />
              <Card bg="bg-[#ECFF9C]" title="Dinner at the&#10;Eiffel Tower" subtitle="Date night" />
              <Card bg="bg-[#E6D3FF]" title="Secret parks&#10;in London" subtitle="Guided tour" />
              <Card bg="bg-[#BCC3FF]" title="Tour at&#10;Colisseo" subtitle="Date night" />
            </div>

            {/* Block 3: Image Placeholder */}
            <div className="bg-[#F6F6F5] dark:bg-[#111111] rounded-[3rem] w-full aspect-[9/19.5] shadow-sm flex-grow transition-colors duration-500 overflow-hidden group flex items-center justify-center p-6 lg:p-8">
              <img src="/block 3.avif" alt="Block 3" className="w-full h-full object-cover rounded-[2rem] shadow-sm transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Block 4: Image Placeholder (Taller) */}
            <div className="bg-[#F6F6F5] dark:bg-[#111111] rounded-[3rem] w-full aspect-[9/16] shadow-sm transition-colors duration-500 overflow-hidden group flex items-center justify-center p-6 lg:p-8">
              <img src="/block 4.avif" alt="Block 4" className="w-full h-full object-cover rounded-[2rem] shadow-sm transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Block 5: Stats Bars */}
            <div className="bg-[#F6F6F5] dark:bg-[#111111] rounded-[2.5rem] p-6 pb-12 group-hover:pb-24 shadow-sm flex flex-col gap-2.5 relative transition-all duration-500 group cursor-pointer z-10 hover:z-20">
              <Bar bg="bg-[#C7A3FF]" num="24" label="Completed tasks" />
              <Bar bg="bg-[#00E5FF]" num="12" label="Days running" />
              <Bar bg="bg-[#FFF500]" num="3" label="Subject passed" />
              <Bar bg="bg-[#FFB5F2]" num="11" label="Matches won" />
              
              {/* Hover options */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-between px-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto z-0">
                <div className="bg-[#EBEBEB] dark:bg-[#222222] text-[#333] dark:text-[#CCC] text-[13px] font-medium py-3 px-8 rounded-2xl -rotate-[4deg] transition-colors shadow-sm w-[45%] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  AI-Assited
                </div>
                <div className="bg-[#EBEBEB] dark:bg-[#222222] text-[#333] dark:text-[#CCC] text-[13px] font-medium py-3 px-8 rounded-2xl transition-colors shadow-sm w-[45%] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  Manual
                </div>
              </div>

              {/* Black button */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 group-hover:bottom-8 group-hover:translate-y-0 bg-black dark:bg-white dark:text-black text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-lg transition-all duration-500 z-10">
                <div className="relative w-5 h-5 flex items-center justify-center text-current">
                  <span className="absolute block w-full h-[2.5px] bg-current rounded-full transition-transform duration-500"></span>
                  <span className="absolute block w-full h-[2.5px] bg-current rounded-full transition-all duration-500 rotate-90 group-hover:rotate-0 group-hover:opacity-0"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {/* Block 6: Image Placeholder */}
            <div className="bg-[#F6F6F5] dark:bg-[#111111] rounded-[2.5rem] w-full aspect-[4/3] shadow-sm transition-colors duration-500 overflow-hidden group flex items-end justify-end pt-6 pl-6 lg:pt-8 lg:pl-8">
              <img src="/block 6.avif" alt="Block 6" className="w-full h-full object-cover rounded-tl-[1.5rem] shadow-sm transition-transform duration-500 origin-bottom-right group-hover:scale-105" />
            </div>

            {/* Block 7: Image Placeholder */}
            <div className="bg-[#F6F6F5] dark:bg-[#111111] rounded-[3rem] w-full aspect-[9/19.5] shadow-sm flex-grow transition-colors duration-500 overflow-hidden group flex items-center justify-center p-6 lg:p-8">
              <img src="/block 7.avif" alt="Block 7" className="w-full h-full object-cover rounded-[2rem] shadow-sm transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
