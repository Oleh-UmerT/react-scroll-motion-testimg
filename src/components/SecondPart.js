import { ScrollPage, Animator, Fade, MoveIn, MoveOut, Sticky, batch, ZoomIn, ZoomOut } from 'react-scroll-motion';

const SecondPart = () => {
    return (
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(10, 45), MoveIn(-100, 100), MoveOut(-100, -100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 30), MoveIn(0, -100), ZoomIn(0, 1), ZoomOut(1, 0))}>
                <h1>Пиво може допомогти тобі в сімейних стосунках</h1>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 50), MoveIn(0, 100), ZoomIn(0, 1), ZoomOut(1, 0))}>
                <h1>Чи прийняти рішення коли недостає сміливості</h1>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(90, 45), MoveIn(100, 100), MoveOut(100, -100))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
        </ScrollPage>
    )
}

export default SecondPart