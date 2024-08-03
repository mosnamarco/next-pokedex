"use client"

import { useEffect, useState } from 'react';

interface PokeData {
  count: number;
  next: number;
  previous: number;
  result: {
    name: string;
    url: string;
  }
}

export default function Home() {
  const [pokeData, setPokedata] = useState<PokeData>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/pokemon');
      const val = await res.json();

      setPokedata(val);
    }

    fetchData();
  }, [])

  return (
    <main className="h-screen text-sm bg-zinc-900">
      <center className="text-white h-full flex flex-col align-middle justify-center">
        {/* TODO: on type show result and scroll this div up showing results bellow it */}
        <div className='flex flex-col gap-2'>
          <small className='m-auto inline-block'>{pokeData?.count} Pokemons currently available</small>
          <input className='text-black w-fit m-auto p-2 rounded-sm' type="text" placeholder='Search pokemon' />
        </div>
      </center>
    </main>
  );
}
