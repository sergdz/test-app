import img from '../img/Rectangle9.jpg';
import img1 from '../img/Rectangle8.jpg';
import img2 from '../img/Rectangle10.jpg';
import Buttons from '../controls/Buttons';

const AboutCompany = () => {
    return (
        <div className="app__about">
            <img className="app__about-img" src={img} alt="" />
            <img className="app__about-img" src={img1} alt="" />
            <img className="app__about-img" src={img2} alt="" />

            <div className="app__about-text">
                <h2 className="app__about-text-title"> О компании</h2>
                <p className="app__about-text-subtext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum rem ducimus architecto quia cupiditate magni tempora
                    dolore voluptates, suscipit assumenda facere repudiandae! Molestiae
                    illo voluptas minus nulla omnis perferendis. Porro ullam ipsam rerum
                    facere, rem quas deleniti, facilis excepturi, doloremque cupiditate error
                    saepe totam? Quia dolor harum natus nam sunt maiores aut voluptatibus quo
                    placeat ducimus cumque molestias, nemo, voluptate voluptatem! Odio consequatur,
                    id a libero necessitatibus ipsa dolores perspiciatis.
                </p>
                <Buttons  arrow={'right'} color={'white'} text={'Читать'} />
            </div>
        </div>
    )
}

export default AboutCompany