import Button from "./button";
import Container from "./container";
import Image from "next/image";
import photo_meBig from "@/app/images/me/photo_meBig.png";
import {inter, lato} from "./fonts";

export default function Hero() {
    return (
        <Container id="about" otherClass="py-14 grid grid-cols-1 md:grid-cols-2 md:items-center">
            <article className="space-y-4 text-center md:text-left order-2 md:order-1">
                <h4 className={`${inter.className} md:text-sm`}>Hello Everyone!</h4>
                <h1 className={`${lato.className} text-4xl md:text-5xl`}>
                    I&apos;m <small className="text-4xl md:text-5xl text-sky-400">Carlos Santillan</small>
                </h1>
                <h2 className={`${lato.className} text-3xl md:text-4xl`}>Front-End Developer</h2>
                <p className="text-gray-300 max-w-xl md:text-lg">
                    Passionate frontend web developer merging code and design to craft captivating interfaces that
                    bridge aesthetics and functionality. In every line of code, I aim to evoke emotions and drive
                    innovation in the expansive digital realm.
                </p>
                <footer className="flex space-x-4 -ml-4 justify-center md:justify-start md:ml-0">
                    <Button secondary link="https://www.linkedin.com/in/dev-santillan-carlos/">
                        LinkedIn
                    </Button>
                    <Button secondary link="https://github.com/carlossantesp">
                        GitHub
                    </Button>
                    <Button secondary link="mailto:carlos.santesp@gmail.com" alt={false}>
                        carlos.santesp@gmail.com
                    </Button>
                </footer>
            </article>
            <article className="w-1/2 md:w-auto mx-auto md:mr-0 md:order-2">
                <Image src={photo_meBig} alt="Carlos Santillan's photo" />
            </article>
        </Container>
    );
}
