import './tasks.scss';

const Tasks = () => {
    return (
        <div className="app__task">
            <h2 className="app__task-title">Основные задачи</h2>
            <div className="app__task-list">
                <div className="app__task-item">
                    <div className="app__task-sub-item">
                        <h3 className="app__task-number">1</h3>
                        <p className="app__task-description">
                            Создание комфортных условий и повышение качества обслуживания клиентов
                        </p>
                    </div>
                    <div className="app__task-sub-item">
                        <h3 className="app__task-number">2</h3>
                        <p className="app__task-description">
                            Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Tasks