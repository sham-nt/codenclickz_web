"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ChatBot } from "@/components/ChatBot";
import Link from "next/link";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const services = [
  {
    title: "Web Development",
    description:
      "Modern web solutions using React, Next.js, and Node.js. From landing pages to complex web applications with responsive design.",
    icon: "🌐",
    href: "/services/development-services",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80",
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps for iOS and Android built with React Native and Flutter. Native-like performance with shared codebase.",
    icon: "📱",
    href: "/services/development-services",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive interfaces with engaging visuals and seamless user experiences.",
    icon: "🎨",
    href: "/services/design-services",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic SEO, content marketing, and social media campaigns that drive targeted traffic and increase conversions.",
    icon: "📈",
    href: "/services/digital-marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab7fe551c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2831&q=80",
  },
];

const features = [
  {
    name: "Cutting-Edge Technology",
    description:
      "We leverage the latest tech stacks including React, Next.js, and cloud-native solutions to build scalable and future-proof digital products.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Security by Design",
    description:
      "Built-in security practices with modern authentication methods, data encryption, and compliance-ready infrastructure.",
    icon: LockClosedIcon,
  },
  {
    name: "Reliable Performance",
    description:
      "Optimized for speed and reliability with edge computing, CDN integration, and performance monitoring.",
    icon: ServerIcon,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br" style={{ background: 'linear-gradient(to bottom right, rgb(19,24,38), black, rgb(19,24,38))' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(19,24,38,0.8), black, rgb(19,24,38))' }}></div>
      <Header />
      <ChatBot />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-transparent"></div>
        </div>
        <img
          alt="Tech team collaborating"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Just launched: Our AI-powered development services.{" "}
                <a href="/services/ai" className="font-semibold text-white">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Transforming Ideas into Digital Reality
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                We build innovative web and mobile applications, create stunning designs, and implement effective digital marketing strategies to help startups and businesses thrive in the digital world.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/services/development-services"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Explore Services
                </a>
                <a href="/about" className="text-sm/6 font-semibold text-white">
                  About Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
              Our Services
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              End-to-End Digital Solutions
            </p>
            <div className="mt-10 grid gap-3 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              {/* Web Development - Large Card */}
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      Web Development
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                      Modern, responsive websites and web applications built with React, Next.js, and Node.js.
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
                      Mobile Development
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                      Cross-platform mobile apps with React Native and Flutter for iOS and Android.
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
                      UI/UX Design
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                      User-centered design with intuitive interfaces and engaging experiences.
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
                      Digital Marketing
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                      Strategic SEO and content marketing to boost online visibility and conversions.
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

      {/* Feature Section */}
      <section className="relative w-full border-t border-orange-900/10">
        <div className="mx-auto max-w-[95%] px-4 py-24 sm:py-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-orange-400">
                  Innovation at Speed
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Built for Growth
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  We create digital solutions that scale with your business. Our agile approach ensures quick iterations and continuous improvement for maximum impact.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-orange-500"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072"
              alt="Modern development workspace"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
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
            AI-Powered Solutions
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Transform Your Workflow with AI
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
            Harness the power of artificial intelligence to streamline operations, enhance decision-making, and create personalized experiences for your customers.
          </p>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* AI Feature 1 */}
            <div className="rounded-xl bg-gray-800/50 p-8 shadow-lg ring-1 ring-white/10 transition-all hover:bg-gray-800/70 hover:shadow-purple-500/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <Image src="/images/AI assistant.png" width={32} height={32} alt="AI Chatbots" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Intelligent Virtual Assistants</h3>
              <p className="mt-4 text-gray-300">
                Custom AI chatbots that handle customer inquiries 24/7, schedule appointments, and provide personalized recommendations based on user behavior.
              </p>
              <div className="mt-6 flex items-center gap-x-3">
                <div className="h-px flex-1 bg-gray-700" />
                <Link href="/services/ai" className="text-sm font-medium text-purple-400 hover:text-purple-300">Learn more</Link>
              </div>
            </div>

            {/* AI Feature 2 */}
            <div className="rounded-xl bg-gray-800/50 p-8 shadow-lg ring-1 ring-white/10 transition-all hover:bg-gray-800/70 hover:shadow-purple-500/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <Image src="/images/RAG.png" width={32} height={32} alt="Document Processing" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Intelligent Document Processing</h3>
              <p className="mt-4 text-gray-300">
                Automated analysis of contracts, invoices, and reports with our RAG-powered systems that extract key insights and action items without manual review.
              </p>
              <div className="mt-6 flex items-center gap-x-3">
                <div className="h-px flex-1 bg-gray-700" />
                <Link href="/services/ai" className="text-sm font-medium text-purple-400 hover:text-purple-300">Learn more</Link>
              </div>
            </div>

            {/* AI Feature 3 */}
            <div className="rounded-xl bg-gray-800/50 p-8 shadow-lg ring-1 ring-white/10 transition-all hover:bg-gray-800/70 hover:shadow-purple-500/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-purple-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Predictive Analytics</h3>
              <p className="mt-4 text-gray-300">
                Leverage your business data with AI models that forecast trends, identify opportunities, and recommend optimal strategies for growth and efficiency.
              </p>
              <div className="mt-6 flex items-center gap-x-3">
                <div className="h-px flex-1 bg-gray-700" />
                <Link href="/services/ai" className="text-sm font-medium text-purple-400 hover:text-purple-300">Learn more</Link>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 ring-1 ring-purple-500/20 lg:p-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">How AI Transforms Your Business</h3>
                <p className="mt-4 text-gray-300">
                  Our AI solutions are designed to integrate seamlessly with your existing workflows, automating repetitive tasks, enhancing decision-making processes, and providing valuable insights from your data.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-purple-400">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Reduce operational costs by up to 40%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-purple-400">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Improve customer satisfaction with personalized experiences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-purple-400">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Make better decisions with AI-driven insights and recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-purple-400">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Scale your operations without proportional increase in staffing</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link 
                    href="/services/ai" 
                    className="inline-flex items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  >
                    Explore AI Solutions
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

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden">
        <div className="relative bg-gray-900">
          <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
              alt="Team collaboration"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
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
              <h2 className="text-base/7 font-semibold text-indigo-400">Ready to start your project?</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let&apos;s build something amazing</p>
              <p className="mt-6 text-base/7 text-gray-300">
                Whether you&apos;re a startup with a bold idea or an established business looking to innovate, our team is ready to turn your vision into reality. Let&apos;s discuss your project and create a digital solution that drives results.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
