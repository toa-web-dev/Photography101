import { useNavigate } from "react-router-dom";
import styles from "./CardLayoutPage.module.scss";

export function CardLayoutPage(props) {
    const navigate = useNavigate(); // useNavigate를 함수로 호출하고, 반환된 함수를 navigate에 저장
    const handleClick = (e) => {
        e.stopPropagation();
        e.currentTarget.classList.remove(`${styles.deactive}`);
        e.currentTarget.classList.add(`${styles.active}`);
    };
    return (
        <>
            <div
                className={`${styles.container} ${styles.deactive}`}
                onClick={handleClick}
                onAnimationEnd={() => {
                    navigate(`/${props.name}`);
                }}
            >
                {props.children}
            </div>
        </>
    );
}
