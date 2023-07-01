import { useEffect, useRef, useState } from 'react';
import skill from './skills.module.css'
import html from '/img/icon/html.png'
import css from '/img/icon/css.png'
import js from '/img/icon/js.png'
import react from '/img/icon/react.png'
import tailwind from '/img/icon/tailwind.png'
import bootstrap from '/img/icon/bootstrap.png'
import nodejs from '/img/icon/nodejs.png'
import express from '/img/icon/express.png'
import firebase from '/img/icon/firebase.png'
import mongodb from '/img/icon/mongo.png'
import { motion } from "framer-motion"
const Skills = () => {
    const ref = useRef(null)
    const [onscreen, setOnscreen] = useState(false)
    let go = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324]
    // html,css,tailwind,bootstrap,js, react,nodejs,express,fiebase,mongodb
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entrie => {
                if (entrie.intersectionRatio > .3) {
                    setOnscreen(true)
                    console.log('ola')
                }
            })
        },
            { threshold: [.2, .3, .4, .5, .6, .7, .8, .8, 1] }
        );
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])
    return (
        <motion.div
            animate={{ rotate: onscreen ? 36 : 0 }}
            transition={{ duration: 2 }}
            viewport={{ root: ref }}
            ref={ref} className={`h-[100vw] md:h-96 mt-14 md:mt-10 overflow-hidden flex items-center justify-center `}>



            <motion.div
                animate={{ rotate: onscreen ? 0 : 0 }}
                transition={{ duration: 1 }}
                viewport={{ root: ref }}
                className={`z-50 h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center flex}`}>
                <motion.div className={`max-h-[90px] w-16 rotate-[-35deg]   top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={css} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold text-xs sm:text-sm'>css</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[1] : 0 }}
                transition={{ duration: 1 }}
                viewport={{ root: ref }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16  rotate-[-70deg]  top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={js} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-sm'>javascript</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[2] : 0 }}
                transition={{ duration: 1 }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16  rotate-[-105deg]  top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={tailwind} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-sm'>tailwind</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[3] : 0 }}
                transition={{ duration: 1 }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16  rotate-[-145deg]  top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={bootstrap} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-sm'>bootstrap</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[4] : 0 }}
                transition={{ duration: 1 }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16 rotate-[180deg]   top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={react} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-sm'>react</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[5] : 0 }}
                transition={{ duration: 1 }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16  rotate-[145deg]  top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={nodejs} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-smm'>nodejs</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[6] : 0 }}
                transition={{ duration: 1 }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16  rotate-[105deg]  top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={express} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-sm'>express</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[7] : 0 }}
                transition={{ duration: 1 }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16  rotate-[70deg]  top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={firebase} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-sm'>firebase</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[8] : 0 }}
                transition={{ duration: 1 }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16  rotate-[35deg]  top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={mongodb} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-sm'>mongo db</p></motion.div>
            </motion.div>
            <motion.div
                animate={{ rotate: onscreen ? go[9] : 0 }}
                transition={{ duration: 1 }}
                className={` h-[100vw] w-full md:h-96 md:w-96 mx-auto rounded-full absolute  justify-center ${!onscreen ? 'hidden' : 'flex'}`}>
                <motion.div className={`max-h-[90px] w-16    top-0 mx-auto flex items-center rounded-md flex-col `}><img draggable={false} src={html} alt="" className='h-8 w-8 sm:h-12 sm:w-12' />
                    <p className='text-center uppercase font-semibold  text-xs sm:text-sm'>Html</p></motion.div>
            </motion.div>
            {/* skill section */}
            <motion.div className={`rounded-full sm:h-24 sm:w-24 h-14 w-14 duration-900 bg-indigo-200 flex items-center justify-center`}>
                <motion.div

                    animate={{ rotate: onscreen ? -36 : 0 }}
                    transition={{ duration: 1, delay: .5 }}
                    viewport={{ root: ref }}
                    className='capitalize text-base sm:text-xl font-semibold bg-indigo-500 text-white rounded-full h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center'>skills</motion.div>

            </motion.div>
        </motion.div >
    );
};

export default Skills;