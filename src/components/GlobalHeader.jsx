import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GlobalHeader.scss";

const MENU = ["home", "term", "advice"];

export function GlobalHeader() {
    const [headerSlideUp, setHeadereSlideUp] = useState(false);
    useEffect(() => {
        let prevScrollPosition = Math.trunc(window.scrollY);

        const handleScroll = () => {
            const currentScrollPosition = Math.trunc(window.scrollY);

            const isScrollingDown = currentScrollPosition > prevScrollPosition;

            setHeadereSlideUp(isScrollingDown ? true : false);

            prevScrollPosition = Math.trunc(currentScrollPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const CreateLink = () => {
        return (
            <ul>
                {MENU.map((el, idx) => (
                    <li key={idx}>
                        <Link to={el === "home" ? "/" : `/${el}`}>
                            {el.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <header id="global_header" className={headerSlideUp ? "slideUp" : ""}>
            <nav>
                <CreateLink />
            </nav>
        </header>
    );
}
