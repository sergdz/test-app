import spinner from '../img/1.png'
const Spinner =() => {
    const styleComponent = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: '10%'
    }
    return (
        <div className="spinner" style={styleComponent}>
            <img src={spinner} alt="" />
        </div>
    )
}
export default Spinner