"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  question:string,
  answer:string
  icon:string,
  time:string,
  color:string
}



let faqs: Item[] =  [
    {
      question: "What is SafeDapp?",
      answer: "SafeDapp verifies Solana dApps, helping users avoid scams by providing trusted information and links.",
      time: "10m ago",
      icon: "🔍",
      color: "#00C9A7"
    },
    {
      question: "What are the benefits of using SafeDapp?",
      answer: "It enhances security by identifying unverified or scam dApps and providing official social links.",
      time: "20m ago",
      icon: "🔒",
      color: "#FFB800"
    },
    {
      question: "How does SafeDapp help with rug pulls and scams?",
      answer: "It flags high-risk dApps and detects suspicious activities to protect users from scams.",
      time: "5m ago",
      icon: "⚠️",
      color: "#FF3D71"
    },
    {
      question: "Can I get verified links through SafeDapp?",
      answer: "Yes, it provides official links, reducing the risk of fake sites.",
      time: "25m ago",
      icon: "🔗",
      color: "#1E86FF"
    },
    {
      question: "What future features are planned?",
      answer: "We plan to add payment integration, better scam detection, and more security tools.",
      time: "30m ago",
      icon: "🛠️",
      color: "#7C4DFF"
    },
    {
      question: "Is SafeDapp free?",
      answer: "Yes, it's completely free for all users.",
      time: "45m ago",
      icon: "💸",
      color: "#34A853"
    }
  ];
  

faqs = Array.from({ length: 10 }, () => faqs).flat();

const Notification = ({ question, answer,icon,time,color}: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full  cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-500 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>


        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{question}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {answer}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default   function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {faqs.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
