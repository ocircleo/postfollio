import { IoCallOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
const Contact = () => {
    const copyEmail = () => {
        let text = 'salmanhossain11222626@gmail.com'
        navigator.clipboard.writeText(text)
        let target = document.getElementById('copyEmail');
        target.innerText = 'copied'
        target.title = 'email copied'
        setTimeout(() => {
            target.innerText = 'Copy Email'
        },2000)
    }
    return (
        <>
            <h3 className='text-4xl font-semibold text-center py-16' id='contactme'>Contact Me</h3>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 container mx-auto">
                <div className='col-span-1 lg:col-span-2'>
                    <div className='p-5'>
                        <h2 className='text-2xl font-semibold'>Contact Information</h2>
                        <p>Let's talk how I can help you to grow your business. I appreciate any kind of suggestions or feedback.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="border  flex flex-col sm:flex-row items-center  shadow py-5">
                            <div className='w-1/5  flex h-full items-center justify-center'>

                                <div className='h-12 border-indigo-500  w-12 border-2 rounded-full flex items-center justify-center'>
                                    <IoCallOutline className='text-2xl text-indigo-500'></IoCallOutline>

                                </div>
                            </div>
                            <div className='flex flex-col text-center sm:text-left gap-3'>
                                <h3 className='text-xl font-semibold'>Contact on Phone</h3>
                                <p>+880 1677176199</p>
                            </div>
                        </div>
                        <div className="border flex flex-col sm:flex-row   items-center py-5 shadow">
                            <div className='w-1/5  h-full flex items-center justify-center'>
                                <div className='h-12 w-12 border-2 border-indigo-500 rounded-full flex items-center justify-center'>
                                    <GoMail className='text-2xl text-indigo-500'></GoMail>
                                </div>

                            </div>
                            <div className='flex flex-col text-center items-center sm:items-start sm:text-left pr-2  gap-3 w-full overflow-x-scroll'>
                                <h3 className='text-xl font-semibold'>Contact on Email</h3>
                                <p>salmanhossain11222626@gmail.com</p>
                                <p className='border-2 border-dashed ml-1 border-indigo-500 p-1 rounded font-semibold bg-indigo-50 text-indigo-500 hover:bg-indigo-100 cursor-pointer text-center w-[120px] text-sm' onClick={copyEmail} id='copyEmail'>Copy Email</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col p-3 gap-3 col-span-1 lg:col-span-3">
                    <div className="flex flex-col gap-5"  >

                        <div className="flex flex-col flex-grow">
                            <label htmlFor="name">Your name</label>
                            <input type="text" required name="name" className="sm:py-1 border-2 border-indigo-500 rounded text-lg px-1" />

                        </div>
                        <div className="flex flex-col flex-grow">
                            <label htmlFor="email">Your email</label>
                            <input type="email" name="email" required className="border-2 border-indigo-500 rounded sm:py-1 text-lg px-1" />

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="description">Your message</label>
                        <textarea name="description" required cols="20" rows="5" className="border-2 border-indigo-500 rounded text-lg px-1" ></textarea>

                    </div>
                    <button className="bg-indigo-500 py-2 rounded text-white">Send Email</button>
                </form>
            </div>
        </>
    );
};

export default Contact;