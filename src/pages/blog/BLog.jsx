import { useEffect, useState } from "react";
import Blogcard from "./Blogcard";

const BLog = () => {

    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        fetch('/blog.json').then(res => res.json()).then(data => setBlogData(data))
    }, [])
    return (
        <div className="flex flex-wrap items-center gap-5 justify-center">
            {
                blogData.map((element, index) => <Blogcard key={index} id={index} data={element}></Blogcard>)
            }
        </div>
    );
};

export default BLog;