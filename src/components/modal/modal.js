import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './modal.scss'

const Modal = (props) => {
    const { src, show, scroll } = props
    return (
        <div className="app__modal-overlay" style={
            {
                display: show ? 'block' : 'none',
            }}
        >

            <div className="app__modal">
                <div className="app__modal-close">

                    <FontAwesomeIcon id='app__modal-close' fill='data' icon={faXmark} size='4x' style={{ color: 'white', padding: '2px' }} />
                </div>
                <img src={src} alt="" />
            </div>
        </div>
    )
}
export default Modal