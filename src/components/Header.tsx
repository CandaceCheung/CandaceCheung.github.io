import styles from "./styles/Header.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export function Header(): JSX.Element {
    const [clicked, setClicked] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    const handleClick = () => {
        setClicked((current) => {
            return !current;
        });
    };

    const linkClick = () => {
        setClicked(false)
    };

    return(
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <div style={{ cursor: "pointer" }}>
                    {/* <img src={ } alt="" /> */}
                </div>
                {(!isMobile || clicked) && (
                    <nav id="topnav" className={styles.nav}>

                    </nav>
                )}
            </div>
        </header >
    )
}