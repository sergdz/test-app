import Arrows from "./Arrows";
const Buttons = (props) => {
    const {color, text, arrow} = props;
    const componentStyle = {
        backgroundColor: color,
        padding: '10px'
    }
    return (
        <button className="app__button" style={componentStyle}>
            <div className="app__button-text">
                {text}
            </div>
            <Arrows arrow={arrow}/>
        </button>
    )
}
export default Buttons