import { CardLayoutPage } from "../components/CardLayoutPage";
import styles from "./Homepage.module.scss";
import { Termpage, Advicepage } from "../util/wholepage";
export function Homepage() {
    const pageArray = [
        { component: <Termpage />, name: "Term" },
        { component: <Advicepage />, name: "Advice" },
    ];
    const HomeNav = () => {
        return (
            <nav className={styles.home_nav}>
                <h1>index</h1>
                <h1>Term</h1>
                <h1>Tips</h1>
                <h1>About</h1>
                {/* 깃허브아이콘 */}
                {/* 위로 가기 */}
            </nav>
        );
    };
    const Section = ({ children }) => {
        return <section className={styles.section}>{children}</section>;
    };
    const CreateCardLayout = () => {
        return (
            <div className={styles.home_top_container}>
                <div className={styles.card_layout_container}>
                    {pageArray.map((page, idx) => (
                        <CardLayoutPage key={idx} name={page.name}>
                            {page.component}
                        </CardLayoutPage>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <HomeNav />
            <Section>
                <CreateCardLayout />
            </Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
        </>
    );
}
