'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { ChatBot } from '@/components/ChatBot';

const blogPosts = [
    {
        id: 'ai-rag-systems',
        title: 'How RAG Systems Are Transforming Business Knowledge Management',
        description: 'Explore how Retrieval-Augmented Generation systems are helping companies leverage their internal knowledge bases for improved decision-making.',
        date: '2025-04-10',
        category: 'AI',
        image: '/images/RAG.png'
    },
    {
        id: 'seo-strategies-2025',
        title: 'Essential SEO Strategies for 2025',
        description: 'Stay ahead of the competition with these proven SEO techniques that will help your website rank higher in search results this year.',
        date: '2025-03-22',
        category: 'Digital Marketing',
        image: '/images/SEO image.png'
    },
    {
        id: 'modern-web-development',
        title: 'Modern Web Development Trends in 2025',
        description: 'Discover the latest technologies and frameworks that are shaping the future of web development and how you can implement them.',
        date: '2025-03-15',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1679&q=80'
    },
    {
        id: 'ai-chatbot-benefits',
        title: 'How AI Chatbots Are Revolutionizing Customer Service',
        description: 'Learn how businesses are using AI chatbots to improve customer satisfaction while reducing support costs.',
        date: '2025-02-28',
        category: 'AI',
        image: '/images/AI assistant.png'
    },
    {
        id: 'content-marketing-guide',
        title: 'The Ultimate Content Marketing Guide for 2025',
        description: 'Master the art of content marketing with our comprehensive guide covering strategy, creation, distribution, and analytics.',
        date: '2025-02-12',
        category: 'Digital Marketing',
        image: '/images/Content Marketing.png'
    },
    {
        id: 'international-seo',
        title: 'International SEO: Expanding Your Global Footprint',
        description: 'Take your business global with these international SEO best practices to reach audiences in different countries and languages.',
        date: '2025-01-30',
        category: 'SEO',
        image: '/images/International SEO.png'
    }
];

export default function Blog() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col">
            <Header />
            <ChatBot />
            
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden pt-14">
                <div className="absolute inset-0 -z-10">
                    <Image
                        alt="Blog header background"
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                        className="h-full w-full object-cover"
                        fill
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
                </div>
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
                        <div className="mb-8 inline-flex items-center justify-center rounded-full bg-indigo-500/10 px-6 py-2 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                            Insights & Resources
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                                Our Blog
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                                Discover insights, tips, and the latest trends in AI, digital marketing, and web development from our team of experts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <Link href="/blog" className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
                        All
                    </Link>
                    <Link href="/blog/category/ai" className="rounded-full bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors">
                        AI
                    </Link>
                    <Link href="/blog/category/development" className="rounded-full bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors">
                        Development
                    </Link>
                    <Link href="/blog/category/digital-marketing" className="rounded-full bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors">
                        Digital Marketing
                    </Link>
                    <Link href="/blog/category/seo" className="rounded-full bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors">
                        SEO
                    </Link>
                </div>
                
                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {blogPosts.map((post) => (
                        <article 
                            key={post.id} 
                            className="flex flex-col bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/30 hover:border-indigo-500/30 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
                        >
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover"
                                    fill
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                                <Link
                                    href={`/blog/category/${post.category.toLowerCase().replace(' ', '-')}`}
                                    className="absolute top-4 right-4 z-10 rounded-full bg-gray-900/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-indigo-300 hover:bg-indigo-900/50 transition-colors"
                                >
                                    {post.category}
                                </Link>
                            </div>
                            <div className="flex flex-col flex-grow p-6">
                                <time dateTime={post.date} className="text-xs text-gray-400 mb-3">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                <h3 className="text-xl font-semibold leading-tight text-white group-hover:text-gray-300 mb-3">
                                    <Link href={`/blog/${post.id}`} className="hover:text-indigo-400 transition-colors">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-300 flex-grow">
                                    {post.description}
                                </p>
                                <div className="mt-6">
                                    <Link 
                                        href={`/blog/${post.id}`}
                                        className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center"
                                    >
                                        Read article
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                
                {/* Pagination */}
                <div className="mt-16 flex items-center justify-between">
                    <button
                        type="button"
                        className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 disabled:opacity-50"
                        disabled
                    >
                        Previous
                    </button>
                    <span className="text-sm text-gray-400">Page 1 of 1</span>
                    <button
                        type="button"
                        className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 disabled:opacity-50"
                        disabled
                    >
                        Next
                    </button>
                </div>
                
                {/* Newsletter Signup */}
                <div className="mt-24 rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 p-8 md:p-12">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Subscribe to our newsletter</h2>
                        <p className="mt-4 text-gray-300">
                            Get the latest insights and trends delivered straight to your inbox. No spam, just valuable content.
                        </p>
                        <form className="mt-6 flex flex-col sm:flex-row sm:gap-2">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 appearance-none rounded-lg border-0 bg-gray-800 px-4 py-3 text-base text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:flex-1"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="mt-3 sm:mt-0 rounded-lg bg-indigo-600 px-4 py-3 text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}