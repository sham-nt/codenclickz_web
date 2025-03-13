"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Laptop,
  LayoutGrid,
  MessageSquare,
  Smartphone,
  Clock,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white">
      <div className="stars-container fixed inset-0 z-0 pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/30 backdrop-blur-lg supports-[backdrop-filter]:bg-black/20">
        <div className="container mx-auto flex h-16 items-center">
          <div className="flex items-center gap-2 mr-auto">
            <LayoutGrid className="h-6 w-6 text-white" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              CodeNClickz
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 ml-10">
            <Link href="#coming-soon" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Coming Soon
            </Link>
            <Link href="#services" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="ml-auto md:ml-0">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-primary/90 to-purple-500/90 hover:from-primary hover:to-purple-600 border-0">
              Get Early Access
            </Button>
            <Button variant="outline" size="icon" className="md:hidden border-white/20 bg-black/20 hover:bg-black/40">
              <LayoutGrid className="h-5 w-5 text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Coming Soon Section */}
        <section id="coming-soon" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Coming Soon
              </h2>
              <p className="max-w-[700px] text-xl text-white/80">
                We&apos;re working hard to bring you an amazing digital experience. Our full website is launching soon. Join
                our waitlist to be the first to know!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pr-32 bg-white/10 border-white/20 text-white placeholder:text-white/50 min-w-[300px]"
                  />
                  <Button className="absolute right-0 top-0 h-full rounded-l-none">Notify Me</Button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">12</div>
                  <div className="text-sm text-white/70">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">06</div>
                  <div className="text-sm text-white/70">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24</div>
                  <div className="text-sm text-white/70">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">33</div>
                  <div className="text-sm text-white/70">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Changed grid layout to be more fluid */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover-glow">
                    Transforming Ideas into Digital Reality
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    We build cutting-edge tech solutions that help businesses thrive in the digital age. Join our
                    waitlist to be among the first to experience our services.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-primary/90 to-purple-500/90 hover:from-primary hover:to-purple-600 px-8 text-sm font-medium text-white shadow transition-colors border-0">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 bg-black/10 hover:bg-black/30 text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                        <Code2 className="h-12 w-12 text-white" />
                      </div>
                      <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                        <Database className="h-12 w-12 text-white" />
                      </div>
                      <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                        <Globe className="h-12 w-12 text-white" />
                      </div>
                      <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                        <Smartphone className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-800/80 to-black/80 relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Tech Solutions</h2>
                <p className="max-w-[900px] text-white/80 md:text-xl">
                  We offer a wide range of services to help your business succeed in the digital landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:bg-white/15">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-center text-white/80">
                  Custom websites and web applications built with the latest technologies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:bg-white/15">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Mobile Apps</h3>
                <p className="text-center text-white/80">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:bg-white/15">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Cloud Solutions</h3>
                <p className="text-center text-white/80">Scalable cloud infrastructure and migration services.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:bg-white/15">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Laptop className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">IT Consulting</h3>
                <p className="text-center text-white/80">Strategic technology planning and implementation guidance.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:bg-white/15">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Custom Software</h3>
                <p className="text-center text-white/80">
                  Tailored software solutions designed for your specific business needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md hover:bg-white/15">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">24/7 Support</h3>
                <p className="text-center text-white/80">Round-the-clock technical support and maintenance services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black/80 to-gray-800/80 relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  We&apos;re Different from the Rest
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  At CodeNClickz, we combine technical expertise with a deep understanding of business needs to deliver
                  solutions that drive real results.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span>Expert team with 10+ years of industry experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span>Tailored solutions designed for your specific needs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span>Transparent communication throughout the process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span>Ongoing support and maintenance after delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span>Competitive pricing with flexible payment options</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative h-[400px] w-[400px] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
                      <p className="text-white/80">
                        Join our early access program and be the first to experience our innovative solutions.
                      </p>
                      <Button className="w-full">Get Early Access</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black/80 to-gray-800/80 relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40"></div>
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 relative z-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                Fill out the form below and one of our experts will get in touch with you to discuss your project.
              </p>
              <div className="mt-4 flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-white"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-white"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-sm">info@codenclickz.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none">
                      First name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <Input id="email" placeholder="john.doe@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium leading-none">
                    Company
                  </label>
                  <Input id="company" placeholder="Your company" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project" className="min-h-[120px]" />
                </div>
                <Button className="w-full">Submit</Button>
              </div>
              <p className="text-xs text-white/70 text-center">
                By submitting this form, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/70 backdrop-blur-sm py-6 md:py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <LayoutGrid className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">CodeNClickz</span>
            </div>
            <p className="text-center text-sm text-white/70 md:text-left">
              Transforming ideas into digital reality since 2023.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.22.66-.48v-1.7c-2.67.6-3.23-1.13-3.23-1.13-.44-1.1-1.08-1.4-1.08-1.4-.88-.6.07-.6.07-.6.97.07 1.48 1 1.48 1 .87 1.52 2.27 1.07 2.83.82.08-.65.35-1.09.63-1.34-2.13-.25-4.37-1.07-4.37-4.76 0-1.05.37-1.93 1-2.6-.1-.25-.43-1.25.1-2.6 0 0 .83-.26 2.7 1a9.4 9.4 0 0 1 5 0c1.87-1.26 2.7-1 2.7-1 .53 1.35.2 2.35.1 2.6.63.67 1 1.55 1 2.6 0 3.7-2.25 4.5-4.4 4.75.36.3.67.9.67 1.8v2.67c0 .26.16.57.67.48A10 10 0 0 0 12 2z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
            <p className="text-center text-sm text-white/70 md:text-right">
              &copy; {new Date().getFullYear()} CodeNClickz. All rights reserved.
            </p>
          </div>
          </div>
        </footer>
      </div>
  )
}
