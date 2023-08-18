import Arrows from "./controls";
const Buttons = (props) => {
    const {color, arrow} = props;
    return (
        <button>
            <Arrows arrow={arrow}/>
        </button>
    )
}
export default Buttons