"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ChatBot } from "@/components/ChatBot";
import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  TrophyIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";

function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br" style={{ background: 'linear-gradient(to bottom right, rgb(19,24,38), black, rgb(19,24,38))' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(19,24,38,0.8), black, rgb(19,24,38))' }}></div>
      <Header />
      <ChatBot />

      {/* Free Consultation Modal */}
      <ConsultationForm isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14 border-b border-orange-900/10">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"></div>
        </div>
        
        {/* Decorative elements - top */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ffac42] to-[#ff5757] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            {/* Image Column (Left) */}
            <div className="relative lg:order-first">
              <div className="relative overflow-hidden rounded-xl bg-gray-800/50 shadow-xl ring-1 ring-white/10 lg:rounded-2xl">
                <Image
                  src="/images/thai_women.png"
                  alt="Thai women representative"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  style={{ height: "auto", maxHeight: "600px" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-orange-600/10 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-yellow-600/10 blur-2xl"></div>
            </div>
            
            {/* Content Column (Right) */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="hidden sm:mb-8 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  {t.hero.announcement}{" "}
                  <Link href="/services/ai" className="font-semibold text-white">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {t.hero.learnMore} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t.hero.mainHeading}
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-8">
                {t.hero.subHeading}
              </p>
              
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <Link
                  href="/services/development-services"
                  className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  {t.hero.exploreServices}
                </Link>
                <Link href="/about" className="text-sm/6 font-semibold text-white flex items-center">
                  {t.hero.aboutUs} <span aria-hidden="true" className="ml-1">→</span>
                </Link>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="rounded-md bg-gradient-to-r from-amber-600 to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-amber-500 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {t.hero.freeConsultation}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements - bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ffac42] to-[#ff5757] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Services with Bento Grid section */}
      <section className="relative w-full border-t border-orange-900/10">
        <div className="absolute inset-0 flex">
          <div className="h-full w-full bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"></div>
        </div>
        <div className="relative w-full py-24 sm:py-32">
          <div className="mx-auto max-w-[95%] px-4">
            <h2 className="text-center text-base/7 font-semibold text-orange-400">
              {t.services.title}
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              {t.services.subtitle}
            </p>
            <div className="mt-10 grid gap-3 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              {/* Web Development - Large Card */}
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      {t.services.webDev}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                      {t.services.webDevDesc}
                    </p>
                  </div>
                  <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-6 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-gray-700 bg-gray-900 shadow-2xl">
                      <img
                        className="size-full object-cover"
                        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80"
                        alt="Web Development"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Development */}
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      {t.services.mobileDev}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                      {t.services.mobileDevDesc}
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-6 max-lg:pt-10 max-lg:pb-12 sm:px-8 lg:pb-2">
                    <img
                      className="w-full max-lg:max-w-xs rounded-lg"
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80"
                      alt="Mobile Development"
                    />
                  </div>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-gray-800"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      {t.services.uiUxDesign}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                      {t.services.uiUxDesignDesc}
                    </p>
                  </div>
                  <div className="@container flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                    <img
                      className="w-full max-w-[90%] rounded-lg"
                      src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80"
                      alt="UI/UX Design"
                    />
                  </div>
                </div>
              </div>

              {/* Digital Marketing */}
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      {t.services.digitalMarketing}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                      {t.services.digitalMarketingDesc}
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow">
                    <div className="absolute top-10 right-0 bottom-0 left-6 overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
                      <Image
                        src="/images/Content Marketing.png"
                        alt="Digital Marketing"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (New) */}
      <section className="relative w-full border-t border-orange-900/10">
        <div className="absolute inset-0 flex">
          <div className="h-full w-full bg-gradient-to-br from-orange-500/5 via-transparent to-yellow-500/5"></div>
        </div>
        <div className="relative w-full py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-400">{t.whyUs.title}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.whyUs.subtitle}</p>
              
              <div className="mt-10 flex flex-col gap-8 sm:mt-16">
                {/* Grid of reasons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {/* Reason 1 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/10">
                      <TrophyIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-8 text-white">{t.whyUs.reason1}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-300">{t.whyUs.reason1Desc}</p>
                    </div>
                  </div>

                  {/* Reason 2 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/10">
                      <PuzzlePieceIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-8 text-white">{t.whyUs.reason2}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-300">{t.whyUs.reason2Desc}</p>
                    </div>
                  </div>

                  {/* Reason 3 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/10">
                      <ArrowTrendingUpIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-8 text-white">{t.whyUs.reason3}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-300">{t.whyUs.reason3Desc}</p>
                    </div>
                  </div>

                  {/* Reason 4 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/10">
                      <HeartIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-8 text-white">{t.whyUs.reason4}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-300">{t.whyUs.reason4Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="rounded-md bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-orange-500 hover:to-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {t.hero.freeConsultation}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="relative w-full border-t border-orange-900/10">
        <div className="mx-auto max-w-[95%] px-4 py-24 sm:py-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-orange-400">
                  {t.features.title}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {t.features.subtitle}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {t.features.description}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <CloudArrowUpIcon
                        className="absolute left-1 top-1 h-5 w-5 text-orange-500"
                        aria-hidden="true"
                      />
                      {t.features.feature1}
                    </dt>{" "}
                    <dd className="inline">{t.features.feature1Desc}</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <LockClosedIcon
                        className="absolute left-1 top-1 h-5 w-5 text-orange-500"
                        aria-hidden="true"
                      />
                      {t.features.feature2}
                    </dt>{" "}
                    <dd className="inline">{t.features.feature2Desc}</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <ServerIcon
                        className="absolute left-1 top-1 h-5 w-5 text-orange-500"
                        aria-hidden="true"
                      />
                      {t.features.feature3}
                    </dt>{" "}
                    <dd className="inline">{t.features.feature3Desc}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="relative w-full lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072"
                alt="Modern development workspace"
                className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-full md:ml-0 lg:ml-0"
                style={{ maxHeight: "600px", objectFit: "cover", objectPosition: "center" }}
              />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-orange-600/10 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-yellow-600/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="relative w-full border-t border-orange-900/10">
        <div className="absolute inset-0 flex">
          <div className="h-full w-full bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5"></div>
        </div>
        <div className="relative mx-auto max-w-[95%] px-4 py-24 sm:py-32">
          <h2 className="text-center text-base/7 font-semibold text-purple-400">
            {t.ai.title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {t.ai.subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
            {t.ai.description}
          </p>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* AI Feature 1 */}
            <div className="rounded-xl bg-gray-800/50 p-8 shadow-lg ring-1 ring-white/10 transition-all hover:bg-gray-800/70 hover:shadow-purple-500/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <Image src="/images/AI assistant.png" width={32} height={32} alt="AI Chatbots" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t.ai.feature1}</h3>
              <p className="mt-4 text-gray-300">
                {t.ai.feature1Desc}
              </p>
              <div className="mt-6 flex items-center gap-x-3">
                <div className="h-px flex-1 bg-gray-700" />
                <Link href="/services/ai" className="text-sm font-medium text-purple-400 hover:text-purple-300">{t.ai.learnMore}</Link>
              </div>
            </div>

            {/* AI Feature 2 */}
            <div className="rounded-xl bg-gray-800/50 p-8 shadow-lg ring-1 ring-white/10 transition-all hover:bg-gray-800/70 hover:shadow-purple-500/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <Image src="/images/RAG.png" width={32} height={32} alt="Document Processing" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t.ai.feature2}</h3>
              <p className="mt-4 text-gray-300">
                {t.ai.feature2Desc}
              </p>
              <div className="mt-6 flex items-center gap-x-3">
                <div className="h-px flex-1 bg-gray-700" />
                <Link href="/services/ai" className="text-sm font-medium text-purple-400 hover:text-purple-300">{t.ai.learnMore}</Link>
              </div>
            </div>

            {/* AI Feature 3 */}
            <div className="rounded-xl bg-gray-800/50 p-8 shadow-lg ring-1 ring-white/10 transition-all hover:bg-gray-800/70 hover:shadow-purple-500/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-purple-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">{t.ai.feature3}</h3>
              <p className="mt-4 text-gray-300">
                {t.ai.feature3Desc}
              </p>
              <div className="mt-6 flex items-center gap-x-3">
                <div className="h-px flex-1 bg-gray-700" />
                <Link href="/services/ai" className="text-sm font-medium text-purple-400 hover:text-purple-300">{t.ai.learnMore}</Link>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 ring-1 ring-purple-500/20 lg:p-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">{t.ai.transformTitle}</h3>
                <p className="mt-4 text-gray-300">
                  {t.ai.transformDesc}
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                      <CheckCircleIcon className="h-3.5 w-3.5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">{t.ai.benefit1}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                      <CheckCircleIcon className="h-3.5 w-3.5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">{t.ai.benefit2}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                      <CheckCircleIcon className="h-3.5 w-3.5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">{t.ai.benefit3}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                      <CheckCircleIcon className="h-3.5 w-3.5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">{t.ai.benefit4}</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link 
                    href="/services/ai" 
                    className="inline-flex items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  >
                    {t.ai.exploreSolutions}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 h-5 w-5">
                      <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-gray-800/50 shadow-xl ring-1 ring-white/10">
                  <Image
                    src="/images/RAG.png"
                    alt="AI Workflow Automation"
                    width={400}
                    height={400}
                    className="rounded-lg p-4"
                  />
                </div>
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-purple-600/10 blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-indigo-600/10 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Trends Section (New) */}
      <section className="relative w-full border-t border-indigo-900/10">
        <div className="absolute inset-0 flex">
          <div className="h-full w-full bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-400">
            Latest Tech Trends 2025
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Stay Ahead with Cutting-Edge Technology
          </p>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 shadow-lg transition-all hover:bg-gray-800/70">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <Image 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="AI-powered development"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">AI-Powered Development</h3>
                <p className="mt-2 text-sm text-gray-300">AI-assisted coding and automated testing transform how software is built</p>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <span className="rounded-full bg-indigo-600/80 px-2.5 py-0.5 text-xs font-semibold text-white">
                  2025
                </span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 shadow-lg transition-all hover:bg-gray-800/70">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <Image 
                src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Immersive Web Experiences" 
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">Immersive Web Experiences</h3>
                <p className="mt-2 text-sm text-gray-300">WebXR and 3D interactions create engaging digital environments</p>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <span className="rounded-full bg-indigo-600/80 px-2.5 py-0.5 text-xs font-semibold text-white">
                  Trending
                </span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 shadow-lg transition-all hover:bg-gray-800/70">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <Image 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Edge Computing"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">Edge Computing</h3>
                <p className="mt-2 text-sm text-gray-300">Process data closer to where it&apos;s collected for faster, more reliable apps</p>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <span className="rounded-full bg-indigo-600/80 px-2.5 py-0.5 text-xs font-semibold text-white">
                  Growing
                </span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 shadow-lg transition-all hover:bg-gray-800/70">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <Image 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Web3 Integration" 
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">Web3 Integration</h3>
                <p className="mt-2 text-sm text-gray-300">Decentralized applications and blockchain for secure, transparent systems</p>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <span className="rounded-full bg-indigo-600/80 px-2.5 py-0.5 text-xs font-semibold text-white">
                  Rising
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="rounded-xl bg-gradient-to-r from-indigo-900/50 via-indigo-800/50 to-indigo-900/50 p-px">
              <div className="rounded-[calc(0.75rem-1px)] bg-gray-900 px-6 py-4">
                <p className="text-center text-sm md:text-base text-gray-300">
                  Stay updated with the latest digital trends through our expert-led 
                  <Link href="/blog" className="ml-1 font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">
                    blog posts and industry insights
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden">
        <div className="relative bg-gray-900">
          <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <Image
              alt="Team collaboration"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
              width={1920}
              height={1080}
              className="size-full object-cover"
            />
            <svg
              viewBox="0 0 926 676"
              aria-hidden="true"
              className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
            >
              <path
                d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                fillOpacity=".4"
              />
              <defs>
                <linearGradient
                  id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                  x1="926.392"
                  x2="-109.635"
                  y1=".176"
                  y2="321.024"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#776FFF" />
                  <stop offset={1} stopColor="#FF4694" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
              <h2 className="text-base/7 font-semibold text-indigo-400">{t.cta.title}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{t.cta.subtitle}</p>
              <p className="mt-6 text-base/7 text-gray-300">
                {t.cta.description}
              </p>
              <div className="mt-8 flex space-x-4">
                <a
                  href="/contact"
                  className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t.cta.getInTouch}
                </a>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-600 to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-orange-500 hover:to-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  {t.hero.freeConsultation}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
