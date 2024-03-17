import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//react icon
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext);
    // console.log(user)
    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
            window.addEventListener('scroll', handleScroll);

            return () => {

                window.addEventListener('scroll', handleScroll);
            }
        }
    }, [])

    //NavItems 
    const NavItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Blog", path: "/blog" },
        { link: "Admin", path: "/admin/dashboard" },

    ]
    return (
        <header className='w-full bg-blue-400 fixed top-0 left-0 right-0 transition-all ease-linear duration-300 z-10'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "static top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/*logo*/}
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block' />Books</Link>
                    {/* nav items for large device*/}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            NavItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-50'>{link}</Link>)
                        }
                    </ul>
                    {/*btn lg devices*/}
                
                    <div className='lg:flex items-center space-x-12 hidden'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-50' /></button>
                        {/* {
                            user ? `${user.email}` : ""
                        } */}
                    </div>
                    {/* menu btn for mode mobile*/}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>{
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}</button>
                    </div>
                </div>
                {/*naviItem for sm device*/}
                <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-500 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        NavItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercas'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar