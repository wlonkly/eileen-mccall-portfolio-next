import Image from "next/image";
import styles from "./IntroSection.module.css";
import GitHubLogo from "../icons/GithubLogo";
import MastodonLogo from "../icons/MastodonLogo";
import LinkedinLogo from "../icons/LinkedInLogo";
import EmailIcon from "../icons/EmailIcon";
import headshotPng from "@public/headshot.png";

export default function IntroSection () {
    return (
        <section className={styles.intro}>
        <div className={styles.intro__container}>
            <Image
                alt="headshot" 
                src={headshotPng} 
                className={styles.intro__image}
            />
            <div className={styles.intro__text}>
                <h1>
                    <span className={styles.intro__intro}>
                        Hello! I'm
                    </span>
                    <span className={styles.intro__name}>
                        Eibhlìn<br />NicColla
                    </span>
                </h1>
                <ul className={styles.intro__socials}>
                    <li>
                        <a 
                            className="icon" 
                            href="https://github.com/EibhlinNicColla" 
                            rel="noopener noreferrer" 
                            target="_blank"
                        >
                            <GitHubLogo />
                        </a>
                    </li>
                    <li>
                        <a 
                            className="icon" 
                            href="https://tech.lgbt/@eibhlinniccolla" 
                            rel="noopener noreferrer" 
                            target="_blank"
                        >
                            <MastodonLogo />
                        </a>
                    </li>
                    <li>
                        <a 
                            className="icon" 
                            href="https://www.linkedin.com/in/eileenmccall/" 
                            rel="noopener noreferrer" 
                            target="_blank"
                        >
                            <LinkedinLogo />
                        </a>
                    </li>
                    <li>
                        <a className="icon" href="mailto:eibhlinniccolla@gmail.com">
                            <EmailIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <p className={styles.intro__description}>I'm an American web developer, Gaelic learner, and soon-to-be Cape Bretoner. I'm out to help small businesses and endangered langauges thrive through quality software, apps, and websites.</p>
        <p className={styles.intro__description}>This app is a work in progress, follow along and feel free to submit any issues <a href="https://github.com/eibhlinniccolla/eileen-mccall-portfolio-next" rel="noopener no referrer" target="_blank">here.</a></p>
    </section>
    );
}