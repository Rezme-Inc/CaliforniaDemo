'use client';

import { Card } from '@/components/ui/card';
import { Building2, LandPlot, Scale, Building, Info, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  const jurisdictions = [
    {
      name: 'State of California',
      description: 'California Fair Chance Act',
      icon: LandPlot,
      color: 'bg-primary',
      textColor: 'text-primary',
      link: 'https://california.rezmedemo.com/'
    },
    {
      name: 'San Francisco',
      description: 'San Francisco Fair Chance Ordinance',
      icon: Building2,
      color: 'bg-primary',
      textColor: 'text-primary',
      link: 'https://sfo.rezmedemo.com/'
    },
    {
      name: 'Los Angeles',
      description: 'Los Angeles County Fair Chance Ordinance for Employers',
      icon: Building,
      color: 'bg-primary',
      textColor: 'text-primary',
      link: 'https://la.rezmedemo.com/'
    },
    {
      name: 'San Diego',
      description: 'San Diego Fair Chance Ordinance',
      icon: Building,
      color: 'bg-primary',
      textColor: 'text-primary',
      link: 'https://sandiego.rezmedemo.com/'
    },
    {
      name: 'EEOC',
      description: 'Enforcement Guidance on the Consideration of Arrest and Conviction Records in Employment Decisions',
      icon: Scale,
      color: 'bg-primary',
      textColor: 'text-primary',
    },
    {
      name: 'Restorative Record',
      description: 'Reach out to candidates for pre-adverse action response or individualized assessment',
      icon: MessageCircle,
      color: 'bg-primary',
      textColor: 'text-primary',
      link: 'https://cornell.restorativerecord.com/'
    },
  ];

  return (
    <div className="min-h-screen bg-background font-poppins flex flex-col">
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              California Fair Chance Assessment Menu
            </h1>
            <p className="mt-6 text-xl text-secondary sm:text-2xl max-w-3xl mx-auto">
              We start with the applicable laws, choose one or more to begin your journey to automated Fair Chance compliance
            </p>
          </div>

          <Card className="mb-12 p-8 border-2 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">Fair Chance Act: Important Information</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  The California Fair Chance Act (effective January 1, 2018) prohibits employers with five or more employees from inquiring about conviction history before making a job offer. This law is designed to reduce barriers to employment for individuals with criminal histories.
                </p>
                <p className="text-secondary leading-relaxed">
                  Important: Cities and municipalities within California have established their own specific guidelines and protocols. Employers must comply with both state-level requirements and any additional local regulations when hiring, recruiting, or advertising positions in these jurisdictions.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jurisdictions.map((jurisdiction, index) => {
              const Icon = jurisdiction.icon;
              return (
                <Link 
                  key={jurisdiction.name} 
                  href={jurisdiction.link || '#'}
                  className="transform transition-all duration-300 hover:scale-102"
                >
                  <Card className="h-full p-8 flex flex-col items-center text-center cursor-pointer border-2 border-border hover:border-primary shadow-sm hover:shadow-md transition-all duration-300">
                    <div className={`${jurisdiction.color} p-4 rounded-xl mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">{jurisdiction.name}</h2>
                    <p className="text-secondary text-sm leading-relaxed">{jurisdiction.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-secondary text-lg">
              Ensure compliance with Fair Chance Hiring laws across California
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}