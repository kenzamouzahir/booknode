import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import './Header.css';

function Header() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
  };

  return (
    <nav className="bg-whiteborder-gray-200 ">

      <div className=" max-w-full w-full  bg-navbg-100 hidden lg:block  ">

        <div className=" absolute l-0 top-0 h-16 l-0 w-80 " >
          <Link to="/">
            <img src="logo_icon-half2.png" className='absolute left-48 top-px  ' alt="logoback" />
          </Link>
        </div>
        <div className=' h-24 relative min-h-0 pr-5 pl-5 container
     flex flex-wrap justify-between items-center mx-auto w-4/5'>
          <div className="flex items-center ">
            <Link to="/"><img src="logo_header-booknode.png" className="relative top-5 z-10" alt="booknodeLogo" />
            </Link>
            <Link to="/">
              <img src="direction-cinenode.png" className="relative top-6  " alt="booknodeLogo2" />
            </Link>
          </div>


          <div className="flex space-x-4 text-center text-white">
            <div className=''>
              <div>Livres</div>
              <div>234</div>
            </div>

            <div className=''>
              <div>Comments</div>
              <div>234</div>
            </div>

            <div className=''>
              <div>Members</div>
              <div>234</div>
            </div>

          </div>

          <div className="flex-col flex t text-center ">
            {/* <button  */}

            <Link className=' text-center border border-second-color-100 bg-first-color-100 pt-2 pb-2 pl-4 pr-4 rounded  text-sm text-white'
              to="/login">S'identifier</Link>

            <Link className=' text-center border border-fourth-color-100  bg-third-color-100 pt-2 pb-2 pl-4 pr-4 rounded text-sm text-white'
              to="/signin">Inscription</Link>


          </div>
        </div>

      </div>
      <div className="hidden lg:block 
                  bg-another-one-100 
                  border-t-another-one2-100 py-4 z-11 relative ">
        <div className='flex 
                           items-center 
                           justify-between 
                           pl-40 
                           pr-40'>
          <ul className="flex 
                       mt-4 
                       md:flex-row 
                       md:space-x-3.5
                       md:mt-0 
                       md:text-sm 
                       md:font-medium ">
            <li>

              <Link to="/" className="block 
                                   py-2 pr-4 pl-3 
                                   text-white 
                                   bg-white rounded 
                                   md:bg-transparent 
                                   md:text-white
                                   md:p-0 " aria-current="page">
                Accueil
              </Link>
            </li>
            <li>
              <a href="#" className="block 
                                   py-2 pr-4 pl-3 
                                   text-menutextcolor-100 
                                   border-b border-gray-100 
                                   hover:text-white 
                                   md:hover:bg-transparent 
                                   md:border-0 
                                   md:hover:text-white 
                                   md:p-0">Espace Perso</a>
            </li>
            <li>
              <a href="#" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                className="block 
                        py-2 pr-4 pl-3 
                        text-menutextcolor-100 
                        border-b border-gray-100 
                        hover:text-white 
                        md:hover:bg-transparent 
                        md:border-0 
                      md:hover:text-white 
                        md:p-0">Communauté</a>

            </li>

            <li>
              <a href="#" className="block 
                        py-2 pr-4 pl-3 
                        text-menutextcolor-100 
                        border-b border-gray-100 
                        hover:text-white 
                        md:hover:bg-transparent 
                        md:border-0 
                      md:hover:text-white 
                        md:p-0">Services</a>
            </li>
            <li>
              <a href="#" className="block 
                                   py-2 pr-4 pl-3 
                                   text-menutextcolor-100 
                                   border-b border-gray-100 
                                   hover:text-white 
                                   md:hover:bg-transparent 
                                   md:border-0 
                                   md:hover:text-white 
                                   md:p-0">Livres</a>
            </li>
            <li>
              <a href="#" className="block 
                                   py-2 pr-4 pl-3 
                                   text-menutextcolor-100 
                                   border-b border-gray-100 
                                   hover:text-white 
                                   md:hover:bg-transparent 
                                   md:border-0 
                                   md:hover:text-white 
                                   md:p-0">Univers</a>
            </li>
            <li>
              <a href="#" className="block 
                                   py-2 pr-4 pl-3 
                                   text-menutextcolor-100 
                                   border-b border-gray-100 
                                   hover:text-white 
                                   md:hover:bg-transparent 
                                   md:border-0 
                                   md:hover:text-white 
                                   md:p-0">Activités</a>
            </li>
            <li>
              <a href="#" className="block 
                                   py-2 pr-4 pl-3 
                                   text-menutextcolor-100 
                                   border-b border-gray-100 
                                   hover:text-white 
                                   md:hover:bg-transparent 
                                   md:border-0 
                                   md:hover:text-white 
                                   md:p-0">A la une</a>
            </li>
            <li>
              <a href="#" className="block 
                                   py-2 pr-4 pl-3 
                                   text-menutextcolor-100 
                                   border-b border-gray-100 
                                   hover:text-white 
                                   md:hover:bg-transparent 
                                   md:border-0 
                                   md:hover:text-white 
                                   md:p-0">Aide</a>
            </li>

          </ul>
          <ul className=''>
            <input type="text" name="search form" id="search" placeholder='Search'
              className=' w-full 
                    rounded
                    placeholder:text-slate-400 block 
                    border-slate-300  py-2  pr-28 shadow-sm 
                    focus:outline-none 
                    focus:border-search-100
                    focus: ring-search-100
                    focus:ring-1 
                    sm:text-sm'/>
            {/* focus du search form */}

          </ul>
        </div>
      </div>





      {/*Mobile */}
      <div className=" max-w-full w-full  bg-navbg-100 block lg:hidden  ">

        <div className="" >
          <ul className='flex'>
            <input type="text" name="search form" id="search" placeholder='Rechercher un livre ou un auteur'
              className=' w-full 
                    rounded
                    placeholder:text-slate-400  border
                    border-slate-300  py-2  pr-28 shadow-sm           
                    text-sm '/>
            <AiOutlineSearch className=' text-white h-auto w-10   ' />
            {/* focus du search form */}

          </ul>

        </div>
        <div className=' h-24  min-h-0 pr-5 pl-5 container 
flex flex-wrap justify-between items-center mx-auto w-4/5'>

          {/* <div className="flex items-center ">
            <Link to="/"><img src="logo_header-booknode.png" className="top-5 z-10" alt="booknodeLogo" />
            </Link>

          </div> */}


          <div className="flex space-x-4 text-center text-white ">
            <div className=''>
              <div>Livres</div>
              <div>234</div>
            </div>


            <div className=''>
              <div>Members</div>
              <div>234</div>
            </div>

          </div>

          <div className="flex-col flex  text-center justify-between ">
            {/* <button  */}

            <Link className=' text-center border border-second-color-100 bg-first-color-100 pt-2 pb-2 pl-4 pr-4 rounded  text-sm text-white'
              to="/login">S'identifier</Link>

            <Link className=' text-center border border-fourth-color-100  bg-third-color-100 pt-2 pb-2 pl-4 pr-4 rounded text-sm text-white'
              to="/signin">Inscription</Link>


          </div>
        </div>

      </div>
      <div className="flex lg:hidden 
                  bg-another-one-100 
                  border-t-another-one2-100 justify-between " >

        <Link to="/"><img src="logo_header-booknode.png" className=" w-48 " alt="booknodeLogo" />
        </Link>
        <div className=''>
            <AiOutlineMenu className=' text-white w-10 cursor-pointer  text-3xl  top-2 relative '
              onClick={handleClick} /> </div>

       



      </div>
      <div className={`${toggleMenu ? "show":"hidden"}  mr-4 p-1 block lg:hidden`} >

<ul className=" leading-10
             m-2
              text-base
             font-medium ">
  <li>

    <Link to="/" className=" 
                         text-menutextcolor-100 "
      aria-current="page">
      Accueil
    </Link>
  </li>

  <hr/>

  <li>
    <a href="#" className="
                         text-menutextcolor-100 
                         p-0">Espace Perso</a>
  </li>

  <hr className=''/>

  <li>
    <a href="#" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
      className="
        text-menutextcolor-100 
        p-0">Communauté</a>

  </li>

  <hr/>

  <li>
    <a href="#" className="
                         text-menutextcolor-100 
                         p-0">Services</a>
  </li>

  <hr/>

  <li>
    <a href="#" className="
                         text-menutextcolor-100 
                         p-0">Livres</a>
  </li>

  <hr/>

  <li>
    <a href="#" className="
                         text-menutextcolor-100 
                         p-0">Univers</a>
  </li>

  <hr/>

  <li>
    <a href="#" className="
                         text-menutextcolor-100 
                         p-0">Activités</a>
  </li>

  <hr/>

  <li>
    <a href="#" className="
                         text-menutextcolor-100 
                         p-0">A la une</a>
  </li>
  <hr/>

  <li>
    <a href="#" className="
                         text-menutextcolor-100 
                         p-0">Aide</a>
  </li>

</ul>

</div>








      {/*Menu */}
      {/* <div className=''>
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div> */}










    </nav>





  )

}

export default Header;
