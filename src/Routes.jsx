import App from "./App"
import BLog from "./pages/blog/BLog"
import BlogDeatill from "./pages/blog/BlogDeatill"
import Home from "./pages/home/Home"
import Skills from "./pages/home/skills/Skills"
import Contact from "./shared/cotact/Contact"
import ErrorPage from "./shared/error/ErrorPage"

const Routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }, {
                path: '/skill',
                element: <Skills></Skills>
            }, {
                path: '/blogs',
                element: <BLog></BLog>
            }, {
                path: '/blogs/:index',
                element: <BlogDeatill></BlogDeatill>
            }, {
                path: '/contact',
                element:<Contact></Contact>
            }
        ],
    }, {
        path: 'admin',
        element: '',
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'home',
                element: ''
            }, {
                path: 'blogs',
                element: '',
            }, {
                path: 'newblog',
                element: ''
            }
        ]
    }
]
export default Routes