'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Search, Shield, CheckCircle, XCircle, AlertTriangle, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function DappGuardLanding() {
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dappData, setDappData] = useState([])
  const [error, setError] = useState(null)

  const handleVerify = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ search: inputValue }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      const dappResults = data.result?.result?.results || []

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
    <div className=" w-full bg-black  bg-dot-white/[0.2]  relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="min-h-screen  text-white z-30">
      <header className="container mx-auto py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-10 h-10 text-blue-400" />
            <h1 className="text-3xl font-bold">DappGuard</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold mb-4">Verify Solana Dapps with Confidence</h2>
            <p className="text-xl mb-8">DappGuard: Your trusted companion for safe decentralized experiences</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Enter Dapp name, contract address, or website URL" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-6 pr-32 text-lg rounded-full border-2 border-purple-500 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
              />
              <Button 
                onClick={handleVerify}
                disabled={loading}
                className="absolute right-2 top-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
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
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose DappGuard?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Comprehensive Verification", description: "We analyze dapp contracts, websites, and on-chain activity for a thorough security assessment.", icon: CheckCircle },
              { title: "Real-time Alerts", description: "Stay informed about potential risks and security updates for your favorite Solana dapps.", icon: AlertTriangle },
              { title: "User-friendly Interface", description: "Easy-to-understand security ratings and detailed reports for both novice and experienced users.", icon: ExternalLink },
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-purple-500 text-white">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-blue-400 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">How DappGuard Works</h3>
          <ol className="list-decimal list-inside space-y-4">
            <li>Enter a Solana dapp name, contract address, or website URL in the search bar.</li>
            <li>Our advanced algorithms analyze the dapp's smart contracts, website, and on-chain activity.</li>
            <li>Receive a comprehensive security report with risk assessment and detailed findings.</li>
            <li>Make informed decisions about using the dapp based on our verification results.</li>
          </ol>
        </section>

        <section id="faq" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { question: "Is DappGuard free to use?", answer: "Yes, DappGuard is completely free for all users." },
              { question: "How often is the dapp information updated?", answer: "We update our database daily to ensure the most current information." },
              { question: "Can I suggest a dapp for verification?", answer: "Contact us to suggest a dapp for our verification process." },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border-purple-500 text-white">
                <CardHeader>
                  <CardTitle>{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

 
      <AnimatePresence >
        {isModalOpen && (
          <Dialog  open={isModalOpen} onOpenChange={setIsModalOpen} >
            <DialogContent className="bg-gray-900 text-white border-2 border-purple-500 rounded-lg h-[90vh] overflow-y-scroll">
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
                          className="w-16 h-16 rounded-full object-cover"
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
                  <p className="text-center text-gray-400">No Dapp data available.</p>
                )}
              </div>
              <Button onClick={() => setIsModalOpen(false)} className="mt-6 w-full bg-purple-500 hover:bg-purple-600">
                Close
              </Button>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 DappGuard. All rights reserved.</p>
          <p className="mt-2">Securing the Solana ecosystem, one dapp at a time.</p>
        </div>
      </footer>
    </div>
    </div>

  )
}