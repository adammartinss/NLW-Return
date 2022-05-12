import React from 'react';
import Widget from './components/Widget';
export default function App() {
    return (
        <>
            <header className="w-full h-[72px] flex justify-center bg-zinc-100 dark:bg-zinc-800 sm:flex-initial ">
                <div className="w-40 h-10 rounded-lg my-auto mr-7 bg-zinc-600 hover:bg-zinc-600  r-1 top-auto"></div>
                <nav className="my-auto mx-40 flex gap-6 ,">
                    <div className="w-[50px] h-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 sm:w-[99px]"></div>
                    <div className="w-[50px] h-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 sm:w-[99px]"></div>
                    <div className="w-[50px] h-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 sm:w-[99px]"></div>
                    <div className="w-[50px] h-4 rounded-lg bg-zinc-700 hover:bg-zinc-600 sm:w-[99px]"></div>
                </nav>
                <nav className="flex row-3">
                    <div className="w-8 h-8 my-auto mx-2 rounded-lg right-2 bg-zinc-700 hover:bg-zinc-600"></div>
                    <div className="w-8 h-8 my-auto mx-2 rounded-lg right-2 bg-zinc-700 hover:bg-zinc-600"></div>
                </nav>
            </header>
            <main className="mt-8">
                <div className="mx-auto mt-4 w-[1120px]">
                    <div className="mb-8 h-[124px] flex flex-col justify-center m-auto bg-zinc-100 dark:bg-zinc-800">
                        <p className="ml-14 text-zinc-500 dark:text-zinc-400">
                            Experimente enviar um feedback 
                        </p>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-8">
                        <div className="w-[352px] h-[310px] bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"></div>
                        <div className="w-[352px] h-[310px] bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg"></div>
                        <div className="w-[352px] h-[310px] bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg "></div>
                    </div>
                </div>
            </main>
            <Widget/>
            
        </>
    );
}
