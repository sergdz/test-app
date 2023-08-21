import Arrows from "./Arrows";


const Buttons = (props) => {
    const {color, bgColor, text, arrow} = props;
    const componentStyle = {
        backgroundColor: bgColor,
        color: color,
        padding: '20px'
    }
    return (
        <button className="app__button" style={componentStyle}>
            <div className="app__button-text">
                {text}
            </div>
            <Arrows arrow={arrow} color={color} />
        </button>
    )
}
export default Buttons