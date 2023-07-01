import App from "./App"
import Home from "./pages/home/Home"
import Skills from "./pages/home/skills/Skills"
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
                element:<Skills></Skills>
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