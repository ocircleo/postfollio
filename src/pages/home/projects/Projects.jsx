import { Link } from "react-router-dom";
import projects from './projects.module.css'
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import project1 from '/img/project.jpeg'
import project2 from '/img/project2.jpeg'
const Projects = () => {
    const [cardActive, setActive] = useState(false)
    const [cardActive2, setActive2] = useState(false)
    return (<div className="container mx-auto">
        <p className="text-2xl font-semibold text-center py-5">My Projects</p>
        <div className="flex sm:flex-row flex-col px-2 sm:px-1 justify-between gap-5">
            <div className="flex flex-col gap-3 rounded sm:min-w-96 p-2 border">
                <div className="h-60 rounded">
                    <img src={project1} alt="" className="h-full w-full bg-indigo-50 rounded object-cover object-top hover:object-bottom duration-1000" />
                </div>
                <h2 className="font-semibold">Name: Toy Stop</h2>
                <h3 className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus similique vero qui rem nulla facere cum officia soluta accusantium quibusdam delectus saepe veritatis, sit neque nemo! Expedita alias obcaecati reprehenderit?</h3>
                <button className={`bg-indigo-500 p-3 rounded hover:bg-indigo-300 text-white ${cardActive || cardActive2 ? "pointer-events-none" : 'pointer-events-auto'}`} onClick={() => { setActive(true) }}>Show more</button>
            </div>
            <div className="flex flex-col gap-3 rounded sm:min-w-96 p-2 border">
                <div className="h-60 rounded">
                    <img src={project2} alt="" className="h-full w-full  bg-indigo-50 rounded object-cover object-top hover:object-bottom duration-1000" />
                </div>
                <h2 className="font-semibold">Name: Fluent Verse</h2>
                <h3 className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus similique vero qui rem nulla facere cum officia soluta accusantium quibusdam delectus saepe veritatis, sit neque nemo! Expedita alias obcaecati reprehenderit?</h3>
                <button className={`bg-indigo-500 p-3 rounded hover:bg-indigo-300 text-white ${cardActive || cardActive2 ? "pointer-events-none" : 'pointer-events-auto'}`} onClick={() => { setActive2(true) }}>Show more</button>
            </div>
        </div >
        <div id="card-1" className={`border px-3  w-full md:w-3/4 fixed  lg:w-2/3 xl:w-2/5  rounded flex items-center  flex-col h-[450px] top-1/2 left-1/2 duration-100 z-50 bg-white ${cardActive ? projects.cardactive : projects.cardhidden} overflow-y-scroll`}>
            <div className="relative">
                <div className="flex justify-end w-full sticky top-0">
                    <RxCross2 className="text-3xl cursor-pointer hover:text-red-500 translate-x-3" onClick={() => setActive(false)}></RxCross2>
                </div>
                <div className="h-36 md:h-64 rounded w-full">
                    <img src={project1} alt="" className="h-36 md:h-64 w-full bg-indigo-50 rounded object-cover " />
                </div>
                <h2 className="font-semibold">Name: Toy Stop</h2>
                <h3 className="font-semibold">Techonology : MERN</h3>
                <h3> <span className="font-semibold">Detaill</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni enim saepe quo repudiandae iure eligendi autem est! Ullam perferendis modi maiores harum inventore dicta nostrum deserunt alias, voluptas consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, cumque. Maxime optio ut laudantium natus, accusamus hic neque quis officia eaque facilis nulla veniam quam dignissimos, esse, aliquid quod omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur doloribus corporis ea distinctio, soluta et impedit voluptatibus voluptatem autem quasi eos quo debitis eum velit eius libero consectetur similique fugiat? Consectetur sed minus dolore illum, molestias natus ratione fuga dolorem est labore saepe harum maxime id, sit error nisi.</h3>
                <div className="flex justify-center gap-1 sm:gap-5 mt-4 capitalize flex-shrink flex-wrap  sticky bg-white bottom-0 py-2">
                    <Link className="bg-indigo-500 rounded px-3 py-1 text-white">Live site</Link>
                    <Link className="bg-indigo-500 rounded px-3 py-1 text-white">github</Link>
                    <Link className="bg-indigo-500 rounded px-3 py-1 text-white">github (backend)</Link>

                </div>
            </div>


        </div>
        <div id="card-2" className={`border px-3  w-full md:w-3/4  lg:w-2/3 xl:w-2/5  rounded flex items-center  flex-col fixed h-[450px] top-1/2 left-1/2 duration-100 z-50 bg-white ${cardActive2 ? projects.cardactive : projects.cardhidden} overflow-y-scroll`}>
            <div className="relative">
                <div className="flex justify-end w-full sticky top-0">
                    <RxCross2 className="text-3xl cursor-pointer hover:text-red-500 translate-x-3" onClick={() => setActive2(false)}></RxCross2>
                </div>
                <div className="md:h-64 rounded w-full">
                    <img src={project2} alt="" className="h-36 md:h-64 w-full bg-indigo-50 rounded object-cover " />
                </div>
                <h2 className="font-semibold">Name: Fluent Verse</h2>
                <h3 className="font-semibold">Techonology : MERN</h3>
                <h3> <span className="font-semibold">Detaill</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni enim saepe quo repudiandae iure eligendi autem est! Ullam perferendis modi maiores harum inventore dicta nostrum deserunt alias, voluptas consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, cumque. Maxime optio ut laudantium natus, accusamus hic neque quis officia eaque facilis nulla veniam quam dignissimos, esse, aliquid quod omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur doloribus corporis ea distinctio, soluta et impedit voluptatibus voluptatem autem quasi eos quo debitis eum velit eius libero consectetur similique fugiat? Consectetur sed minus dolore illum, molestias natus ratione fuga dolorem est labore saepe harum maxime id, sit error nisi.</h3>
                <div className="flex justify-center gap-1 sm:gap-5 mt-4 capitalize flex-shrink flex-wrap  sticky bg-white bottom-0 py-2">
                    <Link className="bg-indigo-500 rounded px-3 py-1 text-white">Live site</Link>
                    <Link className="bg-indigo-500 rounded px-3 py-1 text-white">github</Link>
                    <Link className="bg-indigo-500 rounded px-3 py-1 text-white">github (backend)</Link>

                </div>
            </div>


        </div>




    </div>
    );
};

export default Projects;