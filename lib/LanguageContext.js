"use client";

import { createContext, useState, useContext } from 'react';

// Define translations
const translations = {
  en: {
    // Header
    menu: {
      seoMarketing: "SEO and Digital Marketing",
      services: "Services",
      aiSolutions: "AI Solutions",
      company: "Company",
      blogs: "Blogs"
    },
    // Hero section
    hero: {
      announcement: "Just launched: Our AI-powered development services",
      learnMore: "Learn more",
      mainHeading: "Transforming Ideas into Digital Reality",
      subHeading: "We build innovative web and mobile applications, create stunning designs, and implement effective digital marketing strategies to help startups and businesses thrive in the digital world.",
      exploreServices: "Explore Services",
      aboutUs: "About Us",
      freeConsultation: "Free Consultation"
    },
    // Service section
    services: {
      title: "Our Services",
      subtitle: "End-to-End Digital Solutions",
      webDev: "Web Development",
      webDevDesc: "Modern, responsive websites and web applications built with React, Next.js, and Node.js.",
      mobileDev: "Mobile Development",
      mobileDevDesc: "Cross-platform mobile apps with React Native and Flutter for iOS and Android.",
      uiUxDesign: "UI/UX Design",
      uiUxDesignDesc: "User-centered design with intuitive interfaces and engaging experiences.",
      digitalMarketing: "Digital Marketing", 
      digitalMarketingDesc: "Strategic SEO and content marketing to boost online visibility and conversions."
    },
    // Features section
    features: {
      title: "Innovation at Speed",
      subtitle: "Built for Growth",
      description: "We create digital solutions that scale with your business. Our agile approach ensures quick iterations and continuous improvement for maximum impact.",
      feature1: "Cutting-Edge Technology",
      feature1Desc: "We leverage the latest tech stacks including React, Next.js, and cloud-native solutions to build scalable and future-proof digital products.",
      feature2: "Security by Design",
      feature2Desc: "Built-in security practices with modern authentication methods, data encryption, and compliance-ready infrastructure.",
      feature3: "Reliable Performance",
      feature3Desc: "Optimized for speed and reliability with edge computing, CDN integration, and performance monitoring."
    },
    // AI section
    ai: {
      title: "AI-Powered Solutions",
      subtitle: "Transform Your Workflow with AI",
      description: "Harness the power of artificial intelligence to streamline operations, enhance decision-making, and create personalized experiences for your customers.",
      feature1: "Intelligent Virtual Assistants",
      feature1Desc: "Custom AI chatbots that handle customer inquiries 24/7, schedule appointments, and provide personalized recommendations based on user behavior.",
      feature2: "Intelligent Document Processing",
      feature2Desc: "Automated analysis of contracts, invoices, and reports with our RAG-powered systems that extract key insights and action items without manual review.",
      feature3: "Predictive Analytics",
      feature3Desc: "Leverage your business data with AI models that forecast trends, identify opportunities, and recommend optimal strategies for growth and efficiency.",
      learnMore: "Learn more",
      transformTitle: "How AI Transforms Your Business",
      transformDesc: "Our AI solutions are designed to integrate seamlessly with your existing workflows, automating repetitive tasks, enhancing decision-making processes, and providing valuable insights from your data.",
      benefit1: "Reduce operational costs by up to 40%",
      benefit2: "Improve customer satisfaction with personalized experiences",
      benefit3: "Make better decisions with AI-driven insights and recommendations",
      benefit4: "Scale your operations without proportional increase in staffing",
      exploreSolutions: "Explore AI Solutions"
    },
    // Why Us section
    whyUs: {
      title: "Why Choose Us",
      subtitle: "What Sets Us Apart",
      reason1: "Industry Expertise",
      reason1Desc: "Our team brings specialized knowledge across industries including fintech, healthcare, e-commerce, and education.",
      reason2: "Custom Solutions",
      reason2Desc: "We don't believe in one-size-fits-all. Each solution is tailored to your specific business needs and goals.",
      reason3: "Results-Driven Approach",
      reason3Desc: "We measure our success by your business outcomes, focusing on delivering tangible results and ROI.",
      reason4: "Ongoing Support",
      reason4Desc: "Our relationship doesn't end at launch. We provide continuous support and optimization to ensure long-term success."
    },
    // CTA section
    cta: {
      title: "Ready to start your project?",
      subtitle: "Let's build something amazing",
      description: "Whether you're a startup with a bold idea or an established business looking to innovate, our team is ready to turn your vision into reality. Let's discuss your project and create a digital solution that drives results.",
      getInTouch: "Get in touch"
    },
    // Footer is not included as it's not changing content dynamically
    consultation: {
      title: "Request a Free Consultation",
      name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      message: "Your Message",
      submit: "Submit Request",
      required: "Required",
      thanks: "Thank you! We'll contact you soon."
    }
  },
  th: {
    // Header
    menu: {
      seoMarketing: "SEO และการตลาดดิจิทัล",
      services: "บริการ",
      aiSolutions: "โซลูชัน AI",
      company: "บริษัท",
      blogs: "บล็อก"
    },
    // Hero section
    hero: {
      announcement: "เพิ่งเปิดตัว: บริการพัฒนาด้วย AI ของเรา",
      learnMore: "เรียนรู้เพิ่มเติม",
      mainHeading: "แปลงไอเดียให้เป็นความจริงในโลกดิจิทัล",
      subHeading: "เราสร้างเว็บและแอพพลิเคชั่นที่มีนวัตกรรม ออกแบบที่สวยงาม และใช้กลยุทธ์การตลาดดิจิทัลที่มีประสิทธิภาพเพื่อช่วยให้สตาร์ทอัพและธุรกิจเติบโตในโลกดิจิทัล",
      exploreServices: "สำรวจบริการ",
      aboutUs: "เกี่ยวกับเรา",
      freeConsultation: "ปรึกษาฟรี"
    },
    // Service section
    services: {
      title: "บริการของเรา",
      subtitle: "โซลูชันดิจิทัลครบวงจร",
      webDev: "พัฒนาเว็บไซต์",
      webDevDesc: "เว็บไซต์และแอปพลิเคชันเว็บที่ทันสมัย ตอบสนองได้ดี สร้างด้วย React, Next.js และ Node.js",
      mobileDev: "พัฒนาแอปมือถือ",
      mobileDevDesc: "แอปมือถือข้ามแพลตฟอร์มด้วย React Native และ Flutter สำหรับ iOS และ Android",
      uiUxDesign: "ออกแบบ UI/UX",
      uiUxDesignDesc: "การออกแบบที่เน้นผู้ใช้ มีอินเตอร์เฟซที่ใช้งานง่ายและประสบการณ์ที่น่าสนใจ",
      digitalMarketing: "การตลาดดิจิทัล", 
      digitalMarketingDesc: "SEO เชิงกลยุทธ์และการตลาดเนื้อหาเพื่อเพิ่มการมองเห็นออนไลน์และการแปลงผู้เข้าชมเป็นลูกค้า"
    },
    // Features section
    features: {
      title: "นวัตกรรมที่รวดเร็ว",
      subtitle: "สร้างเพื่อการเติบโต",
      description: "เราสร้างโซลูชันดิจิทัลที่ขยายได้ตามธุรกิจของคุณ แนวทางแบบคล่องตัวของเราทำให้มั่นใจได้ถึงการปรับปรุงอย่างรวดเร็วและต่อเนื่องเพื่อผลกระทบสูงสุด",
      feature1: "เทคโนโลยีล้ำสมัย",
      feature1Desc: "เราใช้เทคโนโลยีล่าสุดรวมถึง React, Next.js และโซลูชันคลาวด์เนทีฟเพื่อสร้างผลิตภัณฑ์ดิจิทัลที่ขยายได้และพร้อมรับอนาคต",
      feature2: "ความปลอดภัยโดยการออกแบบ",
      feature2Desc: "ใช้การรักษาความปลอดภัยในตัวพร้อมวิธีตรวจสอบสิทธิ์สมัยใหม่ การเข้ารหัสข้อมูล และโครงสร้างพื้นฐานที่พร้อมปฏิบัติตามกฎระเบียบ",
      feature3: "ประสิทธิภาพที่เชื่อถือได้",
      feature3Desc: "ปรับให้เหมาะสมสำหรับความเร็วและความน่าเชื่อถือด้วยการประมวลผลที่ขอบ การรวม CDN และการตรวจสอบประสิทธิภาพ"
    },
    // AI section
    ai: {
      title: "โซลูชันที่ขับเคลื่อนด้วย AI",
      subtitle: "ปฏิวัติการทำงานของคุณด้วย AI",
      description: "ใช้ประโยชน์จากพลังของปัญญาประดิษฐ์เพื่อปรับปรุงการดำเนินงาน เสริมกระบวนการตัดสินใจ และสร้างประสบการณ์ส่วนบุคคลสำหรับลูกค้าของคุณ",
      feature1: "ผู้ช่วยเสมือนอัจฉริยะ",
      feature1Desc: "แชทบอท AI ที่กำหนดเองที่จัดการกับข้อสงสัยของลูกค้า 24/7 จัดตารางการนัดหมาย และให้คำแนะนำส่วนบุคคลตามพฤติกรรมของผู้ใช้",
      feature2: "การประมวลผลเอกสารอัจฉริยะ",
      feature2Desc: "การวิเคราะห์สัญญา ใบแจ้งหนี้ และรายงานโดยอัตโนมัติด้วยระบบ RAG ของเราที่สกัดข้อมูลเชิงลึกสำคัญและรายการที่ต้องดำเนินการโดยไม่ต้องตรวจสอบด้วยตนเอง",
      feature3: "การวิเคราะห์เชิงคาดการณ์",
      feature3Desc: "ใช้ประโยชน์จากข้อมูลธุรกิจของคุณด้วยโมเดล AI ที่คาดการณ์แนวโน้ม ระบุโอกาส และแนะนำกลยุทธ์ที่เหมาะสมที่สุดสำหรับการเติบโตและประสิทธิภาพ",
      learnMore: "เรียนรู้เพิ่มเติม",
      transformTitle: "AI เปลี่ยนแปลงธุรกิจของคุณอย่างไร",
      transformDesc: "โซลูชัน AI ของเราได้รับการออกแบบให้ผสานรวมกับขั้นตอนการทำงานที่มีอยู่อย่างราบรื่น ทำงานอัตโนมัติซ้ำๆ เสริมกระบวนการตัดสินใจ และให้ข้อมูลเชิงลึกที่มีคุณค่าจากข้อมูลของคุณ",
      benefit1: "ลดต้นทุนการดำเนินงานได้ถึง 40%",
      benefit2: "เพิ่มความพึงพอใจของลูกค้าด้วยประสบการณ์ที่ปรับแต่งเฉพาะบุคคล",
      benefit3: "ตัดสินใจได้ดีขึ้นด้วยข้อมูลเชิงลึกและคำแนะนำจาก AI",
      benefit4: "ขยายการดำเนินงานของคุณโดยไม่ต้องเพิ่มพนักงานตามสัดส่วน",
      exploreSolutions: "สำรวจโซลูชัน AI"
    },
    // Why Us section
    whyUs: {
      title: "ทำไมต้องเลือกเรา",
      subtitle: "สิ่งที่ทำให้เราแตกต่าง",
      reason1: "ความเชี่ยวชาญในอุตสาหกรรม",
      reason1Desc: "ทีมของเรามีความรู้เฉพาะทางในหลายอุตสาหกรรม รวมถึง fintech, สุขภาพ, e-commerce และการศึกษา",
      reason2: "โซลูชันที่ปรับแต่งเฉพาะ",
      reason2Desc: "เราไม่เชื่อในการแก้ปัญหาแบบเดียวที่เหมาะกับทุกคน แต่ละโซลูชันถูกปรับแต่งให้เหมาะกับความต้องการและเป้าหมายทางธุรกิจเฉพาะของคุณ",
      reason3: "แนวทางที่มุ่งเน้นผลลัพธ์",
      reason3Desc: "เราวัดความสำเร็จจากผลลัพธ์ทางธุรกิจของคุณ มุ่งเน้นที่การส่งมอบผลลัพธ์ที่จับต้องได้และ ROI",
      reason4: "การสนับสนุนอย่างต่อเนื่อง",
      reason4Desc: "ความสัมพันธ์ของเราไม่ได้จบที่การเปิดตัว เราให้การสนับสนุนและการปรับปรุงอย่างต่อเนื่องเพื่อให้มั่นใจถึงความสำเร็จในระยะยาว"
    },
    // CTA section
    cta: {
      title: "พร้อมที่จะเริ่มโครงการของคุณหรือยัง?",
      subtitle: "มาสร้างบางสิ่งที่น่าทึ่งไปด้วยกัน",
      description: "ไม่ว่าคุณจะเป็นสตาร์ทอัพที่มีไอเดียที่กล้าหาญหรือธุรกิจที่มั่นคงที่ต้องการนวัตกรรม ทีมของเราพร้อมที่จะเปลี่ยนวิสัยทัศน์ของคุณให้เป็นความจริง มาพูดคุยเกี่ยวกับโครงการของคุณและสร้างโซลูชันดิจิทัลที่ขับเคลื่อนผลลัพธ์กัน",
      getInTouch: "ติดต่อเรา"
    },
    // Footer is not included as it's not changing content dynamically
    consultation: {
      title: "ขอรับคำปรึกษาฟรี",
      name: "ชื่อเต็ม",
      email: "อีเมล",
      phone: "เบอร์โทรศัพท์",
      message: "ข้อความของคุณ",
      submit: "ส่งคำขอ",
      required: "จำเป็น",
      thanks: "ขอบคุณ! เราจะติดต่อกลับเร็วๆ นี้"
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'th' : 'en');
  };
  
  const t = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};