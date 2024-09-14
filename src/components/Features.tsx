import { cn } from "@/lib/utils";
import {
  IconShieldCheck,
  IconInfoCircle,
  IconLink,
  IconAlertTriangle,
  IconApi,
  IconDatabase,
  IconUserCheck,
  IconUsers,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Instant Dapp Verification",
      description:
        "Verify any Solana dapp instantly to see if it's genuine and secure.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Detailed Dapp Information",
      description:
        "Get in-depth information about dapps, including their features and offerings.",
      icon: <IconInfoCircle />,
    },
    {
      title: "Official Social Media Links",
      description:
        "Find official social media links to connect with the dapp's community.",
      icon: <IconLink />,
    },
    {
      title: "Protection Against Fraud",
      description:
        "Stay safe from suspicious or fraudulent dapps in the Solana ecosystem.",
      icon: <IconAlertTriangle />,
    },
    {
      title: "Free API Access",
      description:
        "Developers can access our API for free and implement it anywhere.",
      icon: <IconApi />,
    },
    {
      title: "Trusted Data Sources",
      description:
        "Data scraped from trusted sources like DappRadar ensures accuracy.",
      icon: <IconDatabase />,
    },
    {
      title: "Easy to Use",
      description:
        "Simply enter the name, domain, or contract address to search.",
      icon: <IconUserCheck />,
    },
    {
      title: "Community Driven",
      description:
        "Join our community to contribute and report suspicious dapps.",
      icon: <IconUsers />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
