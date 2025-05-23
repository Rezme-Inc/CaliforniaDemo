import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <Link href="/" className="mb-6 block">
              <img src="/rezme-logo.png" alt="Rezme" className="h-8" />
            </Link>
            <nav className="space-y-4">
              <Link href="/" className="block hover:text-gray-300">Home</Link>
              <Link href="/about" className="block hover:text-gray-300">About Us</Link>
              <Link href="/products" className="block hover:text-gray-300">Products</Link>
              <Link href="/integrations" className="block hover:text-gray-300">Integrations</Link>
              <Link href="/insights" className="block hover:text-gray-300">Insights</Link>
            </nav>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <nav className="space-y-4">
              <Link href="/open-ai" className="block hover:text-gray-300">
                Open AI Data Processing Agreement
              </Link>
              <Link href="/branding" className="block hover:text-gray-300">Branding</Link>
              <Link href="/onboarding" className="block hover:text-gray-300">Onboarding Guide</Link>
              <Link href="/privacy" className="block hover:text-gray-300">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-gray-300">Terms of Service</Link>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <nav className="space-y-4">
              <Link href="/cookies" className="block hover:text-gray-300">Cookies Policy</Link>
              <Link href="/disclaimer" className="block hover:text-gray-300">Disclaimer</Link>
              <Link href="https://app.vanta.com/rezme.app/trust/kbynv6xr5c2g82tzmhq3qz/controls" className="block hover:text-gray-300">
                Trust Center
              </Link>
            </nav>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Have a question?</h3>
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Submit
              </Button>
              <p className="text-sm text-gray-400">
                By choosing to submit your email address you agree with our Privacy Policy
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Rezme, Inc. All Rights Reserved Worldwide
          </p>
          <div className="flex space-x-4">
            <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}