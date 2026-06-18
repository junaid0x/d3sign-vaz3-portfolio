import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const Form = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "bb6f05fc-45a2-45ae-b224-f70d66a4e665");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Success! Your message has been sent.");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("Error submitting form. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="w-full bg-white dark:bg-[#0A0A0A] px-6 lg:px-[40px] py-24 flex flex-col items-center transition-colors duration-500">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#111111] dark:text-white mb-12 tracking-tight text-center transition-colors duration-500">
        Ready to get started?
      </h2>

      {/* Form Card */}
      <div className="w-full max-w-[850px] bg-[#FAFAFA] dark:bg-[#111111] rounded-[32px] p-8 md:p-12 transition-colors duration-500">
        <h3 className="text-[26px] font-medium text-[#111111] dark:text-white mb-10 transition-colors duration-500">
          Get a quote
        </h3>

        <form onSubmit={onSubmit} className="flex flex-col gap-8">

          {/* Top Row: Name, Email, Budget */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Full Name */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">Full name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-[#F3F3F3] dark:bg-[#1A1A1A] border border-transparent dark:border-[#222222] rounded-xl px-4 py-3.5 text-[15px] dark:text-white outline-none focus:border-[#E0E0E0] dark:focus:border-[#444444] focus:bg-white dark:focus:bg-[#222222] transition-all placeholder-[#A1A1A1] dark:placeholder-[#666666]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full bg-[#F3F3F3] dark:bg-[#1A1A1A] border border-transparent dark:border-[#222222] rounded-xl px-4 py-3.5 text-[15px] dark:text-white outline-none focus:border-[#E0E0E0] dark:focus:border-[#444444] focus:bg-white dark:focus:bg-[#222222] transition-all placeholder-[#A1A1A1] dark:placeholder-[#666666]"
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">Budget</label>
              <div className="relative">
                <select
                  name="budget"
                  required
                  defaultValue=""
                  className="w-full bg-[#F3F3F3] dark:bg-[#1A1A1A] border border-transparent dark:border-[#222222] rounded-xl px-4 py-3.5 text-[15px] outline-none focus:border-[#E0E0E0] dark:focus:border-[#444444] focus:bg-white dark:focus:bg-[#222222] transition-all text-[#A1A1A1] dark:text-[#888888] appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select</option>
                  <option value="Under $500">Under $500</option>
                  <option value="$500 - $1000">$500 - $1000</option>
                  <option value="$1000 - $1500">$1000 - $1500</option>
                  <option value="$2000+">$2000+</option>
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
              name="message"
              required
              placeholder="The idea is to create..."
              className="w-full bg-[#F3F3F3] dark:bg-[#1A1A1A] border border-transparent dark:border-[#222222] rounded-xl px-4 py-3.5 text-[15px] dark:text-white outline-none focus:border-[#E0E0E0] dark:focus:border-[#444444] focus:bg-white dark:focus:bg-[#222222] transition-all placeholder-[#A1A1A1] dark:placeholder-[#666666] resize-none h-[120px]"
            />
          </div>

          {/* I'm looking for (Checkboxes) */}
          <div className="flex flex-col gap-4 mt-2">
            <label className="text-[14px] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-500">I'm looking for</label>

            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {['UI/UX', 'Content Strategy', 'Web Design', 'Branding', 'Social Media Campaign'].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2.5 cursor-pointer group relative">
                  <input type="checkbox" name="services" value={item} className="peer absolute opacity-0 w-0 h-0" />
                  <div className="w-4 h-4 rounded-[4px] bg-[#EAEAEA] dark:bg-[#222222] border border-[#D1D1D1] dark:border-[#333333] group-hover:border-[#A1A1A1] dark:group-hover:border-[#666666] flex items-center justify-center transition-colors duration-300 peer-checked:bg-black peer-checked:dark:bg-white peer-checked:border-black peer-checked:dark:border-white">
                    <Check size={12} strokeWidth={3} className="text-white dark:text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[13px] font-medium text-[#888888] dark:text-[#A0A0A0] transition-colors duration-500">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Result Message */}
          {result && (
            <div className={`text-[14px] font-medium ${result.includes("Success") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {result}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#8C8C8C] hover:bg-[#7A7A7A] disabled:bg-[#D1D1D1] disabled:dark:bg-[#333333] disabled:cursor-not-allowed text-white rounded-full py-4 text-[15px] font-medium transition-colors duration-300 mt-4"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Form;
