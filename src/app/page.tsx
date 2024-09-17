/* eslint-disable @next/next/no-img-element */

'use client'
import { cn } from "@/lib/utils";
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Search, Shield, CheckCircle, XCircle, AlertTriangle, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { Spotlight } from "@/components/ui/Spotlight";
import { Cover } from "@/components/ui/cover";
import FeaturesSectionDemo from "@/components/Features";
import { toast } from "sonner";
import Lottie from "lottie-react";
import Alert from '@/lib/Warning.json'
import { useRouter } from "next/navigation";
import { DockDemo } from "@/components/SocialLinks";
import HowItWorks from "@/components/HowitWorks";
import AnimatedListDemo from "@/components/Faqs"

export default function DappGuardLanding() {
  const [inputValue, setInputValue] = useState('jupiter')
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dappData, setDappData] = useState([])
  const [error, setError] = useState('')
  const router = useRouter();

  const handleVerify = async () => {
    setLoading(true)
    setError('')

    let val = inputValue.trim();

    if (!val) {
      toast.warning('please enter something')
      setLoading(false);
      return;
    }

    val = val.endsWith('/') ? val.slice(0, -1) : val

    try {
      const response = await fetch('/api/detect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ search: val }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
        toast.error('something is wrong!')
      }
      toast.success('fetching details')

      const data = await response.json()

      const dappResults = data.result?.results || []

      if (dappResults.length === 0) {
        setError('No results found.')
      }

      setDappData(dappResults)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Error fetching data.')
    } finally {
      setLoading(false)
      setIsModalOpen(true)
    }
  }
  return (
    <div className="relative flex  items-center justify-center overflow-hidden bg-background  md:shadow-xl">

      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

      <div className="min-h-screen  text-white z-30">

        <header className="container mx-auto py-8 pl-5 md:!pl-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-10 h-10 text-blue-400 cursor-pointer" onClick={() => router.push('/')} />
              <h1 className="text-xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">DappGuard</h1>
            </div>
   
          </div>
        </header>

        <main className="container mx-auto px-4 py-16 mt-7">
          <section className="text-center mb-16 md:mb-32 ">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Verify Solana <Cover>Dapps</Cover></h2>
              <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto mb-4">DappGuard: Your trusted companion for safe decentralized experiences</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className=" md:relative ">
                <Input
                  type="text"
                  placeholder="Enter Dapp name, contract address, or website URL"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full p-6 md:pr-32 text-lg rounded-full border-2 border-[#09090b] bg-[#27272a] text-white placeholder-gray-400 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                />
                <Button
                  onClick={handleVerify}
                  disabled={loading}
                  className="md:absolute mt-3 md:mt-0 right-2 top-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Search className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Verify
                    </>
                  )}
                </Button>
              </div>
            </motion.div>

            <button onClick={() => router.push('/early-access')} className="mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#27272a,45%,#ffffff8c,55%,#27272a)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Get APIs Access   <ArrowRight className="ml-3" size={20} />
            </button>

          </section>


          <section id="features" className=" ">
            <h3 className="text-2xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-7">Why Choose DappGuard?</h3>
            <FeaturesSectionDemo />
          </section>

          <section id="how-it-works" className="w-[100vw] md:w-full">
            <HowItWorks />
          </section>

          <section id="faq" className="w-[100vw] md:w-full">
            <h3 className="text-2xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8 text-center">Frequently Asked Questions</h3>
            <AnimatedListDemo />
          </section>
        </main>


        <AnimatePresence >
          {isModalOpen && (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
              <DialogContent className="bg-gray-900 text-white border-2 border-slate-400 rounded-lg h-[90vh] overflow-y-scroll no-scrollbar" >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-blue-400">Dapp Verification Result</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    {error ? error : "Here's what we found about the Dapp(s) you searched for:"}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-8">
                  {dappData.length > 0 ? (
                    dappData.map((dapp, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={dapp.logo || '/default-logo.png'}
                            alt={`${dapp.name || 'Unknown'} logo`}

                            className="h-16 w-16 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-xl font-semibold">{dapp.name || 'Unknown Dapp'}</h3>
                            <p className="text-gray-400">{dapp.description || 'No description available.'}</p>
                          </div>
                        </div>
                        {dapp.status && (
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">Status:</span>
                            {dapp.status === "verified" ? (
                              <span className="text-green-400 flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Verified</span>
                            ) : dapp.status === "unverified" ? (
                              <span className="text-yellow-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-1" /> Unverified</span>
                            ) : (
                              <span className="text-red-400 flex items-center"><XCircle className="w-4 h-4 mr-1" /> Suspicious</span>
                            )}
                          </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-purple-400">Details</h4>
                            <p><span className="text-gray-400">Website:</span> {dapp.website || 'N/A'}</p>
                            <p><span className="text-gray-400">Chains:</span> {dapp.chains ? dapp.chains.join(', ') : 'N/A'}</p>
                            <p><span className="text-gray-400">Categories:</span> {dapp.categories ? dapp.categories.join(', ') : 'N/A'}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-purple-400">Metrics</h4>
                            <p><span className="text-gray-400">Transactions:</span> {dapp.metrics?.transactions?.toLocaleString() || 'N/A'}</p>
                            <p><span className="text-gray-400">UAW:</span> {dapp.metrics?.uaw?.toLocaleString() || 'N/A'}</p>
                            <p><span className="text-gray-400">Volume:</span> ${dapp.metrics?.volume?.toLocaleString() || 'N/A'}</p>
                            <p><span className="text-gray-400">Balance:</span> ${dapp.metrics?.balance?.toLocaleString() || 'N/A'}</p>
                          </div>
                        </div>
                        {dapp.securityAudit && (
                          <div>
                            <h4 className="text-lg font-semibold text-purple-400">Security Information</h4>
                            <p><span className="text-gray-400">Security Audit:</span> {dapp.securityAudit}</p>
                            <p><span className="text-gray-400">Risk Level:</span> {dapp.riskLevel || 'N/A'}</p>
                          </div>
                        )}
                        {dapp.fullDescription && (
                          <div>
                            <h4 className="text-lg font-semibold text-purple-400">Full Description</h4>
                            <p className="text-gray-300">{dapp.fullDescription.replace(/<[^>]+>/g, '')}</p>
                          </div>
                        )}
                        {dapp.socialLinks && dapp.socialLinks.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-purple-400">Social Links</h4>
                            <div className="flex space-x-4 mt-2">
                              {dapp.socialLinks.map((link, idx) => (
                                <a
                                  key={idx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300"
                                >
                                  {link.title.charAt(0).toUpperCase() + link.title.slice(1)}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="w-full flex flex-col gap-y-3 justify-center items-center">
                      <div className="h-60 w-60">
                        <Lottie animationData={Alert} />
                      </div>
                      <p className="text-center text-lg text-red-500 font-bold">
                        No data available for the requested DApp. It may not be part of the Solana ecosystem, unregistered, or potentially suspicious. Please proceed with caution.
                      </p>

                    </div>
                  )}
                </div>
                <Button onClick={() => setIsModalOpen(false)} className="mt-6 w-full ">
                  Close
                </Button>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>

        <DockDemo />
        <footer className=" py-8 ">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 DappGuard. All rights reserved.</p>
            <p className="mt-2">Securing the Solana ecosystem, one dapp at a time.</p>
          </div>
        </footer>
      </div>

      <Spotlight
        className="-top-[40rem] left-16 md:left-96 md:-top-72 lg:!left-96 lg:!-top-56"
        fill="white"
      />
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