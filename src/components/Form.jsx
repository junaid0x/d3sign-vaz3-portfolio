import React from 'react';
import { ChevronDown } from 'lucide-react';

const Form = () => {
  return (
    <section className="w-full bg-white dark:bg-[#0A0A0A] px-6 lg:px-[40px] py-24 flex flex-col items-center transition-colors duration-500">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#111111] dark:text-white mb-12 tracking-tight text-center transition-colors duration-500">
        Ready to get started?
      </h2>

      {/* Form Card */}
      <div className="w-full max-w-[850px] bg-[#FAFAFA] dark:bg-[#111111] rounded-[32px] p-8 md:p-12 transition-colors duration-500">
        <h3 className="text-[26px] font-medium text-[#111111] dark:text-white mb-10 transition-colors duration-500">
          Get a quote
        </h3>

        <form className="flex flex-col gap-8">
          
          {/* Top Row: Name, Email, Budget */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Full Name */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">Full name</label>
              <input 
                type="text" 
                placeholder="Your name"
                className="w-full bg-[#F3F3F3] dark:bg-[#1A1A1A] border border-transparent dark:border-[#222222] rounded-xl px-4 py-3.5 text-[15px] dark:text-white outline-none focus:border-[#E0E0E0] dark:focus:border-[#444444] focus:bg-white dark:focus:bg-[#222222] transition-all placeholder-[#A1A1A1] dark:placeholder-[#666666]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-[#F3F3F3] dark:bg-[#1A1A1A] border border-transparent dark:border-[#222222] rounded-xl px-4 py-3.5 text-[15px] dark:text-white outline-none focus:border-[#E0E0E0] dark:focus:border-[#444444] focus:bg-white dark:focus:bg-[#222222] transition-all placeholder-[#A1A1A1] dark:placeholder-[#666666]"
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">Budget</label>
              <div className="relative">
                <select 
                  defaultValue=""
                  className="w-full bg-[#F3F3F3] dark:bg-[#1A1A1A] border border-transparent dark:border-[#222222] rounded-xl px-4 py-3.5 text-[15px] outline-none focus:border-[#E0E0E0] dark:focus:border-[#444444] focus:bg-white dark:focus:bg-[#222222] transition-all text-[#A1A1A1] dark:text-[#888888] appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select</option>
                  <option value="1">Under $5k</option>
                  <option value="2">$5k - $10k</option>
                  <option value="3">$10k+</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A1A1A1]">
                  <ChevronDown size={18} strokeWidth={2} />
                </div>
              </div>
            </div>

          </div>

          {/* About the project */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">About the project</label>
            <textarea 
              placeholder="The idea is to create..."
              className="w-full bg-[#F3F3F3] dark:bg-[#1A1A1A] border border-transparent dark:border-[#222222] rounded-xl px-4 py-3.5 text-[15px] dark:text-white outline-none focus:border-[#E0E0E0] dark:focus:border-[#444444] focus:bg-white dark:focus:bg-[#222222] transition-all placeholder-[#A1A1A1] dark:placeholder-[#666666] resize-none h-[120px]"
            />
          </div>

          {/* I'm looking for (Checkboxes) */}
          <div className="flex flex-col gap-4 mt-2">
            <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">I'm looking for</label>
            
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {['UI/UX', 'App Design', 'Web Design', 'Branding', 'Consulting', 'Framer'].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2.5 cursor-pointer group">
                  <div className="w-4 h-4 rounded-[4px] bg-[#EAEAEA] dark:bg-[#222222] border border-[#D1D1D1] dark:border-[#333333] group-hover:border-[#A1A1A1] dark:group-hover:border-[#666666] flex items-center justify-center transition-colors duration-300">
                    {/* Checkmark icon could go here when selected */}
                  </div>
                  <span className="text-[13px] font-medium text-[#888888] dark:text-[#A0A0A0] transition-colors duration-500">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="button" 
            className="w-full bg-[#8C8C8C] hover:bg-[#7A7A7A] text-white rounded-full py-4 text-[15px] font-medium transition-colors duration-300 mt-4"
          >
            Send
          </button>

        </form>
      </div>
    </section>
  );
};

export default Form;
