import Arrows from "./Arrows";


const Buttons = (props) => {
    // Деструктуризация пропсов для удобства использования внутри компонента.
    const {bgColor, text, arrow, className} = props;

    // Создание стиля для кнопки с заданным цветом фона и текста.
    const componentStyle = {
        display: 'flex',
        border: 'none',
        backgroundColor: bgColor,
    }

    return (
        // Возвращается JSX элемент кнопки, с применением класса и стилей.
        <button className={`app__${className}-button`} style={componentStyle}>
            {/* Внутри кнопки содержится блок с текстом кнопки. */}
            <div className="app__button-text">
                {text}
            </div>
            {/* Вставка компонента Arrows с передачей параметров arrow и color. */}
            <Arrows arrow={arrow}  />
        </button>
    )
}






export default Buttons