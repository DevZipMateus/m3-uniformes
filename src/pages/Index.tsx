
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "M3 Uniformes - Uniformes Corporativos de Alta Qualidade | São Luís - MA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'M3 Uniformes - Especialistas em uniformes corporativos, camisas personalizadas e abadás em São Luís - MA. Qualidade superior, conforto e excelência em acabamento.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'M3 Uniformes - Especialistas em uniformes corporativos, camisas personalizadas e abadás em São Luís - MA. Qualidade superior, conforto e excelência em acabamento.';
      document.head.appendChild(meta);
    }

    // Open Graph Meta Tags
    const ogTags = [
      { property: 'og:title', content: 'M3 Uniformes - Uniformes Corporativos de Alta Qualidade' },
      { property: 'og:description', content: 'Especialistas em uniformes corporativos, camisas personalizadas e abadás. Qualidade superior e excelência em acabamento.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/lovable-uploads/1abbca59-8b6c-42cb-bb39-a90b8d0cd420.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'M3 Uniformes - Uniformes Corporativos de Alta Qualidade' },
      { name: 'twitter:description', content: 'Especialistas em uniformes corporativos, camisas personalizadas e abadás. Qualidade superior e excelência em acabamento.' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name);
        }
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
