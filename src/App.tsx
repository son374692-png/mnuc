import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Members from '@/components/Members';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Members />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
