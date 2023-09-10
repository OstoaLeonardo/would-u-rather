export function BottomNav() {
    return (
        <nav className='w-full fixed z-20 bottom-0 right-0 left-0 bg-transparent'>
            <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-6'>
                <div className='flex items-center' />
                <div className='flex md:order-2'>
                    <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white opacity-50'>
                        v1.0.0
                    </span>
                </div>
            </div>
        </nav>
    )
}
