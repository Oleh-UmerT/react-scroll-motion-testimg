import { ScrollPage, Animator, Fade, MoveOut, Sticky, batch, ZoomOut } from 'react-scroll-motion';

const Header = () => {
    return (
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(50, 8), MoveOut(1000, 0))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 8), MoveOut(-1000, 0))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(70, -23), MoveOut(0, 1000))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(30, -23), MoveOut(0, 1000))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(120, -23), MoveOut(-1400, 1000))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(-20, -23), MoveOut(1400, 1000))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 25), ZoomOut(1, 0))}>
                <h1>ПИВО дуже вижливе!</h1>
            </Animator>
        </ScrollPage>
    )
}

export default Header