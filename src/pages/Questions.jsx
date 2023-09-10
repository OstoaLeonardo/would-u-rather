import { useState, useEffect } from 'react'
import { getDocs, collection, doc, updateDoc, increment } from 'firebase/firestore'
import { motion } from 'framer-motion'
import { db } from '../config/firebase'
import { Option } from '../components/Option'
import { NavbarGame } from '../components/NavbarGame'
import { Background } from '../components/Background'
import loaded from '../assets/sounds/loaded.mp3'
import selected from '../assets/sounds/selected.mp3'

export function Questions() {
    const [question, setQuestion] = useState('Loading...')
    const [questionId, setQuestionId] = useState('')
    const [option1, setOption1] = useState({ text: '', count: 0 })
    const [option2, setOption2] = useState({ text: '', count: 0 })
    const [showPercentage, setShowPercentage] = useState(false)

    // Obtener una pregunta aleatoria y sus opciones de la base de datos
    const fetchQuestion = async () => {
        setShowPercentage(false)
        setOption1({ text: '', count: 0 })
        setOption2({ text: '', count: 0 })

        const questionsCollection = collection(db, 'questions')
        const questionsSnapshot = await getDocs(questionsCollection)
        const questionsList = questionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        const randomIndex = Math.floor(Math.random() * questionsList.length)
        const randomQuestion = questionsList[randomIndex]
        setQuestion(randomQuestion.text)
        setQuestionId(randomQuestion.id)

        const option1Collection = collection(doc(db, 'questions', randomQuestion.id), 'option1')
        const option1Snapshot = await getDocs(option1Collection)
        const option1Data = option1Snapshot.docs[0].data()
        setOption1({ text: option1Data.text, count: option1Data.count })

        // Play audio when question is loaded
        playSound(loaded)

        const option2Collection = collection(doc(db, 'questions', randomQuestion.id), 'option2')
        const option2Snapshot = await getDocs(option2Collection)
        const option2Data = option2Snapshot.docs[0].data()
        setOption2({ text: option2Data.text, count: option2Data.count })
    }

    const handleOptionClick = async (option) => {
        if (!showPercentage) {
            console.log(option)
            const optionCollection = collection(doc(db, 'questions', questionId), option)
            const optionSnapshot = await getDocs(optionCollection)
            const optionData = optionSnapshot.docs[0].ref
            await updateDoc(optionData, { count: increment(1) })

            option === 'option1' ? setOption1({ ...option1, count: option1.count + 1 })
                : setOption2({ ...option2, count: option2.count + 1 })

            setShowPercentage(true)

            // Play audio when option is selected
            playSound(selected)
        } else {
            setShowPercentage(false)
            fetchQuestion()
        }
    }

    const calculatePercentage = (optionCount) => {
        const totalCount = option1.count + option2.count

        if (totalCount === 0) return 0
        return Math.round((optionCount / totalCount) * 100)
    }

    const playSound = (sound) => {
        const audio = new Audio(sound)
        audio.play()
    }

    useEffect(() => {
        fetchQuestion()
    }, [])

    return (
        <>
            <Background />
            <main className='flex h-screen flex-col md:flex-row justify-center place-items-center md:items-start'>
                <NavbarGame fetchQuestion={fetchQuestion} />
                <Option
                    option={option1}
                    handleOptionClick={handleOptionClick}
                    optionId='option1'
                    showPercentage={showPercentage}
                    calculatePercentage={calculatePercentage} />
                <Option
                    option={option2}
                    handleOptionClick={handleOptionClick}
                    optionId='option2'
                    showPercentage={showPercentage}
                    calculatePercentage={calculatePercentage} />
                <motion.div
                    className='absolute bg-white text-slate-950 rounded-3xl xl:mt-10 md:mt-8 p-8 shadow-sm'
                    animate={{ scale: [0, 1] }} >
                    <h4 className='text-2xl xl:text-4xl sm:text-3xl'>{question}</h4>
                </motion.div>
            </main>
        </>
    )
}