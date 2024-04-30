import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage () {

    return <div>
        <p>404 Not found</p>

        <Link to='/'>Back to Home Page</Link>
    </div>
}