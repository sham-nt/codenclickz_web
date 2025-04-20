'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChatBot } from '@/components/ChatBot';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CpuChipIcon, 
  ChatBubbleBottomCenterTextIcon, 
  ArrowPathRoundedSquareIcon,
  CommandLineIcon,
  LightBulbIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br" style={{ background: 'linear-gradient(to bottom right, rgb(30,41,59), black, rgb(30,41,59))' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(30,41,59,0.8), black, rgb(30,41,59))' }}></div>
      <Header />
      <ChatBot />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-transparent"></div>
        </div>
        <img
          alt="AI Solutions Background"
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-12 pb-8 text-center">
            <div className="mb-12 inline-flex items-center justify-center rounded-full bg-indigo-500/10 px-6 py-2 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
              Cutting-Edge AI Solutions
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
              Transform Your Business with AI
            </h1>
            <p className="mt-8 text-lg text-gray-300 sm:text-xl">
              Smart, scalable AI solutions designed to enhance efficiency, increase productivity, and drive innovation.
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="rounded-lg border border-indigo-500/20 bg-black/30 p-5">
                <div className="text-indigo-400 text-xl font-semibold mb-2">Enhanced Automation</div>
                <p className="text-gray-300">Streamline operations with intelligent systems that handle repetitive tasks</p>
              </div>
              <div className="rounded-lg border border-indigo-500/20 bg-black/30 p-5">
                <div className="text-indigo-400 text-xl font-semibold mb-2">Data-Driven Insights</div>
                <p className="text-gray-300">Uncover hidden patterns and actionable intelligence from your data</p>
              </div>
              <div className="rounded-lg border border-indigo-500/20 bg-black/30 p-5">
                <div className="text-indigo-400 text-xl font-semibold mb-2">Competitive Edge</div>
                <p className="text-gray-300">Stay ahead with AI-powered solutions tailored to your industry</p>
              </div>
            </div>
            
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="#contact" 
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Schedule a Demo
              </Link>
              <Link 
                href="#rag-systems" 
                className="text-base font-semibold leading-6 text-white hover:text-indigo-400"
              >
                Explore Solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="py-10 md:py-16"></div>

      {/* Services Section Wrapper */}
      <div id="services" className="relative">
        {/* RAG Systems Section */}
        <section id="rag-systems" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <CpuChipIcon className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">RAG Systems</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg text-gray-300">
                  Our Retrieval-Augmented Generation (RAG) systems enhance AI responses with real-time access to your organization&apos;s data, providing accurate and contextually relevant information.
                </p>
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">RAG System Benefits:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Connect AI models to your proprietary knowledge bases and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Reduce hallucinations with factual grounding from verified sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Seamless integration with existing document management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Secure handling of sensitive information with advanced access controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Real-time updates to ensure information accuracy and relevance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Multi-format support for documents, images, and structured data</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800 p-2">
                <Image 
                  src="/images/RAG.png"
                  alt="RAG System Architecture"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Chatbot Integration Section */}
        <section id="ai-chatbot" className="relative border-t border-gray-800 bg-gray-900/30 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">AI Chatbot Integration</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg bg-gray-800 p-2">
                <Image 
                  src="/images/AI assistant.png"
                  alt="AI Chatbot Integration"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="mb-6 text-lg text-gray-300">
                  Transform customer interactions and support with our intelligent chatbot solutions. Leverage the power of conversational AI to engage users effectively while reducing operational costs.
                </p>
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Chatbot Capabilities:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Natural language understanding for human-like conversations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Multi-channel deployment across websites, mobile apps, and messaging platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Personalized customer experiences based on user history and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Seamless handoff to human agents for complex queries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Continuous learning from interactions to improve responses over time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Analytics dashboard to track performance and user satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Workflow Setup */}
        <section id="ai-workflow" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <ArrowPathRoundedSquareIcon className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">AI Workflow Setup</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg text-gray-300">
                  Streamline your operations with intelligent workflow automation. Our AI-powered solutions identify bottlenecks, automate repetitive tasks, and optimize processes across your organization.
                </p>
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Our Workflow Solutions:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Intelligent document processing and data extraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Predictive task assignment and resource allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Anomaly detection and risk assessment in workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Integration with existing enterprise systems (CRM, ERP, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Custom approval workflows with AI-powered recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Process mining for continuous workflow improvement</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800 p-2">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI Workflow Automation"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Custom AI Solutions Section */}
        <section id="custom-ai" className="relative border-t border-gray-800 bg-gray-900/30 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <CommandLineIcon className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Custom AI Solutions</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg bg-gray-800 p-2">
                <Image 
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80"
                  alt="Custom AI Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="mb-6 text-lg text-gray-300">
                  When off-the-shelf AI solutions aren&apos;t enough, our team develops custom AI systems tailored to your specific business challenges and opportunities.
                </p>
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Our Custom AI Development Process:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Comprehensive needs assessment and problem definition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Data strategy development and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Custom model architecture design and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Rigorous testing and validation protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Seamless deployment and integration with existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Ongoing monitoring, maintenance, and model refinement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Knowledge transfer and team training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Ethics & Governance Section */}
        <section id="ai-ethics" className="relative border-t border-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <BeakerIcon className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">AI Ethics & Governance</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-6 text-lg text-gray-300">
                  Ensure your AI implementations are responsible, transparent, and aligned with best practices in ethics and governance. We help you navigate the complex landscape of AI regulations and standards.
                </p>
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Our Ethical AI Framework:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Bias detection and mitigation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Transparency and explainability solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Privacy-preserving AI techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Compliance with regional and industry regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Ethical impact assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Responsible AI policy development</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800 p-2">
                <Image 
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="AI Ethics and Governance"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your business with AI?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Schedule a consultation with our AI experts to discover the right solutions for your needs.
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
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Schedule Demo
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