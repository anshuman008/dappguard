"use client";
import Lottie from "lottie-react";
import Alert from '@/lib/Alert.json'
import { ArrowRight } from "lucide-react";
import React from "react";

export default function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex justify-center text-center">
   
     <div className="h-36 w-36">
     <Lottie animationData={Alert} />
     </div>


      
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Get APIs Access   <ArrowRight className="ml-3" size={20}/>
        </button>
  
       
      
    </div>
  );
}

