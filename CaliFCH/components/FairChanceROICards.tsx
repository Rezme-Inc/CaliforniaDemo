import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, FileText, DollarSign, Clock } from "lucide-react";

export default function FairChanceROICards() {
  const roiFacts = [
    {
      icon: <ShieldAlert className="h-8 w-8 text-red-600" />,
      title: "Reduce Legal Risk",
      text: "Fair Chance laws carry penalties of up to $250,000 per violation. Automating compliance minimizes exposure to fines and lawsuits.",
      source: "EEOC & Local Fair Chance Ordinances"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Capture Tax Credits Automatically",
      text: "Employers may earn up to $2,400 per qualifying hire through the Work Opportunity Tax Credit. Billions go unclaimed each year.",
      source: "U.S. Department of Labor, WOTC Overview"
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Stay Audit-Ready",
      text: "Many jurisdictions require Fair Chance documentation to be stored for 3+ years. Centralized logs ensure full audit trails.",
      source: "State and City Recordkeeping Guidelines"
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-600" />,
      title: "Speed Up Hiring",
      text: "Manual adjudication can delay hiring by up to 10 days. Automation keeps hiring fast while staying compliant.",
      source: "State Fair Chance Compliance Timelines"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-12">
      {roiFacts.map((fact, index) => (
        <Card key={index} className="p-6 shadow-md rounded-2xl bg-white">
          <div className="flex items-center gap-4">
            {fact.icon}
            <h3 className="text-xl font-semibold text-gray-900">{fact.title}</h3>
          </div>
          <CardContent className="mt-4 text-gray-700 text-base">
            {fact.text}
            <p className="mt-2 text-sm text-gray-500 italic">{fact.source}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 