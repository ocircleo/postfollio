import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="h-screen w-full flex items-center justify-center flex-col">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="text-red-500 font-bold">
                Error:    <i>{error.statusText || error.message}</i>
            </p>
            <Link to={'/'} className="text-indigo-500 underline">Back to home</Link>
        </div>
    );
};

export default ErrorPage;