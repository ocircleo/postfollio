import { Link } from "react-router-dom";


const Blogcard = ({ data, id }) => {
    let { title, description, datew, rittemBy, likes, comments, share, img } = data

    return (
        <div className="max-w-full w-[400px] rounded-md border py-3 px-2">
            <img src={img} alt="" className="h-44 object-cover w-full bg-gray-200 rounded mb-4" />
            <h2 className="capitalize pb-2"> {title}</h2>
            <p className="text-gray-800 pb-5 text-sm">{description.slice(0, 120) + '...'}</p>
            <Link to={`/blogs/${id}`} className="text-white bg-indigo-500 px-2 rounded py-1 capitalize">show more</Link>
        </div>
    );
};

export default Blogcard;