import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import { TbEyeStar, TbTargetArrow, TbUsersGroup } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SiTrustpilot } from "react-icons/si";


function App() {

  const aboutUsLinks = [
    {
      label:"About Thaka",
      url:"#"
    },
    {
      label:"Privacy Policy",
      url:"#"
    },
    {
      label:"Terms of use",
      url:"#"
    },
    {
      label:"Return Policy",
      url:"#"
    }
  ]

  const serviceLinks = [
    {
      label:"Pricing",
      url:"#"
    },
    {
      label:"Discounts",
      url:"#"
    },
    {
      label:"Report a Bug",
      url:"#"
    }
  ]


  return (
    <BrowserRouter>
        <nav className='flex items-center justify-between shadow-sm w-full bg-white z-10 px-[3rem] md:px-[5rem] py-4'>
        <Link>
          <img src="./images/logo.png" className='w-[60px]' alt="" />
        </Link>
          <div className="togglers hidden text-[20px]">
            <i class="ri-menu-3-line"></i>
            <i class="ri-close-fill hidden"></i>
          </div>
        <ul className='flex items-center justify-between gap-7 text-[14px] text-gray-600'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
        <button className='bg-primary-color text-white px-6 py-2 rounded-full font-[500]'>Get App</button>
      </nav>
      <div className='lg:w-[75%] px-[2rem] mx-auto'>
          <main className='flex items-center justify-between mx-auto md:flex-row flex-col-reverse'>
              <div className='md:w-[50%] md:mt-0 mt-10'>
                  <h1 className='text-[36px] font-[600] text-heading-color'>Order Products Faster Easier</h1>
                  <p className='text-text-color my-3'>AC & AC RESOURCES is a business consulting, product marketing and currently introducing software solutions to her portfolio. We generate and develop business ideas, engage in product marketing and also offer corporate consultancy services.</p>
                  <div className='inline-flex gap-5 hero-btns flex-col sm:flex-row'>
                      <div className='bg-primary-color text-white px-6 py-3 rounded-full font-[500]'>Get Started</div>
                  </div>
              </div>
              <div className='bg-white w-[100%] sm:w-[75%] md:w-[45%]'>
                  <img src="./images/svg-image-2.svg" alt="" />
                  {/* <img src="./images/thumbnail.png" alt="" className='w-[300px]' /> */}
              </div>
          </main>

          <section className='my-[6rem] md:my-[6rem] flex md:flex-row-reverse items-center justify-between mx-auto flex-col'>
              <div className='md:w-[50%] md:mt-0 mb-10 text-center md:text-left border-l-4 border-primary-color pl-5'>
                  <h1 className='text-[24px] font-[600] text-heading-color'>OUR MISSION</h1>
                  <p className='text-text-color my-3'>As an honest establishment, we seek to create and promote great ideas, enduring facilities and satisfaction. We strive to grow our business with same honesty and integrity we use to mold our brands, with sustainability and great institution for all.</p>
              </div>
              <div className='bg-white w-[100%] sm:w-[75%] md:w-[45%]'>
                <TbTargetArrow className='w-full text-[250px] text-[#28374C]' />
              </div>
          </section>

          <section className='flex items-center justify-between mx-auto md:flex-row flex-col'>
              <div className='md:w-[50%] text-center md:text-left border-r-4 border-primary-color pr-5'>
                  <h1 className='text-[26px] font-[600] text-heading-color'>OUR VISION</h1>
                  <p className='text-text-color my-3'>To create a business world with zero tolerance to excuses and enshrine due diligence to doing things.</p>
              </div>
              <div className='bg-white w-[100%] sm:w-[75%] md:w-[45%]'>
                <TbEyeStar className='w-full text-[200px] text-[#28374C]' />
              </div>
          </section>

          <section className='my-[6rem] md:my-[12rem]'>
              <p className='text-center text-[20px] font-[600] text-heading-color mb-10'>OUR VALUES</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[28px]'>
                      <p className='font-[600] text-heading-color text-[18px]'>INTEGRITY</p>
                      <VscWorkspaceTrusted className='text-[50px] text-primary-color' />
                      <p className='text-text-color'>We are honest, open, ethical and fair. People trust us to adhere to our words.</p>
                      {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                  </div>
                  <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[20px]'>
                      <p className='font-[600] text-heading-color text-[18px]'>LOYALTY</p>
                      <SiTrustpilot className='text-[50px] text-primary-color' />
                      <p className='text-text-color'>We have an exceptional feeling of duty towards our clients.</p>
                      {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                  </div>
                  <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[20px]'>
                      <p className='font-[600] text-heading-color text-[18px]'>COLLABORATIONS</p>
                      <TbUsersGroup className='text-[50px] text-primary-color' />
                      <p className='text-text-color'>We leverage collective genius.</p>
                      {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                  </div>
              </div>
          </section>

          <section className='flex md:flex-row items-center justify-between mx-auto flex-col'>
              <div className='md:w-[50%] md:mt-0 mb-10 text-center md:text-left'>
                  <h1 className='text-[24px] font-[600] text-heading-color'>Manage Your Business, Employees, and Students in one App!</h1>
                  <p className='text-text-color my-3'>Gotruhub, a product of AC & AC RESOURCES - a Multi-tenancy Digital service Platform built for close user groups. It is built to provide diverse services through three major features viz:</p>
                  <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5'>
                      <button className='bg-primary-color text-white px-5 py-2 rounded-full flex items-center gap-2'>
                          <i class="ri-apple-line text-[20px]"></i>
                          <p>Apple Store</p>
                      </button>
                      <button className='bg-primary-color text-white px-5 py-2 rounded-full flex items-center gap-2'>
                          <i class="ri-google-play-line text-[20px]"></i>
                          <p>Google Play</p>
                      </button>
                  </div>
              </div>
              <div className='bg-white w-[100%] sm:w-[75%] md:w-[45%]'>
              {/* <img src="./images/thumbnail.png" alt="" className='w-[300px]' /> */}
                  <img src="./images/svg-image-8.svg" alt="" />
              </div>
          </section>

          <section className='my-[7rem] flex items-start md:items-center justify-between md:flex-row flex-col' id='contact-us'>
              <div className='md:w-[40%] md:mt-0 mb-10'>
                  <p className='text-[20px] text-heading-color mb-5 font-[600]'>Contact Us From Here</p>
                  <p className='text-text-color'>You can contact us from here, you can write to us, call us or visit our service center, we will gladly assist you.</p>
              </div>
              <div className='font-[500] flex gap-[1rem] flex-col text-text-color mb-[2.5rem]'>
                  <p><i class="ri-phone-line text-[20px] text-primary-color"></i>: 123 - 456 - 789</p>
                  <p><i class="ri-mail-line text-[20px] text-primary-color"></i>: delivery@email.com</p>
                  <p><i class="ri-map-pin-line text-[20px] text-primary-color"></i>: Planet Earth</p>
              </div>
              <div>
                  <button className='bg-primary-color text-white px-5 py-2 rounded-full'>Contact Us</button>
              </div>
          </section>
      </div>
        <div className='bg-[#28374C] text-white'>
          <div className='flex items-start justify-between md:flex-row flex-col gap-[2rem] md:gap-[3rem] mt-[2rem] py-[3rem] lg:px-[6rem] px-8'>
            <div className='w-full'>
              <Link to="/" className='mb-5 block'>
                <img src="./images/logo.png" className='w-[80px]' alt="" />
              </Link>
              <p className='text-[14px]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cum repellat 
                aspernatur vitae beatae impedit neque nesciunt provident, quam itaque aliquid optio 
                pariatur quos dolorum sequi excepturi ut necessitatibus! Dolore.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-[2rem] w-full text-[12px]'>
              <div>
                <h1 className='font-bold text-[15px] md:text-[17px] mb-2'>About Us</h1>
                <ul>
                  {aboutUsLinks.map(link => (
                    <li className='py-1 text-[12px] md:text-[14px]'>
                      <Link to={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className='font-bold text-[15px] md:text-[17px] mb-2'>Our Services</h1>
                <ul>
                  {serviceLinks.map(link => (
                    <li className='py-1 text-[12px] md:text-[14px]'>
                      <Link to={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <Link>
                <i class="ri-facebook-circle-line"></i>
              </Link>
              <Link>
                <i class="ri-twitter-x-line"></i>
              </Link>
              <Link>
                <i class="ri-instagram-line"></i>
              </Link>
            </div>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
