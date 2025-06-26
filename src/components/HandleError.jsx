import { useRouteError } from "react-router-dom";


export const HandleError = () => {
    const routeError = useRouteError();
    return(
        <>
            <div className="flex flex-col my-16 text-2xl font-bold text-red-500 justify-center items-center p-8">
                <h1>{routeError.data}</h1>
                <h1>{routeError.status}</h1>
                <h1>{routeError.statusText}</h1>
            </div>
        </>
    )
}