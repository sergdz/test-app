import React, { useEffect, useState } from "react";
import request from "../service/request";
import Spinner from "../spinner/spinner";
import Buttons from "../controls/Buttons";
import Modal from "../modal/modal";
import './gallery.scss'

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [amountItems, setAmountItems] = useState(8)
    const [srcImg, setSrcImg] = useState('');

    useEffect(() => {

        const getImg = async () => {
            try {
                const response = await request(`https://api.pexels.com/v1/search?query=buildings&&size=medium&per_page=${amountItems}`);
                setPhotos(response.photos);
                setLoading(true)
                setNewItemLoading(false);
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        };
        getImg();
    }, [amountItems]);

    const renderItems = (arr) => {
        return (
            <div className="app__gallery-list">
                {arr.map((item, i) => (
                    <div key={i} className="app__gallery-list-item">
                        <img src={item.src.original} className="app__gallery-list-item-img" alt={item.alt} />
                    </div>

                ))}
            </div>
        );
    }

    const loadItems = (e) => {

        switch (e.target.className) {
            case 'app__gallery-button':
                setAmountItems(state => (
                    state + 8
                    ))
                    setNewItemLoading(true)
                break;
            case 'app__gallery-list-item-img':
                setSrcImg(e.target.src)
                document.body.classList.add('modal-open')
                setShowModal(state => !state)
                break;
            case 'app__modal-overlay':
                setShowModal(false);
                document.body.classList.remove('modal-open')
                break;

            default:
                break;
        }

        switch (e.target.tagName) {
            case 'path':
                setShowModal(false);
                document.body.classList.remove('modal-open')
                break;
            case 'svg':
                setShowModal(false);
                document.body.classList.remove('modal-open')
                break;

            default:
                break;
        }

    }

    return (
        <>

            <div className="app__gallery" onClick={loadItems}>
                <Modal src={srcImg} show={showModal} />

                {loading ? renderItems(photos) : <Spinner />}
                <>
               {newItemLoading? <Spinner/> : null}
                <Buttons text={'Еще'} className={'gallery'} />
                </>

            </div>
        </>
    );
}

export default Gallery;
