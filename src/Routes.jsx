import App from "./App"
import ErrorPage from "./shared/error/ErrorPage"

const Routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: '',
            },
        ],
    },
]
export default Routes