import "./GlobalHeader.scss";
export function GlobalHeader() {
    const MENU = ["Home", "Dictionary", "Advice"];
    const CreateLink = ({ props }) => {
        return (
            <ul>
                {props.map((el,idx) => (
                    <li key={idx}>
                        <a href="#">{el}</a>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <header id="global_header">
            <nav>
                <CreateLink props={MENU} />
            </nav>
        </header>
    );
}
