import * as React from "react";
import {Link} from "gatsby";
import * as css404 from "../styles/404.module.css";

const NotFoundPage = () => {
    return (
        <main className={css404.maindiv}>
            <title>Not found</title>
            <h1 className={css404.heading}>Page not found</h1>
            <p className={css404.paragraph}>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>{" "}
                we couldn’t find what you were looking for.
            </p>

            <Link to="/" className={css404.home_button}>
                Go home
            </Link>
        </main>
    );
};

export default NotFoundPage;
