"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import demoImage from "@/lib/demo2.png"
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    "Enter a Solana dapp name, contract address, or website URL in the search bar.",
    "Our advanced algorithms analyze the dapp's smart contracts, website, and on-chain activity.",
    "Receive a comprehensive security report with risk assessment and detailed findings.",
    "Make informed decisions about using the dapp based on our verification results."
  ];

  return (
    <div className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-extrabold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-12">How It Works</h2>
        <div className="flex flex-col gap-y-4 lg:!gap-y-0 lg:flex-row justify-between items-center gap-x-12 ">
          {/* Steps */}
          <div className="w-full lg:w-1/2 space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm md:text-lg leading-6 font-medium text-white">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full lg:w-[60%]"
          >
            <CardContainer className="inter-var">
              <CardBody className="dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] w-full h-full rounded-xl p-6 border border-blue-500/[0.1]">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white mb-4"
                >
                  Security Assessment Visualization
                </CardItem>
                <CardItem translateZ="100" className="w-full h-full">
                  <Image
                    src={demoImage}
                    layout="responsive"
                    width={1000}
                    height={1000}
                    className="rounded-xl group-hover/card:shadow-xl object-cover"
                    alt="Security assessment visualization"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
}