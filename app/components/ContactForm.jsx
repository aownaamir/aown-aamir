"use client";

import { sendContactForm } from "../lib/api";
import StarRating from "./StarRating";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, message, rating };
    setIsLoading(true);
    try {
      await sendContactForm(data);
      setName("");
      setEmail("");
      setMessage("");
      setRating(0);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-16 justify-center items-center">
        <input
          type="text"
          className="w-[270px] lg:w-[340px] h-[30px] text-[16px] text-white placeholder:text-slate-200 placeholder:italic bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none border-b-2 border-white pb-2 overflow-hidden"
          placeholder="Name"
          required
          disabled={isLoading}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="w-[270px] lg:w-[340px] h-[30px] text-[16px] text-white placeholder:text-slate-200 placeholder:italic bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none border-b-2 border-white pb-2 overflow-hidden"
          placeholder="Email"
          required
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="w-[270px] lg:w-[340px] h-[30px] text-[16px] text-white placeholder:text-slate-200 placeholder:italic bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none border-b-2 border-white pb-2 overflow-hidden"
          placeholder="Write me a message"
          required
          disabled={isLoading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="w-[270px] lg:w-[340px] h-[30px] flex gap-0 lg:gap-2 justify-start items-center">
          <label htmlFor="" className="text-white italic text-[16px]">
            Rate my website
          </label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <button
          type="submit"
          className="w-[100px] h-[40px] border-2 border-white text-white"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
