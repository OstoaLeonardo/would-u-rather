import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function NavbarGame({ fetchQuestion }) {
    return (
        <nav className='w-full fixed z-20 top-0 right-0 left-0 bg-transparent'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6'>
                <Link to='/' className='flex items-center hover:scale-125 transition-all'>
                    <FontAwesomeIcon
                        className='text-slate-50 text-lg mr-3'
                        icon={faArrowLeft}
                    />
                    <span className='self-center text-2xl text-slate-50 font-semibold whitespace-nowrap'>
                        Home
                    </span>
                </Link>
                <div className='flex md:order-2'>
                    <button
                        type='button'
                        onClick={() => fetchQuestion()}
                        className='bg-slate-50 text-slate-950 font-medium rounded-lg text-sm px-4 py-2 text-center hover:scale-125 transition-all'>
                        Siguiente
                    </button>
                </div>
                <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-cta'>
                    <span className='self-center text-3xl font-semibold whitespace-nowrap dark:text-white'>

                    </span>
                </div>
            </div>
        </nav>
    )
}
