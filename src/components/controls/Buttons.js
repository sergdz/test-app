import Arrows from "./Arrows";


const Buttons = (props) => {
    const {color, bgColor, text, arrow, className} = props;
    const componentStyle = {
        backgroundColor: bgColor,
        color: color,
    }
    return (
        <button className={`app__${className}-button`} style={componentStyle}>
            <div className="app__button-text">
                {text}
            </div>
            <Arrows arrow={arrow} color={color} />
        </button>
    )
}
export default Buttons