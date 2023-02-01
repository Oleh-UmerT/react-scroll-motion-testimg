import { ScrollPage, Animator, Fade, MoveIn, Sticky, batch, ZoomOut } from 'react-scroll-motion';
const FirstPart = () => {
    return (
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(50, 30), MoveIn(0, 100), ZoomOut(1, 0))}>
                <h1>Начебто звичайний келих пива</h1>
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 45), ZoomOut(1, 0))}>
                <img src='./images/pivo_1.jpg' alt="" />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 63), MoveIn(0, -100), ZoomOut(1, 0))}>
                <h1>Але скільки задоволення він може принести в кінці робочої неділі</h1>
            </Animator>
        </ScrollPage>
    )
}

export default FirstPart