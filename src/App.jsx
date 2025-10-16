import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { useEffect } from 'react';

function App() {

  const location = useLocation()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange(); // Run on initial load
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  return (
    <div className='flex flex-col justify-between vh-100 w-full overflow-auto'>
      <Header />
      <Outlet />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
