import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BlogDeatill = () => {
    let [data, setData] = useState([])
    const loaction = useLocation()
    let dataNumber = loaction.pathname[loaction.pathname.length - 1]
    useEffect(() => {
        fetch('/blog.json').then(res => res.json()).then(data => {
            setData(data[dataNumber])
        })
    }, [])
    return (
        <div>
            <div className="rounded-md border py-3 px-2 grid grid-cols-2 gap-5 container mx-auto">
                <img src={data.img} alt="" className="h-[300px] object-cover col-span-2 lg:col-span-1  bg-gray-200 rounded mb-4" />
                <div className='col-span-2 lg:col-span-1'>
                    <h2 className="capitalize pb-2"> {data.title}</h2>
                    <p className="text-gray-800 pb-5 text-sm">{data.description}</p>
                    <Link to={'/blogs'} className="text-white bg-indigo-500 px-2 rounded py-1 capitalize">previous page</Link>

                </div>
            </div>
        </div >
    );
};

export default BlogDeatill;