import { ScrollPage, Animator, Fade, MoveIn, MoveOut, Sticky, batch, ZoomIn, ZoomOut } from 'react-scroll-motion';

const ThirdPart = () => {
    return (
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), ZoomIn(2, 1), ZoomOut(1, 0))}>
                <h1>Не забувай про пиво і воно не забуде про тебе!</h1>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(20, 25), MoveIn(-1000, 0), MoveOut(0, 100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(40, 25), MoveIn(-1000, 0), MoveOut(0, 100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(60, 25), MoveIn(-1000, 0), MoveOut(0, 100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(80, 25), MoveIn(-1000, 0), MoveOut(0, 100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(80, 75), MoveIn(1000, 0), MoveOut(0, -100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(60, 75), MoveIn(1000, 0), MoveOut(0, -100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(40, 75), MoveIn(1000, 0), MoveOut(0, -100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(20, 75), MoveIn(1000, 0), MoveOut(0, -100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
        </ScrollPage>
    )
}

export default ThirdPart