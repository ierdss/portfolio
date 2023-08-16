"use client"

import React, { useState, useEffect } from 'react'
import HashLoader from 'react-spinners/HashLoader';
import disableScroll from 'disable-scroll';

export default function LoadingOverlay() { 
    const [loadingText, setLoadingText] = useState<string>("Loading...");
    const LoadingText = [
        "Rendering 3d Models",
        "Writing Text",
        "thank you for waiting"
    ]

    let [isLoading, setIsLoading] = useState(false);
    let [color, setColor] = useState("#B40041");
  
    useEffect(() => {
      setIsLoading(true)
      disableScroll.on(); // prevent scrolling
      setTimeout(() => {
          setIsLoading(false)
          disableScroll.off(); // re-enable scroll
      }, 6000);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoadingText(LoadingText[0])
        }, 1500);
        setTimeout(() => {
            setLoadingText(LoadingText[1])
        }, 3500);       
        setTimeout(() => {
            setLoadingText(LoadingText[2])
        }, 5000);
    }, [])

  return (
    <div className={isLoading ? `flex flex-col w-full h-[100vh] justify-center items-center bg-white fixed top-0 left-0 right-0 z-50 gap-10 overscroll-none select-none` : `hidden`}>
        <HashLoader
            loading={isLoading}
            size={100}
            color={color}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={1}
            />
        <h1 className='font-bold text-xl uppercase transition-all duration-150 ease-in'>{loadingText}</h1>
    </div>
  )
}