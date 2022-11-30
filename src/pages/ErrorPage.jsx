import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    //const error = useRouteError();
    //console.error(error);

    return (
        <div id="error-page" className="w-auto h-3/4 p-8 md:p-32">
            <h1 className="text-center text-4xl">Oops!</h1>
            <p className="text-center text-2xl mt-8">Sorry, an unexpected error has occurred.</p>
        </div>
    );
}

export default ErrorPage;
