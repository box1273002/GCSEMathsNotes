'use client';
import { useState } from 'react';
import { DifficultyContext } from '@/app/context';
import TopNav from '@/app/ui/home/top-nav';

export default function ContextWrapper({children}: {children: React.ReactNode}) {
  const [difficulty, setDifficulty] = useState('foundation');
  return (
  <DifficultyContext.Provider value={{ difficulty, setDifficulty }}> 
    <TopNav />
    {children}
  </DifficultyContext.Provider>
  );
}
