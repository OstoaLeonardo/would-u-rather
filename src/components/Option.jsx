import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const animVariants = {
    visible: { scale: [0, 1], translateY: 0 },
    percentage: { scale: 1, translateY: -5 },
}

export function Option({ option, optionId, handleOptionClick, showPercentage, calculatePercentage }) {
    const controls = useAnimation()

    useEffect(() => {
        if (!showPercentage) controls.start('visible')
        else controls.start('percentage')
    }, [showPercentage, option.text, controls])

    return (
        <div className={`flex xl:flex-1 w-full h-full justify-center items-center text-center bg-transparent cursor-pointer`}
            onClick={() => handleOptionClick(optionId)}>
            <div className='flex flex-col gap-3 md:gap-10 px-10 md:px-20'>
                <motion.h3
                    className='text-3xl md:text-4xl text-slate-50'
                    variants={animVariants}
                    animate={controls}>
                    {option.text}
                </motion.h3>
                {showPercentage && (
                    <motion.h3
                        className='text-7xl text-slate-200 opacity-80'
                        animate='visible'>
                        {calculatePercentage(option.count)}%
                    </motion.h3>
                )}
            </div>
        </div>
    )
}