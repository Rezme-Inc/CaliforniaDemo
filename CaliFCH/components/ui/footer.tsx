import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white text-black pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="text-3xl font-bold mb-4 select-none">
              <span className="text-black">réz</span><span className="text-red-500">me.</span>
            </div>
            <p className="text-gray-600 text-lg max-w-xs">
              Automating Fair Chance Hiring compliance for modern HR teams.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link href="https://www.rezme.app/" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Home</Link>
              <Link href="https://www.rezme.app/about" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">About</Link>
              <Link href="https://www.rezme.app/product" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Product</Link>
              <Link href="https://www.rezme.app/resources" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Resources</Link>
              <Link href="https://www.rezme.app/signin" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Sign In</Link>
            </nav>
          </div>

          {/* Legal & Policies */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Legal & Policies</h3>
            <nav className="space-y-2">
              <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=e05577fe-11ce-47d5-9a97-c994b0ee6acf" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
              <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=6947f494-a92e-419a-82df-ddc2ec5a1743" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Cookie Policy</Link>
              <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=40404d5f-9640-47ad-bab0-8f2bb32aabc8" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link>
              <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=2dee6321-2901-4da4-a2e6-d31333c34462" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Disclaimer</Link>
              <Link href="https://www.canva.com/design/DAGbAYTxAqQ/7VXnGimgiKAWzBXfJBfbVQ/edit" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Branding Guidelines</Link>
              <Link href="https://app.pactsafe.com/sign?r=656335a17c5752be211f42bb&s=656335a17c5752be211f42bd&signature=mmgK3G~HAApM5Xp-bZmWlgO~3DQka7e6OqzsCyEpDIs8Zu8uJzmbCAbS7-89E~L0ZHCSQ6kytTBr7FSbyyX7o4AHaqssthcwwdXE7Njy1jo~w9z3bFUHh5ThLRfplS~VaSSCygyKw2cQ-dOm23rVhjJHS2Twn4JH9K4i5uo-Ihawo8NnVls~s~wzitNBCfJL5hBzarsxGYbgW-nN8pVMFKfslOzJWQrnNoogynAaEToOjkaraNcyPgmVaY8l4iYvZJxzmVR1rxwDDJH8gghYZmYjk0Oqn-r4glbTauhuqiwo391PrnsXA6KTZdZ2ovSo8o-egdfyXtOuGIHqIJqVSQ__" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Open AI Data Processing Agreement</Link>
              <Link href="https://app.vanta.com/rezme.app/trust/kbynv6xr5c2g82tzmhq3qz/controls" className="block text-gray-700 hover:text-black" target="_blank" rel="noopener noreferrer">Trust Center</Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Rézme. All rights reserved.
        </div>
      </div>
    </footer>
  );
}