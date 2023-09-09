import './tasks.scss';

const Tasks = () => {
    return (
        <div class="app__task">
            <h2 class="app__task-title">Основные задачи</h2>
            <div class="app__task-list">
                <div class="app__task-item">
                    <div class="app__task-sub-item">
                        <h3 class="app__task-number">1</h3>
                        <p class="app__task-description">
                            Создание комфортных условий и повышение качества обслуживания клиентов
                        </p>
                    </div>
                    <div class="app__task-sub-item">
                        <h3 class="app__task-number">2</h3>
                        <p class="app__task-description">
                            Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Tasks