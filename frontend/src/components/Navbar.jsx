import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'
import logo from '../assets/desktop/logo.svg'
import ToggleSwitch from './ToggleSwitch'



export const Navbar = () => {
  return (
        <nav className="nav relative px-12 flex justify-between items-center h-[160px] ">
            <div className='lg:px-24 '>
              <a href="/" title='HomePage'> <img src={logo} alt="devjobslogo" className='md:-ml-3 lg:px-[10px]' /></a>
            </div >
            <div className='flex items-center sm:gap-2 sm:px-4 lg:px-[100px] lg:gap-2 md:px-[39px]'>
              {/* sunlogo  */}
              <div>
                <img src={sun} alt="sunlogo" />
              </div>
              {/* ToggleSwitch  */}
              <div>
                 <ToggleSwitch/>
              </div>
              {/* moonlogo  */}
              <div >
                <img src={moon} alt="moonlogo"/>
              </div>
            </div>
          </nav>
  )
}
