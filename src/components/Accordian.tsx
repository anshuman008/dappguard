import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    return (
        <div className=' w-[90vw] md:w-[70vw]'>
            <Accordion type="single" className='flex flex-col gap-y-3' collapsible>
                {/* FAQ 1 */}
                <AccordionItem value="item-1" className='bg-neutral-900 p-3 '>
                    <AccordionTrigger>What is SafeDapp?</AccordionTrigger>
                    <AccordionContent>
                        SafeDapp is a Solana dApp verifier that allows users to check whether a decentralized application (dApp) is verified or registered within the Solana ecosystem. It helps users avoid fraudulent or malicious dApps by providing verified information and official links.
                    </AccordionContent>
                </AccordionItem>

                {/* FAQ 2 */}
                <AccordionItem value="item-2"  className='bg-neutral-900 p-3'>
                    <AccordionTrigger>What are the benefits of using SafeDapp?</AccordionTrigger>
                    <AccordionContent>
                        Using SafeDapp enhances your security when interacting with dApps on Solana. It helps prevent theft and fraud by identifying unverified or scam dApps. Additionally, it provides official social links and detailed information about each dApp, allowing you to make informed decisions.
                    </AccordionContent>
                </AccordionItem>

                {/* FAQ 3 */}
                <AccordionItem value="item-3"  className='bg-neutral-900 p-3'>
                    <AccordionTrigger>How does SafeDapp help in analyzing rug pulls and scams?</AccordionTrigger>
                    <AccordionContent>
                        SafeDapp includes an advanced rug pull and scam analysis feature that detects suspicious activities and flags high-risk dApps. This helps users avoid potential scams by providing warnings and insights into the trustworthiness of dApps.
                    </AccordionContent>
                </AccordionItem>

                {/* FAQ 4 */}
                <AccordionItem value="item-4"  className='bg-neutral-900 p-3'>
                    <AccordionTrigger>Can I get verified links for dApps through SafeDapp?</AccordionTrigger>
                    <AccordionContent>
                        Yes, SafeDapp provides official and verified links for each dApp listed on our platform. This ensures you are accessing legitimate resources and reduces the risk of interacting with fraudulent websites.
                    </AccordionContent>
                </AccordionItem>

                {/* FAQ 5 */}
                <AccordionItem value="item-5"  className='bg-neutral-900 p-3'>
                    <AccordionTrigger>What features will be added to SafeDapp in the future?</AccordionTrigger>
                    <AccordionContent>
                        We plan to introduce additional features such as payment integration, enhanced authentication mechanisms, and an improved rug checker for better detection of scams. Our goal is to continually improve SafeDapp to provide comprehensive security solutions for the Web3 community.
                    </AccordionContent>
                </AccordionItem>

                {/* FAQ 6 */}
                <AccordionItem value="item-6"  className='bg-neutral-900 p-3'>
                    <AccordionTrigger>Is SafeDapp free to use?</AccordionTrigger>
                    <AccordionContent>
                        Yes, SafeDapp is completely free for all users. We believe in making security accessible to everyone in the Web3 space.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>

    );
};

export default FAQ;
