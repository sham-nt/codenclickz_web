'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import Image from "next/image";

export default function About() {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Header />
            <div className="relative isolate overflow-hidden pt-14">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl py-20 sm:py-32">
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                                About Us
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                                We are a company dedicated to providing the best services for our customers.
                            </p>
                        </div>
                    </div>

                    {/* About Our Company Section */}
                    <div className="mx-auto max-w-4xl py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                                <p className="text-gray-300 mb-4">
                                    CodenClickz is a professional services company operating under Busabok Global Ventures. 
                                    We specialize in developing innovative digital solutions that help businesses thrive 
                                    in today&apos;s competitive market.
                                </p>
                                <p className="text-gray-300">
                                    Our team consists of experienced professionals who are passionate about technology 
                                    and dedicated to delivering high-quality results for our clients.
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                        alt="Office building"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="mx-auto max-w-4xl py-16 border-t border-gray-800">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-gray-400 mb-1">Email:</p>
                                        <p className="text-white font-medium">info@codenclickz.com</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-1">Phone:</p>
                                        <p className="text-white font-medium">099 026 6719</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-1">Address:</p>
                                        <p className="text-white font-medium">
                                            CodenClickz (Busabok Global Ventures)<br />
                                            Linuxx serviced offices 622<br />
                                            Emporium Tower ชั้น 9, 10 และ 21<br />
                                            Sukhumvit Rd, Khwaeng Khlong Tan<br />
                                            Khet Khlong Toei, Bangkok 10110
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="h-80 w-full rounded-lg overflow-hidden">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6454809864405!2d100.56778457586745!3d13.737366997820888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee9dbd0f45f%3A0xcab7c1de9ef06021!2sEmporium%20Tower!5e0!3m2!1sen!2sth!4v1713825658171!5m2!1sen!2sth"
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps - CodenClickz Office Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChatBot />
            <Footer />
        </div>
    );
}