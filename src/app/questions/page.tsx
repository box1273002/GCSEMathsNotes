'use client'

import Link from 'next/link';
import { useState } from "react";
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const [value, setValue] = useState(20);
  const searchParams = useSearchParams();

  const handleSliderChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <main className="bg-[url('/web_images/about_us_background.jpg')] bg-cover flex flex-col h-screen w-screen justify-center items-center top-0 absolute z-0">
      <div className="flex flex-col justify-center bg-gray-800 p-6 rounded-xl border-4">
        <label htmlFor="slider" className="mb-2">Please select the number of questions?</label>
        <input
          id="slider"
          type="range"
          min="5"
          max="20"
          step="5"
          value={value}
          onChange={handleSliderChange}
          className="flex"
        />
        <div className="mt-2">
          <p>Number of Questions: {value}</p>
        </div>

        <Link
          className="bg-green-600 hover:bg-green-500 font-semibold hover:font-bold text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded text-black rounded"
          href={`/questions/${value}?${searchParams.toString()}`}
        >
          Generate Questions
        </Link>
      </div>
    </main>
  );
}
