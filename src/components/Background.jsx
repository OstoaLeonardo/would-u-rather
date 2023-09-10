import '../styles/background.css'

export function Background() {
    return (
        <div className='fixed w-screen h-screen flex flex-col md:flex-row -z-10'>
            <div className='flex flex-1 w-full h-full bg-[#ff475A]' />
            <div className='flex flex-1 w-full h-full bg-[#4c74f9]' />
            <ul className='circles'>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
        </div >
    )
}