import Sondagem from './../pages/Sondagem/Sondagem';
import sondagensContent from './../content/sondagens.json';

const resolveImagePath = (imagePath) => `${import.meta.env.BASE_URL}${imagePath.replace(/^\/+/, '')}`;

export const getSondagem = (sondagemID) => {
    const id = Number(sondagemID);
    const survey = sondagensContent.sondagens.find((item) => item.id === id);
    if (!survey) return null;

    const galleryImages = survey.galleryImages.map((item) => ({
        ...item,
        image: resolveImagePath(item.image),
    }));

    return (
        <Sondagem
            id={id}
            sondagemID={id}
            title={survey.title}
            headerImage={galleryImages[0]?.image}
            galleryImages={galleryImages}
            history={survey.history}
            ar={id === 4 ? getAR(id) : undefined}
            vr={id === 4 ? getVR(id) : undefined}
            mv={id === 4}
        />
    );
}

export const getAR = (sondagemID) => {
    if (sondagemID == 4) {
        return {
            id: 1,
            description: `&nbsp;Esta experiência de <b>Realidade Aumentada</b> permite a visualização, sobre as ruínas, 
                de uma <b>rescontrução 3D</b> da habitação que aqui existíria.<br>`,
            instructions:
                `1. Desloque-se até um dos pontos do mapa; <br>
                2. Pressione o botão correspondente, no mapa ao lado; <br>
                3. Aponte a câmara de forma a ficar alinhada com a imagem no ecrã;<br>
                4. Clique no botão "alinhado".`,
        }
    }
}
export const getVR = (sondagemID) => {
    if (sondagemID == 4) {
        return {
            id: 1,
            description: `&nbspEsta experiência de <b>Realidade Virtual</b> permite a visualização de vários pontos de 
                observação numa <b>rescontrução 3D</b> da casa que aqui existiria.`,
            instructions: `1. Pressione um dos pontos de visualização do modelo virtual; <br>
                                2. Gire a câmara para observar a vista 360º daquele ponto.`
        }
    }
}
