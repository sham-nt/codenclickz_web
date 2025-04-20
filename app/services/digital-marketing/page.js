'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChatBot } from '@/components/ChatBot';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChartPieIcon, 
  GlobeAltIcon, 
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br" style={{ background: 'linear-gradient(to bottom right, rgb(0,0,0), rgb(194,65,12), rgb(0,0,0))' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(249,115,22,0.15), rgba(0,0,0,0.9), rgb(0,0,0))' }}></div>
      <Header />
      <ChatBot />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-transparent"></div>
        </div>
        <img
          alt="Digital Marketing Background"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-12 pb-8 text-center">
            <div className="mb-12 inline-flex items-center justify-center rounded-full bg-orange-500/10 px-6 py-2 text-sm font-medium text-orange-400 ring-1 ring-inset ring-orange-500/20">
              Expert SEO & Digital Marketing Services
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
              Grow Your Online Presence
            </h1>
            <p className="mt-8 text-lg text-gray-300 sm:text-xl">
              Data-driven digital marketing solutions to boost your visibility, engagement, and conversions.
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="rounded-lg border border-orange-500/20 bg-black/30 p-5">
                <div className="text-orange-400 text-xl font-semibold mb-2">Targeted Traffic</div>
                <p className="text-gray-300">Attract potential customers actively searching for your products or services</p>
              </div>
              <div className="rounded-lg border border-orange-500/20 bg-black/30 p-5">
                <div className="text-orange-400 text-xl font-semibold mb-2">Higher Conversions</div>
                <p className="text-gray-300">Turn visitors into customers with optimized funnels and content</p>
              </div>
              <div className="rounded-lg border border-orange-500/20 bg-black/30 p-5">
                <div className="text-orange-400 text-xl font-semibold mb-2">Data-Driven Results</div>
                <p className="text-gray-300">Make decisions based on analytics and measurable outcomes</p>
              </div>
            </div>
            
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="#contact" 
                className="rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Get a Free Consultation
              </Link>
              <Link 
                href="#seo-audit" 
                className="text-base font-semibold leading-6 text-white hover:text-orange-400"
              >
                Explore Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="py-10 md:py-16"></div>

      {/* Services Section Wrapper */}
      <div id="services" className="relative">
        {/* SEO and SEO Audit Section */}
        <section id="seo-audit" className="relative py-16">
          <div className="absolute inset-0 -z-10">
            {/* Top gradient fade to replace the border */}
            <div className="absolute top-0 left-0 right-0 h-4" style={{ 
              background: 'linear-gradient(to bottom, rgba(249,115,22,0.15), transparent)'
            }}></div>
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <ChartPieIcon className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">SEO & SEO Audit</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg text-gray-300">
                  Our comprehensive SEO services help businesses improve their online visibility and attract more organic traffic through search engines.
                </p>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Our SEO Process:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Technical SEO audit to identify and fix issues affecting your site&apos;s performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Keyword research and competitor analysis to find the right targeting strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>On-page optimization for content, meta tags, and site structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Local SEO to boost visibility in your service areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Link building strategies to increase your site&apos;s authority</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Regular performance reporting with actionable insights</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/SEO image.png"
                  alt="SEO and SEO Audit"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* International SEO Section */}
        <section id="international-seo" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <GlobeAltIcon className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">International SEO</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="International SEO"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="mb-6 text-lg text-gray-300">
                  Expand your business globally with our specialized international SEO strategies tailored to reach audiences across different countries and languages.
                </p>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Our International SEO Approach:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Market research to identify the most promising international markets for your business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Country-specific domain strategy (ccTLDs, subdomains, or subdirectories)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Multilingual content creation and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Implementation of hreflang tags for language targeting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Local link building and citation development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>International compliance and regional hosting setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Marketing Section */}
        <section id="content-marketing" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <DocumentTextIcon className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Content Marketing</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg text-gray-300">
                  Engage your audience with strategic content that educates, entertains, and converts. Our content marketing services deliver the right message at the right time to the right people.
                </p>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Our Content Marketing Services:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Comprehensive content strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>SEO-optimized blog posts and articles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Engaging social media content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Whitepapers and ebooks for lead generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Video content planning and production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Email marketing campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Content performance analytics and optimization</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Content Marketing"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Google Advertising Section */}
        <section id="google-advertising" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <MagnifyingGlassIcon className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Google Advertising</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Google Advertising"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="mb-6 text-lg text-gray-300">
                  Maximize your ROI with our data-driven Google Ads strategies that put your business in front of potential customers actively searching for your products or services.
                </p>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Our Google Ads Management Services:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Strategic campaign setup and structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Comprehensive keyword research and competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Compelling ad copywriting and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Landing page optimization for conversions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Bid management and budget optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Shopping, display, and remarketing campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Detailed performance reporting and analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Marketing Section */}
        <section id="social-media" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Social Media Marketing</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg text-gray-300">
                  Build brand awareness, engage with your audience, and drive conversions through strategic social media marketing across all major platforms.
                </p>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Our Social Media Marketing Services:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Tailored social media strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Profile setup and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Content calendar creation and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Original content creation (graphics, videos, copy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Community management and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Paid social advertising campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Influencer partnership management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Analytics and performance reporting</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Social Media Marketing"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 border-t border-gray-800 mt-10 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to boost your online presence?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Contact us today for a free consultation with our digital marketing experts.
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
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white text-left">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-orange-500 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
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