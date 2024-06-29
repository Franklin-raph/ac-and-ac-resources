import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import { TbEyeStar, TbTargetArrow, TbUsersGroup } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SiTrustpilot } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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

  const tabsArray = ['Gotru Monitor', 'Gotru Trade', 'Gotru Pass', 'Result check']
  const [activeTab, setActiveTab] = useState(tabsArray[0])


  return (
    <BrowserRouter>
        <nav className='flex items-center justify-between shadow-sm w-full bg-white z-10 px-[3rem] md:px-[10rem] py-4 mb-[4rem]'>
        <Link>
          <img src="./images/logo.png" className='w-[60px]' alt="" />
        </Link>
          <div className="togglers hidden text-[20px]">
            <i class="ri-menu-3-line"></i>
            <i class="ri-close-fill hidden"></i>
          </div>
        <ul className='flex items-center justify-between gap-7 text-[14px] text-gray-600'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#our-mission-vision'>Mission and Vision</a>
          </li>
          <li>
            <a href='#values'>Values</a>
          </li>
          <li>
            <a href='#contact-us'>Contact Us</a>
          </li>
        </ul>
        <button className='bg-primary-color text-white px-6 py-2 rounded-full font-[500]'>Get App</button>
      </nav>
      <div data-aos="fade-up">
          <main className='flex items-center justify-between mx-auto md:flex-row flex-col-reverse md:px-[10rem] px-[2rem]'>
              <div className='md:w-[50%] md:mt-0 mt-10'>
                  <h1 className='text-[36px] font-[600] text-heading-color'>AC & AC RESOURCES</h1>
                  <p className='text-text-color my-3'>AC & AC RESOURCES is a business consulting, product marketing and currently introducing software solutions to her portfolio. We generate and develop business ideas, engage in product marketing and also offer corporate consultancy services.</p>
                  <div className='inline-flex gap-5 hero-btns flex-col sm:flex-row'>
                      <div className='bg-primary-color text-white px-6 py-3 cursor-pointer rounded-full font-[500]' onClick={() => {
                      window.location.href = 'https://go-tru-hub.vercel.app/'
                    }} >Get Started</div>
                  </div>
              </div>
              <div className='bg-white w-[100%] sm:w-[75%] md:w-[45%]'>
                  <img src="./images/svg-image-2.svg" alt="" />
                  {/* <img src="./images/thumbnail.png" alt="" className='w-[300px]' /> */}
              </div>
          </main>

          <section id='our-mission-vision' className='bg-[#28374C] mt-[6rem] py-[3rem] flex flex-col gap-[4rem]'>
            <div className='md:px-[10rem] px-[2rem] flex md:flex-row-reverse items-center justify-between flex-col'>
                <div className='md:w-[50%] md:mt-0 mb-10 text-center md:text-left border-l-4 border-primary-color pl-5' data-aos="fade-left" data-aos-delay="1">
                    <h1 className='text-[24px] font-[600]  text-white'>OUR MISSION</h1>
                    <p className=' text-white my-3'>As an honest establishment, we seek to create and promote great ideas, enduring facilities and satisfaction. We strive to grow our business with same honesty and integrity we use to mold our brands, with sustainability and great institution for all.</p>
                </div>
                <div className='w-[100%] sm:w-[75%] md:w-[45%]' data-aos="fade-right" data-aos-delay="100">
                  <TbTargetArrow className='w-full text-[250px] text-white' />
                </div>
            </div>

            <div className='flex items-center justify-between mx-auto md:flex-row flex-col md:px-[10rem] px-[2rem]'>
                <div className='md:w-[50%] text-center md:text-left border-r-4 border-primary-color pr-5'  data-aos="fade-right" data-aos-delay="1">
                    <h1 className='text-[26px] font-[600]  text-white'>OUR VISION</h1>
                    <p className=' text-white my-3'>To create a business world with zero tolerance to excuses and enshrine due diligence to doing things.</p>
                </div>
                <div className='w-[100%] sm:w-[75%] md:w-[45%]' data-aos="fade-left" data-aos-delay="100">
                  <TbEyeStar className='w-full text-[200px] text-white' />
                </div>
            </div>
          </section>


          <section id='values' className='my-[6rem] md:my-[8rem] md:px-[10rem] px-[2rem]'>
              <p className='text-center text-[20px] font-[600] text-heading-color mb-10'>OUR VALUES</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[28px]' data-aos="fade-up" data-aos-delay="1">
                      <p className='font-[600] text-heading-color text-[18px]'>INTEGRITY</p>
                      <VscWorkspaceTrusted className='text-[50px] text-primary-color' />
                      <p className='text-text-color'>We are honest, open, ethical and fair. People trust us to adhere to our words.</p>
                      {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                  </div>
                  <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[20px]' data-aos="fade-up" data-aos-delay="100">
                      <p className='font-[600] text-heading-color text-[18px]'>LOYALTY</p>
                      <SiTrustpilot className='text-[50px] text-primary-color' />
                      <p className='text-text-color'>We have an exceptional feeling of duty towards our clients.</p>
                      {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                  </div>
                  <div className='flex items-center justify-center text-center flex-col shadow-md rounded-[12px] py-8 px-6 gap-[20px]' data-aos="fade-up" data-aos-delay="200">
                      <p className='font-[600] text-heading-color text-[18px]'>COLLABORATIONS</p>
                      <TbUsersGroup className='text-[50px] text-primary-color' />
                      <p className='text-text-color'>We leverage collective genius.</p>
                      {/* <p className='font-[600] text-heading-color'>Learn More</p> */}
                  </div>
              </div>
          </section>

          <section className='md:px-[10rem] px-[2rem]'>
            <h1 className='text-[24px] font-[600] text-center mb-10 text-heading-color'>
              INTRODUCING OUR SOFTWARE PRODUCT <br /> (THE MAJOR FEATURES)
            </h1>
            
            <div className='flex md:flex-row items-center justify-between mx-auto flex-col'>
              <div className='md:w-[50%] md:mt-0 mb-10 text-center md:text-left'>
                  <h3 className='text-[24px] font-[600] text-heading-color'>Manage Your Business, Employees, and Students in one App!</h3>
                  <p className='text-text-color my-3'>Gotruhub, a product of AC & AC RESOURCES - a Multi-tenancy Digital service Platform built for close user groups. It is built to provide diverse services through three major features viz:</p>
                  <div>
                    <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5'>
                        <button className='bg-primary-color text-white px-5 py-2 rounded-full w-full flex justify-center items-center gap-2'>
                            <i class="ri-apple-line text-[20px]"></i>
                            <p>Apple Store</p>
                        </button>
                        <button className='bg-primary-color text-white px-5 py-2 rounded-full w-full flex justify-center items-center gap-2'>
                            <i class="ri-google-play-line text-[20px]"></i>
                            <p>Google Play</p>
                        </button>
                    </div>
                    <button onClick={() => {
                      window.location.href = 'https://go-tru-hub.vercel.app/'
                    }} className='bg-primary-color text-white px-5 py-2 mt-[15px] text-center rounded-full w-full flex justify-center items-center gap-2'>
                        <i class="ri-external-link-line text-[20px]"></i>
                        <p>Create an account</p>
                    </button>
                  </div>
              </div>
              <div className='bg-white flex flex-col justify-center items-center'>
              {/* <img src="./images/thumbnail.png" alt="" className='w-[300px]' /> */}
                <img src="./images/icon.svg" className='w-[90%] mx-auto mb-5' alt="" />
                <p className='text-[24px] font-[600] text-heading-color'>GOTRUHUB</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-[2rem] mt-[3rem]'>
              {
                tabsArray.map(tab => (
                  <div className={`flex items-center gap-[10px] ${tab.id === 'Trade' ? 'text-primary-color' : 'text-text-color'}`}>
                    <button onClick={() => setActiveTab(tab)}>{tab}</button>
                  </div>
                ))
              }
            </div>
            <div>
                {
                    activeTab === "Gotru Trade" &&
                    <div className='flex justify-between lg:items-start gap-[2rem] lg:text-left text-center w-[90%] flex-col lg:flex-row items-center mx-auto mt-[5rem]'>
                        <img src="./images/trade_img.svg" className='sm:w-[40%]' alt="" />
                        <div className='w-[100%]'>
                            <p className='text-[32px] font-[500] mb-3'>{activeTab}</p>
                            <p className='text-[#6F7975]'>This is a  cooperative trading feature that is designed for cashless trading. It comes with a user friendly inventory management system for the Organization's shop, a wallet system for the students and also allows parents see the details of their wards financial transactions.This feature will bring our children up to speed with the prevailing technology, helps control pilfering, reckless spending & misappropriation of students funds by school guardians.</p>
                            <div className=''>
                                <button onClick={() => {
                                  window.location.href = 'https://go-tru-hub.vercel.app/'
                                }} className='text-white bg-primary-color rounded-[8px] mt-[2.5rem] px-[35px] py-[16px] text-center'>Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                }
                {
                    activeTab === "Result check" &&
                    <div className='flex justify-between lg:items-start gap-[2rem] lg:text-left text-center w-[90%] flex-col lg:flex-row items-center mx-auto mt-[5rem]'>
                        <img src="./images/go-tru-pass.svg" className='sm:w-[50%]' alt="" />
                        <div className='w-[100%]'>
                            <p className='text-[32px] font-[500] mb-3'>{activeTab}</p>
                            <p className='text-[#6F7975]'>This is a feature smartly built to seamlessly upload properly secured results to the app users/students.</p>
                            <div className=''>
                                <button onClick={() => {
                                  window.location.href = 'https://go-tru-hub.vercel.app/'
                                }} className='text-white bg-primary-color rounded-[8px] mt-[2.5rem] px-[35px] py-[16px] text-center'>Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                }
                {
                    activeTab === "Gotru Pass" &&
                    <div className='flex justify-between lg:items-start gap-[2rem] lg:text-left text-center w-[90%] flex-col lg:flex-row items-center mx-auto mt-[5rem]'>
                        <img src="./images/go-tru-pass.svg" className='sm:w-[50%]' alt="" />
                        <div className='w-[100%]'>
                            <p className='text-[32px] font-[500] mb-3'>{activeTab}</p>
                            <p className='text-[#6F7975]'>This feature Keeps track and gives accurate account of students school attendance and movements with the aid of GPS among other technologies. It reports in real time, students arrival and exit from school to  supervisors/guardians. Its incorruptible promptness and accuracy in reportage through SMS/Email helps to minimize security risks & curtails truancy amongst students. It as well keeps proper records of all that are pointed out above for reference purposes.</p>
                            <div className=''>
                                <button onClick={() => {
                                  window.location.href = 'https://go-tru-hub.vercel.app/'
                                }} className='text-white bg-primary-color rounded-[8px] mt-[2.5rem] px-[35px] py-[16px] text-center'>Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                }
                {
                    activeTab === "Gotru Monitor" &&
                    <div className='flex justify-between lg:items-start gap-[2rem] lg:text-left text-center w-[90%] flex-col lg:flex-row items-center mx-auto mt-[5rem]'>
                        <img src="./images/trade_img.svg" className='sm:w-[50%]' alt="" />
                        <div className='w-[100%]'>
                            <p className='text-[32px] font-[500] mb-3'>{activeTab}</p>
                            <p className='text-[#6F7975]'>This feature has two ends, of which one is "Monitor Source" and the other which is "Monitor End". It is a personnel management feature that helps to monitor the employees as well as students to ensure due diligence in their discharge of duties/attend to classes to curtail truancy amongst students as the case maybe. It does this through electronic capturing and storage of data. It is built to ensure zero compromise in task and time attendance taking. This will in a long way ease the management stress in appraising personnel. It helps to minimize dereliction of duty and optimize output amongst members of staff.  It as well captures class attendance activities of students, stores all the information and transmit them to their assigned supervisors.</p>
                            <div className=''>
                                <button onClick={() => {
                                  window.location.href = 'https://go-tru-hub.vercel.app/'
                                }} className='text-white bg-primary-color rounded-[8px] mt-[2.5rem] px-[35px] py-[16px] text-center'>Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
          </section>

          <section id='contact-us' className='my-[7rem] md:px-[10rem] px-[2rem] flex items-start md:items-center justify-between md:flex-row flex-col'>
              <div className='md:w-[40%] md:mt-0 mb-10'>
                  <p className='text-[20px] text-heading-color mb-5 font-[600]'>Contact Us From Here</p>
                  <p className='text-text-color'>You can contact us from here, you can write to us, call us or visit our service center, we will gladly assist you.</p>
              </div>
              <div className='font-[500] flex gap-[1rem] flex-col text-text-color mb-[2.5rem]'>
                  <p><i class="ri-phone-line text-[20px] text-primary-color"></i>: 123 - 456 - 789</p>
                  <p><i class="ri-mail-line text-[20px] text-primary-color"></i>: acandacresources@gmail.com</p>
                  <p><i class="ri-map-pin-line text-[20px] text-primary-color"></i>: Flat 3, Block D, Engr Ogochukwu Estate, <br /> Umushi St, Perm. Site, Ivite Awka, Awka South L.G.A., <br /> Anambra State, Nigeria.</p>
              </div>
          </section>
      </div>
        <div className='bg-[#28374C] text-white'>
          <div className=''>
            <div className='flex items-center justify-center flex-col gap-[1rem] md:gap-[2rem] mt-[2rem] py-[3rem] lg:px-[6rem] px-8'>
              <Link to="/" className='block'>
                <img src="./images/logo.png" className='w-[80px]' alt="" />
              </Link>
              <p className='text-[14px]'> Copyright &copy; since {new Date().getFullYear()} </p>
            </div>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
