import { useRouteError } from "react-router-dom";


//Route that will handle errors
export const ErrorPage = () => {

    //retrieve route error thrown
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Uh-oh!</h1>
            <p>Sorry, something must have gone wrong</p>
            <i>{error.statusText || error.message}</i>
        </div>
    );
};