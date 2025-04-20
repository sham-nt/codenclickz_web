'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChatBot } from '@/components/ChatBot';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ComputerDesktopIcon, 
  CloudArrowUpIcon, 
  ShieldCheckIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  ServerIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

export default function DevelopmentServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br" style={{ background: 'linear-gradient(to bottom right, rgb(15,23,42), rgb(30,41,59), rgb(15,23,42))' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at bottom right, rgba(56,189,248,0.1), transparent, rgb(15,23,42))' }}></div>
      <Header />
      <ChatBot />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-transparent"></div>
        </div>
        <img
          alt="Development Services Background"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-12 pb-8 text-center">
            <div className="mb-8 inline-flex items-center justify-center rounded-full bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-400 ring-1 ring-inset ring-cyan-500/20">
              Custom Software Development Solutions
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
              Build Your Digital Future
            </h1>
            <p className="mt-6 text-lg text-gray-300 sm:text-xl">
              Cutting-edge software solutions engineered to transform your business and drive innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="#contact" 
                className="rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Get a Free Consultation
              </Link>
              <Link 
                href="#web-development" 
                className="text-base font-semibold leading-6 text-white hover:text-cyan-400"
              >
                Explore Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Wrapper */}
      <div id="services" className="relative">
        {/* Web Development Section */}
        <section id="web-development" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <ComputerDesktopIcon className="h-8 w-8 text-cyan-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Website Development</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg text-gray-300">
                  We create responsive, high-performance websites and web applications that deliver exceptional user experiences and drive business growth.
                </p>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Web Development Expertise:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Modern frontend development with React, Next.js, and Vue.js</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Robust backend systems using Node.js, Python, and Java</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Custom e-commerce solutions with secure payment integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Progressive Web Apps (PWAs) for cross-platform functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Website performance optimization and technical SEO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>API development and third-party integrations</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg shadow-cyan-900/20">
                <div className="relative h-80 w-full bg-gradient-to-r from-slate-900 to-cyan-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CodeBracketIcon className="h-24 w-24 text-cyan-500/30" />
                    <div className="absolute w-full h-full bg-grid-white/[0.05]" style={{ backgroundSize: '16px 16px' }}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute top-5 left-5 p-2 bg-slate-800/70 rounded text-xs text-cyan-300 font-mono">index.html</div>
                  <div className="absolute top-5 right-5 p-2 bg-slate-800/70 rounded text-xs text-cyan-300 font-mono">style.css</div>
                  <div className="absolute bottom-5 left-5 p-2 bg-slate-800/70 rounded text-xs text-cyan-300 font-mono">app.js</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERP Solutions Section */}
        <section id="erp-solutions" className="relative border-t border-gray-800 bg-gray-900/30 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <CloudArrowUpIcon className="h-8 w-8 text-cyan-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">ERP Solutions</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg shadow-cyan-900/20">
                <div className="relative h-80 w-full bg-gradient-to-r from-slate-900 to-slate-800">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <ServerIcon className="h-16 w-16 text-cyan-500/30 mb-6" />
                    <div className="grid grid-cols-3 gap-3 w-3/4">
                      <div className="h-16 bg-slate-800/80 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-400 text-xs">Inventory</span>
                      </div>
                      <div className="h-16 bg-slate-800/80 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-400 text-xs">Finance</span>
                      </div>
                      <div className="h-16 bg-slate-800/80 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-400 text-xs">HR</span>
                      </div>
                      <div className="h-16 bg-slate-800/80 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-400 text-xs">CRM</span>
                      </div>
                      <div className="h-16 bg-slate-700/90 rounded-lg flex items-center justify-center border border-cyan-500/30">
                        <span className="text-cyan-300 text-xs">Analytics</span>
                      </div>
                      <div className="h-16 bg-slate-800/80 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-400 text-xs">Supply Chain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="mb-6 text-lg text-gray-300">
                  Our custom Enterprise Resource Planning solutions streamline operations, integrate business processes, and provide real-time insights for informed decision-making.
                </p>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our ERP Development Services:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Tailored ERP system design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Integration of modules for finance, inventory, HR, and sales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Cloud-based ERP solutions for remote accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Legacy system migration and data transformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Custom reporting and business intelligence dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Ongoing maintenance, support, and system enhancements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cybersecurity Section */}
        <section id="cybersecurity" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <ShieldCheckIcon className="h-8 w-8 text-cyan-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Cybersecurity</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg text-gray-300">
                  Protect your digital assets with our comprehensive cybersecurity solutions designed to identify vulnerabilities, prevent attacks, and ensure business continuity.
                </p>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Cybersecurity Services:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Security assessments and vulnerability testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Network security architecture and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Application security testing and code reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Data encryption and secure communication protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Security monitoring and incident response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Employee security awareness training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Compliance with industry security standards (ISO 27001, GDPR, HIPAA)</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg shadow-cyan-900/20">
                <div className="relative h-80 w-full bg-gradient-to-r from-slate-900 to-slate-800">
                  <div className="absolute inset-0">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -inset-16 bg-cyan-500/5 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute -inset-12 bg-cyan-500/10 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
                        <div className="absolute -inset-8 bg-cyan-500/15 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                        <ShieldCheckIcon className="relative h-24 w-24 text-cyan-500/40" />
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full" style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d3ee' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Software Development Section */}
        <section id="custom-software" className="relative border-t border-gray-800 bg-gray-900/30 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <CubeTransparentIcon className="h-8 w-8 text-cyan-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Custom Software Development</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg shadow-cyan-900/20">
                <div className="relative h-80 w-full bg-gradient-to-r from-slate-900 to-slate-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-40 w-40">
                      <LightBulbIcon className="absolute inset-0 h-full w-full text-cyan-500/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent" style={{ animation: 'pulse 2s infinite' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322d3ee' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="mb-6 text-lg text-gray-300">
                  Transform your business with tailor-made software solutions designed specifically to address your unique challenges and operational requirements.
                </p>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Custom Software Services:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Requirements analysis and solution architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Business process automation software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Industry-specific solutions for healthcare, finance, and retail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Database design and data management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Custom CRM and customer engagement platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>IoT application development and integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Quality assurance and automated testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to build something amazing?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Contact us today to discuss your project with our development experts.
            </p>
            <form className="mt-10 max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white text-left">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white text-left">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white text-left">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="project-type" className="block text-sm font-semibold leading-6 text-white text-left">
                    Project Type
                  </label>
                  <div className="mt-2.5">
                    <select
                      id="project-type"
                      name="project-type"
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    >
                      <option>Website Development</option>
                      <option>ERP Solutions</option>
                      <option>Cybersecurity</option>
                      <option>Custom Software</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white text-left">
                    Project Details
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-cyan-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}