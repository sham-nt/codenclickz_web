'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  CameraIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PencilSquareIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  MapPinIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathRoundedSquareIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const marketing_services = [
  {
    name: 'SEO and SEO Audit',
    description: 'Optimize your website and audit its performance to rank higher on search engines.',
    href: '/services/digital-marketing',
    icon: ChartPieIcon,
  },
  {
    name: 'International SEO',
    description: 'Expand your reach globally with tailored SEO strategies for international markets.',
    href: '/services/digital-marketing',
    icon: GlobeAltIcon,
  },
  {
    name: 'Content Marketing',
    description: 'Create and distribute valuable content to attract and engage your target audience.',
    href: '/services/digital-marketing',
    icon: DocumentTextIcon,
  },
  {
    name: 'Google Advertising',
    description: 'Boost your visibility and drive targeted traffic with Google Ads campaigns.',
    href: '/services/digital-marketing',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Social Media Marketing',
    description: 'Engage audiences across Facebook, Instagram, TikTok, and other platforms.',
    href: '/services/digital-marketing',
    icon: ChatBubbleLeftRightIcon,
  },
]

const services = [
  {
    name: 'Website Development',
    description: 'Build responsive, modern websites with cutting-edge technologies.',
    href: '/services/development-services',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'ERP Solutions',
    description: 'Custom enterprise resource planning systems for business optimization.',
    href: '/services/development-services',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Cybersecurity',
    description: 'Protect your digital assets with advanced security solutions.',
    href: '/services/development-services',
    icon: ShieldCheckIcon,
  },
]

const ai_solutions = [
  {
    name: 'RAG Systems',
    description: 'Implement Retrieval-Augmented Generation for intelligent document processing.',
    href: '/services/ai',
    icon: CpuChipIcon,
  },
  {
    name: 'AI Chatbot Integration',
    description: 'Deploy smart conversational AI solutions for customer service.',
    href: '/services/ai',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'AI Workflow Setup',
    description: 'Automate business processes with AI-powered workflow solutions.',
    href: '/services/ai',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions for your specific needs.',
    href: '/services/ai',
    icon: CommandLineIcon,
  },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">CodenClickz</span>
            <img
              alt="CodenClickz Logo"
              src="/logo.png"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">CodenClickz</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:justify-end">
          {/* Marketing Services */}
          <Popover>
            {({ open }) => (
              <>
                <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-semibold ${open ? 'text-orange-500' : 'text-gray-200'}`}>
                  SEO and Digital Marketing
                  <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'text-orange-500' : 'text-gray-400'}`} />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-0 -z-10 bg-gray-800 pt-14 shadow-lg ring-1 ring-gray-700 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {marketing_services.map((item) => (
                      <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-700">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                          <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-orange-500" />
                        </div>
                        <a href={item.href} className="mt-6 block font-semibold text-gray-200">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-700">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="grid grid-cols-3 divide-x divide-gray-600 border-x border-gray-600">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-200 hover:bg-gray-600"
                          >
                            <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* Services */}
          <Popover>
            {({ open }) => (
              <>
                <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-semibold ${open ? 'text-orange-500' : 'text-gray-200'}`}>
                  Services
                  <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'text-orange-500' : 'text-gray-400'}`} />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-0 -z-10 bg-gray-800 pt-14 shadow-lg ring-1 ring-gray-700 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {services.map((item) => (
                      <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-700">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                          <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-orange-500" />
                        </div>
                        <a href={item.href} className="mt-6 block font-semibold text-gray-200">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-700">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="grid grid-cols-3 divide-x divide-gray-600 border-x border-gray-600">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-200 hover:bg-gray-600"
                          >
                            <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* AI Solutions */}
          <Popover>
            {({ open }) => (
              <>
                <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-semibold ${open ? 'text-orange-500' : 'text-gray-200'}`}>
                  AI Solutions
                  <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'text-orange-500' : 'text-gray-400'}`} />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-0 -z-10 bg-gray-800 pt-14 shadow-lg ring-1 ring-gray-700 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {ai_solutions.map((item) => (
                      <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-700">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                          <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-orange-500" />
                        </div>
                        <a href={item.href} className="mt-6 block font-semibold text-gray-200">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-700">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="grid grid-cols-3 divide-x divide-gray-600 border-x border-gray-600">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-200 hover:bg-gray-600"
                          >
                            <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* Company */}
          <Popover>
            {({ open }) => (
              <>
                <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-semibold ${open ? 'text-orange-500' : 'text-gray-200'}`}>
                  Company
                  <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'text-orange-500' : 'text-gray-400'}`} />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-0 -z-10 bg-gray-800 pt-14 shadow-lg ring-1 ring-gray-700 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {[
                      { name: 'About Us', description: 'Learn more about our company.', icon: InformationCircleIcon, href: '/about' },
                      { name: 'Careers', description: 'Join our team and grow with us.', icon: BriefcaseIcon, href: '#' },
                      { name: 'Office Locations', description: 'Find our offices worldwide.', icon: MapPinIcon, href: '/about' },
                      { name: 'Customer Stories', description: 'See how we’ve helped others.', icon: UserGroupIcon, href: '#' },
                      { name: 'Leadership', description: 'Meet our leadership team.', icon: AcademicCapIcon, href: '/about' },
                    ].map((item) => (
                      <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-700">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                          <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-orange-500" />
                        </div>
                        <a href={item.href} className="mt-6 block font-semibold text-gray-200">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-700">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="grid grid-cols-3 divide-x divide-gray-600 border-x border-gray-600">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-200 hover:bg-gray-600"
                          >
                            <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* Blogs */}
          <a href="/blog" className="text-sm/6 font-semibold text-white hover:text-orange-500">
            Blogs
          </a>
        </PopoverGroup>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <span className="sr-only">CodenClickz</span>
              <img
                alt="CodenClickz Logo"
                src="/logo.png"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">CodenClickz</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                        SEO and Digital Marketing
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {marketing_services.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-200 hover:bg-gray-700"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                        Services
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {services.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-200 hover:bg-gray-700"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                        AI Solutions
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {ai_solutions.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-200 hover:bg-gray-700"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                        Company
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[
                          { name: 'About Us', href: '/about' },
                          { name: 'Careers', href: '#' },
                          { name: 'Office Locations', href: '#' },
                          { name: 'Customer Stories', href: '#' },
                          { name: 'Leadership', href: '#' },
                        ].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-200 hover:bg-gray-700"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700"
                >
                  Blogs
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Desktop Popover Content - Update focus and hover styles */}
      <style jsx global>{`
        .headlessui-popover-button:focus {
          outline: none !important;
        }
        .headlessui-popover-button:focus-visible {
          outline: none !important;
          color: #f97316 !important; /* Orange-500 */
        }
        .headlessui-popover-button:hover {
          color: #f97316 !important;
        }
      `}</style>
    </header>
  )
}
