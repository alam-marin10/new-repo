import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'

import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';

function Navbar() {

  
  const user = JSON.parse(localStorage.getItem('user'))
  //console.log(user.user.email);

  const logout = () =>{
    localStorage.clear('user');
    window.location.href ='/login'
  }

  const context = useContext(MyContext);
  const {mode, toggleMode}= context;



  return (
    <>
    <header className="relative bg-white">
        <nav aria-label="Top" className="bg-gray-100 px-2 sm:px-2 lg:px-2 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              

              {/* Logo */}
              <div className="ml- flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>LIBRARY-APP</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allbooks'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Books
                  </Link>
                  <Link to={'/request'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Request
                  </Link>

                  {user?.user?.email === 'admin10@gmail.com' ?
                <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                Admin
              </Link> : ""}
                  

                  {user ?
                  <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Logout
                </a> : ""}
                </div>

                
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="picture/pro.jpg"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                     {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                
              </div>
            </div>
          </div>
        </nav>
      </header>
    
    </>
  )
}

export default Navbar
