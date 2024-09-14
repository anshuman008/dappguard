'use client'
/* eslint-disable */

import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import ShinyButton from "@/components/magicui/shiny-button";
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield } from 'lucide-react'
import { Spotlight } from '@/components/ui/Spotlight'
import { useRouter } from "next/navigation";

export default function EarlyAccessPage() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email)
        setIsSubmitted(true)
    }

    return (
        <div className="relative flex  items-center justify-center overflow-hidden bg-background  md:shadow-xl">

            <div className="min-h-screen w-full flex flex-col  p-4 overflow-hidden z-40">
                <header className="container mx-auto pt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Shield className="w-10 h-10 text-blue-400 cursor-pointer" onClick={() => router.push('/')} />
                            <h1 className="text-xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">DappGuard</h1>
                        </div>
                        <nav>
                            <ul className="flex space-x-6 px-3">
                                <li><a className="hover:text-slate-400 transition-colors">Features</a></li>
                                {/* <li><a  className="hover:text-slate-400 transition-colors">How It Works</a></li> */}
                                <li><a className="hover:text-slate-400 transition-colors">FAQ</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className='w-full flex justify-center items-center h-[80vh] '>
                    <Card className="w-full md:w-[80%] lg:w-[60%] bg-transparent border-none text-white ">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                {/* <Shield className="w-10 h-10 md:w-20 md:h-20 text-blue-400 " /> */}
                                <span className='text-xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 '>DappGuard Early Access</span>
                            </CardTitle>
                            <CardDescription className="text-lg md:text-2xl font-bold text-left  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                                Get free API access to verify Solana dApps
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-lg md:text-2xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">API Features:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm md:text-lg">
                                        <li>Verify if a Solana dApp is authentic</li>
                                        <li>Get detailed information about dApps</li>
                                        <li>Check dApp security status</li>
                                        <li>Monitor dApp activity and usage</li>
                                    </ul>
                                </div>
                                <div >
                                    <p className="mt-4  inline-flex  h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#09090b,45%,#ffffff8c,55%,#09090b)] bg-[length:200%_100%] px-2 md:px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        🚀 First 1000 users get free API access!
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter >
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="w-full space-y-4 ">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-gray-300">Email address</label>

                                        <div className='flex flex-col justify-center items-center gap-x-3'>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 py-5"
                                            />






                                            <ShinyButton text=" Get Early Access" className="border-2 border-white mt-3 text-white hover:bg-black hover:text-white" />
                                        </div>

                                    </div>

                                </form>
                            ) : (
                                <div className="w-full text-center space-y-2">
                                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
                                    <p className="text-green-400 font-medium">Thank you for your interest!</p>
                                    <p className="text-gray-400">We'll notify you when the API launches.</p>
                                </div>
                            )}
                        </CardFooter>
                    </Card>
                </div>

                <Spotlight
                    className="-top-40 left-0 md:left-96 md:-top-36"
                    fill="white"
                />
            </div>

            <AnimatedGridPattern
                numSquares={200}
                maxOpacity={0.1}
                duration={3}
                // repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
                x={100}
                y={40}
            />
        </div>
    )
}