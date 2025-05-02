"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  // Try to use the language context if available
  let hasLanguageContext = false;
  try {
    const languageContext = useLanguage();
    hasLanguageContext = !!languageContext;
  } catch (error) {
    console.log("Language context not available in Footer");
  }

  return (
    <footer className="relative w-full bg-gradient-to-t from-gray-950 to-gray-900/90 mt-auto">
      <div className="relative w-full border-t border-white/10">
        <div className="mx-auto w-full px-4 md:px-6 lg:px-8 pb-12 pt-16 sm:pt-24">
          {/* Top section with logo and contact info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-16">
            {/* Company info column */}
            <div className="space-y-6">
              <div>
                <a href="/" className="inline-block">
                  <img
                    src="/logo.png"
                    alt="CodenClickz Logo"
                    className="h-12 w-auto mb-4"
                  />
                </a>
                <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
              </div>
              <p className="text-sm leading-6 text-gray-300">
                Transforming ideas into digital reality through innovative solutions.
              </p>
              <div className="space-y-4 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                <p className="text-sm leading-relaxed text-gray-300">
                  <span className="font-medium text-white">CodenClickz</span> is listed under Busabok Global Ventures<br />
                  Linuxx serviced offices 622<br />
                  Emporium Tower ชั้น 9 10 และ 21<br />
                  Sukhumvit Rd, Khwaeng Khlong Tan<br />
                  Khet Khlong Toei, Bangkok 10110
                </p>
              </div>
              <p className="text-sm leading-6 text-gray-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@codenclickz.com" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  info@codenclickz.com
                </a>
              </p>
              <p className="text-sm leading-6 text-gray-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:0990266719" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  099 026 6719
                </a>
              </p>
              <div className="flex space-x-5">
                <a 
                  href="https://linkedin.com/company/codenclickz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-white/5"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/codenclickz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-white/5"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://g.co/kgs/c6cPRqY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-white/5"
                  aria-label="Google Maps"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links columns */}
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-indigo-300 uppercase tracking-wider">Services</h3>
                  <ul className="mt-6 space-y-3">
                    <li>
                      <a href="/services/development-services" className="text-sm leading-6 text-gray-300 hover:text-white hover:underline transition-colors">
                        Development Services
                      </a>
                    </li>
                    <li>
                      <a href="/services/digital-marketing" className="text-sm leading-6 text-gray-300 hover:text-white hover:underline transition-colors">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/services/ai" className="text-sm leading-6 text-gray-300 hover:text-white hover:underline transition-colors">
                        AI Services
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-indigo-300 uppercase tracking-wider">Company</h3>
                  <ul className="mt-6 space-y-3">
                    <li>
                      <a href="/about" className="text-sm leading-6 text-gray-300 hover:text-white hover:underline transition-colors">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="text-sm leading-6 text-gray-300 hover:text-white hover:underline transition-colors">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-sm leading-6 text-gray-300 hover:text-white hover:underline transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-indigo-300 uppercase tracking-wider">Legal</h3>
                  <ul className="mt-6 space-y-3">
                    <li>
                      <a href="/privacy" className="text-sm leading-6 text-gray-300 hover:text-white hover:underline transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-sm leading-6 text-gray-300 hover:text-white hover:underline transition-colors">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} CodeNClickz. All rights reserved.</p>
            <p className="text-xs leading-5 text-gray-500 mt-2 sm:mt-0">Busabok Global Ventures</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
