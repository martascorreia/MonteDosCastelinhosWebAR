import React, { useState, useEffect, useRef } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons"
import "../../index.css"
import "./Sondagem.css"
import { setOrientation, reloadPage, garbageCollect, setFullScreen } from '../../utils/utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AugmentedReality } from 'tabler-icons-react';
import { faVrCardboard, faCube, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SquareButton from '../../components/SquareButton/SquareButton';

function Sondagem({ id, sondagemID, title, headerImage, galleryImages = [], history, ar, vr, mv }) {
    const images = galleryImages.length ? galleryImages : [{ image: headerImage, alt: title }];
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const touchStartX = useRef(null);
    setOrientation("portrait");
    const [hasRefreshed, setHasRefreshed] = useState(localStorage.getItem('hasRefreshed') == 'false' ? false : true);

    const showPreviousImage = () => {
        setActiveImageIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
    };

    const showNextImage = () => {
        setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.changedTouches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null || images.length < 2) return;

        const swipeDistance = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(swipeDistance) < 40) return;
        if (swipeDistance < 0) showNextImage();
        else showPreviousImage();
    };

    useEffect(() => {
        if (!hasRefreshed) {
            localStorage.setItem('hasRefreshed', 'true');
            reloadPage();
            //garbageCollect();
        }
    }, [hasRefreshed]);

    return (
        <div className="Sondagem" id="sondagem">
            <TopButtons backUrl={"/mapa"} />
            <div className="content sondagemPageContent">
                <div className='sondagemHeader'>
                    <div className="sondagemGallery" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchCancel={() => { touchStartX.current = null; }}>
                        <img className='sondagemImage' src={images[activeImageIndex].image} alt={images[activeImageIndex].alt || title} />
                        {images.length > 1 && <>
                            <button className="sondagemGalleryControl sondagemGalleryPrevious" type="button" aria-label="Imagem anterior" onClick={showPreviousImage}>
                                <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
                            </button>
                            <button className="sondagemGalleryControl sondagemGalleryNext" type="button" aria-label="Imagem seguinte" onClick={showNextImage}>
                                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
                            </button>
                            <div className="sondagemGalleryCount" aria-live="polite" aria-atomic="true">{activeImageIndex + 1} / {images.length}</div>
                        </>}
                    </div>
                    <div className='sondagemTitle'>{title}</div>
                </div>
                <div className="sondagemContent">
                    {(ar || vr) &&
                        <div className="sondagemExperiences">
                            {ar && <SquareButton text={"Realidade Aumentada"} icon={<AugmentedReality width={50} height={50} strokeWidth={1.7} />} link="raMapa" onClick={() => setFullScreen(true)} />}
                            {vr && <SquareButton text={"Realidade Virtual"} icon={<FontAwesomeIcon icon={faVrCardboard} />} link="rvMapa" onClick={() => setFullScreen(true)}/>}
                            {mv && <SquareButton text={"Modelo 3D"} icon={<FontAwesomeIcon icon={faCube} />} link="modelo3D" onClick={() => setFullScreen(false)}/>}
                        </div >}
                    <div className="sondagemInfo">
                        <section className="sondagemStory" aria-labelledby={`sondagem-story-${sondagemID}`}>
                            <h2 className="sondagemStoryTitle" id={`sondagem-story-${sondagemID}`}>História</h2>
                            {history.split(/\n\s*\n/).map((paragraph, index) => (
                                <p key={index} className="sondagemStoryParagraph">{paragraph}</p>
                            ))}
                        </section>
                    </div >
                </div >
            </div >
        </div >
    );
}
export default Sondagem;