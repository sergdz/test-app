import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const Arrows = (props) => {

    const {arrow, color}  = props
    if (arrow === 'left') {
        return <FontAwesomeIcon icon={faArrowLeftLong} style={{color: color}} />

    } else if (arrow === 'right') {
        return <FontAwesomeIcon icon={faArrowRightLong} style={{color: color }} />
    } else {
        return null;
    }

}

export default Arrows