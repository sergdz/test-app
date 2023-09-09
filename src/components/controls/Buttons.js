import Arrows from "./Arrows";

const Buttons = (props) => {
    const { color, bgColor, text, arrow, className } = props;

    const componentStyle = {
        display: 'flex',
        color: color,
        width: '250px',
        height: '76px',
        fontSize: '12px',
        lineHeight: '12px',
        letterSpacing: '7px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        backgroundColor: bgColor,
        border: 'none',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',


    }

    // Добавляем медиа-запросы для адаптации стилей кнопки на разных экранах.
    const responsiveStyles = {
        '@media (max-width: 768px)': {
            // Ваши стили для экранов шириной до 768px
            backgroundColor: 'lightblue',
        },
        '@media (max-width: 480px)': {
            // Ваши стили для экранов шириной до 480px
            backgroundColor: 'lightpink',
        },
        // Другие медиа-запросы
    };

    return (
        <button className={`app__${className}-button`} style={{ ...componentStyle, ...responsiveStyles }}>
            <div className="app__button-text">
                {text}
            </div>
            <Arrows arrow={arrow} />
        </button>
    )
}





export default Buttons