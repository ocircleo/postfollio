import welcome from '/img/welcome.png'
import home from './home.module.css'
import { Link } from "react-router-dom";
const Home = () => {

    return (
        <div className='container mx-auto'>
            <div className=" flex  min-h-[300px] gap-5 md:flex-row flex-col">
                <div className=' md:w-3/5 w-full p-5 min-h-[550px]  sm:h-auto rounded-md flex justify-center flex-col'>
                    <h2 className='text-4xl font-semibold py-4 '>Welcome to my website.</h2>
                    <p>Hi! my name is salman hossain <br />
                        And welcome to my site.</p>
                    <h3 className='text-xl flex flex-col sm:flex-row min-h-[40px] md:min-h-0'>
                        <span className='flex'>I am a </span> <span className='text-indigo-500  font-semibold capitalize translate-x-1'>
                            Full stack webdevloper (MERN stack)
                        </span>

                    </h3>
                    <p>Self-taught programmer with proficiency in the MERN stack, solid understanding of JavaScript, HTML, and CSS, Tailwind.Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs</p>
                    <h2 className='text-indigo-500 py-1 font-semibold text-xl'>My resume <Link toj="https://drive.google.com/file/d/1PMgqn2WsnBJzF7y-2d6_uFNhZ1kKFt5D/view?usp=sharing" target='_blank' className='bg-indigo-500 px-3 capitalize font-semibold rounded text-white cursor-pointer' rel="noreferrer">view</Link> </h2>
                </div>
                <div className="relative md:w-2/5 w-full flex items-center justify-center h-[300px] md:h-[400px] xl:h-[500px]">
                    <img src={welcome} alt="" className='w-auto h-[100%] z-0  object-cover relative select-none' draggable={false} />
                    <div className={`h-full  bg-indigo-100 absolute top-[20%] z-[-1] ${home.blobyanimation}`}></div>
                    <div className={`h-full  bg-indigo-100 rounded-full absolute top-[20%] z-[-1] ${home.blobyanimation2}`}></div>
                    <div className={`h-full  bg-indigo-100 rounded-full absolute top-[20%] z-[-1] ${home.blobyanimation3}`}></div>
                </div>

            </div>
        </div>
    );
};

export default Home;