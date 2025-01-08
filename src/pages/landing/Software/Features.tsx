import RamezOnline from '@/assets/images/brands/5.png'
import Carrefour from '@/assets/images/brands/5.png'
import Lulu from '@/assets/images/brands/5.png'
import Danube from '@/assets/images/brands/5.png'
import Nahdi from '@/assets/images/brands/5.png'
import AlMeera from '@/assets/images/brands/5.png'
import GoldenScent from '@/assets/images/brands/5.png'
import Noon from '@/assets/images/brands/5.png'
import LandmarkGroup from '@/assets/images/brands/5.png'
import Nesto from '@/assets/images/brands/5.png'
import BinDawood from '@/assets/images/brands/5.png'

const brands = [RamezOnline, Carrefour, Lulu, Danube, Nahdi, AlMeera, GoldenScent, Noon, LandmarkGroup, Nesto, BinDawood]

const Clients = () => {
    return (
        <>
            <section
                className="relative xl:py-24 py-16"
                style={{ height: '800px' }}
            >
                <div className="py-5">
                    <div className="container mx-auto px-4" data-aos="fade-up" data-aos-duration="300">
                        <div className="text-center">
                            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                                OUR BRANDS
                            </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">
                            {(brands.slice(0, 4) || []).map((image, idx) => {
                                return (
                                    <div key={idx} className="flex justify-center">
                                        <img src={image} className="h-36" style={{ height: '50px' }} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">
                            {(brands.slice(4, 8) || []).map((image, idx) => {
                                return (
                                    <div key={idx} className="flex justify-center">
                                        <img src={image} className="h-36" style={{ height: '50px' }} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">
                            {(brands.slice(8) || []).map((image, idx) => {
                                return (
                                    <div key={idx} className="flex justify-center">
                                        <img src={image} className="h-36" style={{ height: '50px' }} />
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