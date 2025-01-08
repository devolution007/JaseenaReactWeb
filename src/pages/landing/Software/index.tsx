import { PricingCards, Testimonial, PricingCards2, FAQs } from '@/components';
import ClientsReview from './ClientsReview';
import Features from './Features';
import Hero from './Hero';
// import { features } from './data';
import Footer from './Footer';


const Software = () => {
    return (
        <div className="text-gray-700">
            <Hero />
            <section className="py-16 sm:py-24">
                <PricingCards />
            </section>
            
            <ClientsReview />
            

            <Features  />

            <Testimonial />
            <section className="py-16 sm:py-24">
                <PricingCards2 />
            </section>
            <section className="py-16 sm:py-24">
                <FAQs />
            </section>

            

            <Footer />
        </div>
    );
};

export default Software;