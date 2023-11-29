import './contact.scss'

const Contact = () => {
    return (
        <div>

            <section class="contacts">
                <div class="contacts__group">
                    <h2 class="contacts__title">Офис</h2>
                    <address class="address">
                        <p class="address__line">Адрес: ул. Примерная, 123</p>
                        <p class="address__line">Город: Примерово</p>
                        <p class="address__line">Почтовый индекс: 12345</p>
                    </address>
                </div>

                <div class="contacts__group">
                    <h2 class="contacts__title">Телефон</h2>
                    <p class="contacts__info">Общий: +7 (123) 456-7890</p>
                    <p class="contacts__info">Отдел продаж: +7 (123) 456-7891</p>
                </div>

                <div class="contacts__group">
                    <h2 class="contacts__title">Email</h2>
                    <p class="contacts__info">Общий: info@example.com</p>
                    <p class="contacts__info">Поддержка: support@example.com</p>
                </div>
            <div id="map">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.8367562612!2d30.367885699747635!3d50.40213793558712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1701169759477!5m2!1suk!2sua" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </section>

        </div>
    )
}
export default Contact