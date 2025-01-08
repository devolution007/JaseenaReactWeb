import Arabiyat from '@/assets/images/brands/3.png'
import RueBroca from '@/assets/images/brands/2.png'
import AlWataniah from '@/assets/images/brands/1.png'
import GrandeurPerfume from '@/assets/images/brands/3.png'
import Lattafa from '@/assets/images/brands/5.png'
import Afnan from '@/assets/images/brands/6.png'
import AlHaramain from '@/assets/images/brands/3.png'
import Khadaj from '@/assets/images/brands/2.png'
import zimaya from '@/assets/images/brands/1.png'
import TEAMALARAB from '@/assets/images/brands/5.png'
import UBV from '@/assets/images/brands/6.png'
import Diorinspired from '@/assets/images/brands/3.png'
import Galaxy from '@/assets/images/brands/5.png'

const brands = [Arabiyat, RueBroca, AlWataniah, GrandeurPerfume, Lattafa, Afnan, AlHaramain, Khadaj, Galaxy, zimaya, TEAMALARAB, UBV, Diorinspired]

const Clients = () => {
    return (
        <>
            <section
                className="relative xl:py-24 py-16"
                style={{ height: '700px' }}
            >
                <div className="py-5">
                    <div className="container mx-auto px-4" data-aos="fade-up" data-aos-duration="300">
                        <div className="text-center">
                            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                                OUR BRANDS
                            </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-7 gap-10 mt-14">
                            {(brands || []).map((image, idx) => {
                                return (
                                    <div key={idx} className="flex justify-center">
                                        <img src={image} className="h-8" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients