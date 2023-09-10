import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Background } from '../components/Background'
import { BottomNav } from '../components/BottomNav'
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'

export function Home() {
    return (
        <>
            <Background />
            <main className='w-screen h-screen flex justify-center place-items-center'>
                <BottomNav />
                <motion.div
                    className='flex flex-col gap-8 place-items-center'
                    animate={{ scale: [0, 1], opacity: [0, 1], transition: { delay: 0.2 } }}>
                    <div className='flex flex-col sm:flex-row place-items-center'>
                        <img
                            src={logo1}
                            alt='Logo1'
                            className='w-fit h-20 xl:h-28' />
                        <img
                            src={logo2}
                            alt='Logo2'
                            className='w-fit h-20 xl:h-28' />
                    </div>
                    <Link
                        to='/game'
                        className='bg-white text-slate-950 text-xl md:text-2xl rounded-2xl py-4 px-20 shadow-lg hover:scale-110 transition-all'>
                        Jugar
                    </Link>
                </motion.div>
            </main>
        </>
    )
}