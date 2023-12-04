import { useEffect, useState } from "react";
import "./GlobalHeader.scss";

const MENU = ["Home", "Dictionary", "Advice"];

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

    const CreateLink = ({ props }) => {
        return (
            <ul>
                {props.map((el, idx) => (
                    <li key={idx}>
                        <a href="#">{el}</a>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <header id="global_header" className={headerSlideUp ? "slideUp" : ""}>
            <nav>
                <CreateLink props={MENU} />
            </nav>
        </header>
    );
}
