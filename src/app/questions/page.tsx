'use client'

import Link from 'next/link';
import { useState } from "react";
import { useSearchParams } from 'next/navigation';

export default function Slider() {
  const [value, setValue] = useState(20);
  const searchParams = useSearchParams();

  const handleSliderChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center">
      <label htmlFor="slider" className="mb-2">Please select the number of questions?</label>
      <input
        id="slider"
        type="range"
        min="10"
        max="100"
        step="10"
        value={value}
        onChange={handleSliderChange}

        className="w-64"
      />
      <div className="mt-2">
        <p>Number of Questions: {value}</p>
      </div>
      <Link
        className="hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded bg-slate-200 text-black rounded"
        href={`/questions/${value}?${searchParams.toString()}`}
      >
        Generate Questions
      </Link>
    </div>
  );
}
