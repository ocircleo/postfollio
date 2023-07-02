import { Link } from "react-router-dom";
import icon from '/img/icon.jpg'
const Footer = () => {

    const backtotop = () => {
        window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', () => {
        let backtotoper = document.getElementById('backtotoper');
        if (scrollY > 500) {
            backtotoper.classList.remove('hidden')
            backtotoper.classList.add('block')
        }
        if (scrollY < 500) {
            backtotoper.classList.add('hidden');
            backtotoper.classList.remove('block')
        }
    })
    const copyEmail = () => {
        let text = 'salmanhossain11222626@gmail.com'
        navigator.clipboard.writeText(text)
        let target = document.getElementById('copyEmailfooter');
        target.innerText = 'copied'
        target.title = 'email copied'
        setTimeout(() => {
            target.innerText = 'Copy Email'
        }, 2000)
    }
    return (
        <div className="bg-indigo-50 w-full mt-4 overflow-x-hidden">
            <div className="container gap-5 md:gap-0 mx-auto grid grid-cols-2 py-10 overflow-x-hidden">
                <div className="col-span-2 md:col-span-1 flex justify-center items-center flex-col">
                    <img src={icon} className="h-12 w-12 rounded-full" alt="" />
                    <h2 className="italic text-gray-700 text-sm">Md.salman Hossain</h2>
                    <h2 className="italic text-gray-700 text-sm">Dhaka, Bangladesh</h2>
                    <h2 className="italic text-gray-700 text-sm">Email: salmanhossain11222626@gmail.com</h2>
                    <p className='border-2 border-dashed ml-1 border-indigo-500 p-1 rounded font-semibold bg-indigo-50 text-indigo-500 hover:bg-indigo-100 cursor-pointer text-center w-[120px] text-sm' onClick={copyEmail} id='copyEmailfooter'>Copy Email</p>
                </div>
                <div className="col-span-2 md:col-span-1 flex items-center justify-center flex-col">
                    <h1 className="italic text-gray-700 text-sm capitalize font-semibold" >importan links</h1>
                    <div className="flex gap-3">
                        <Link to={'/'} className="italic text-indigo-700 capitalize text-sm">home</Link>
                        <Link to={'/blog'} className="italic text-indigo-700 capitalize text-sm">blog</Link>
                        <Link to={'#contactme'} className="italic text-indigo-700 capitalize text-sm">contact</Link>

                    </div>
                    <h1 className="italic pt-3 text-gray-700 text-sm capitalize font-semibold" >projects links</h1>
                    <div className="flex gap-3">
                        <Link to={'/'} className="italic text-indigo-700 capitalize text-sm">Toy Stop</Link>
                        <Link to={'/blog'} className="italic text-indigo-700 capitalize text-sm">Fluent verse</Link>


                    </div>
                </div >
                <h2 className="col-span-2 text-center mt-10 capitalize text-sm text-gray-700 italic">------- copywrite@salman (2020-2023)  -------</h2>
            </div>

            <div id="backtotoper" onClick={backtotop} className="cursor-pointer text-4xl text-center text-white h-10 pb-2 w-10 fixed bottom-4 right-2 rounded-md bg-indigo-500 hidden">
                ↑
            </div>

        </div>
    );
};

export default Footer;