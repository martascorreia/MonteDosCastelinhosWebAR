import Sondagem from './../pages/Sondagem/Sondagem';
import sondagem4Photo from './../resources/images/gallery/sondagem4-01.jpg'
import sondagem4Photo2 from './../resources/images/gallery/sondagem4-02.jpg'
import sondagem4Photo3 from './../resources/images/gallery/sondagem4-03.jpg'
import sondagem4Photo4 from './../resources/images/gallery/sondagem4-04.jpg'
import sondagem4Photo5 from './../resources/images/gallery/sondagem4-05.jpg'
import sondagem5Photo from './../resources/images/gallery/sondagem5-01.jpg'
import sondagem5Photo2 from './../resources/images/gallery/sondagem5-02.png'
import sondagem5Photo3 from './../resources/images/gallery/sondagem5-03.png'
import sondagem8Photo from './../resources/images/gallery/sondagem8-01.jpg'
import sondagem8Photo2 from './../resources/images/gallery/sondagem8-02.png'
import sondagem8Photo3 from './../resources/images/gallery/sondagem8-03.png'
import sondagem8Photo4 from './../resources/images/gallery/sondagem8-04.png'
import sondagem9Photo from './../resources/images/gallery/sondagem9-01.jpg'
import sondagem9Photo2 from './../resources/images/gallery/sondagem9-02.png'

export const getSondagem = (sondagemID) => {
    if (sondagemID == 4) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Habitação A"
                headerImage={sondagem4Photo}
                galleryImages={[sondagem4Photo, sondagem4Photo2, sondagem4Photo3, sondagem4Photo4, sondagem4Photo5]}
                info={getInfo(sondagemID)}
                ar={getAR(sondagemID)}
                vr={getVR(sondagemID)}
                mv={true}
            />)
    }

    if (sondagemID == 5) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Habitação B"
                headerImage={sondagem5Photo}
                galleryImages={[sondagem5Photo, sondagem5Photo2, sondagem5Photo3]}
                info={getInfo(sondagemID)}
            />)
    }
    if (sondagemID == 8) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Habitações e Oficinas"
                headerImage={sondagem8Photo}
                galleryImages={[sondagem8Photo, sondagem8Photo2, sondagem8Photo3, sondagem8Photo4]}
                info={getInfo(sondagemID)}
            />)
    }
    if (sondagemID == 9) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Muralha"
                headerImage={sondagem9Photo}
                galleryImages={[sondagem9Photo, sondagem9Photo2]}
                info={getInfo(sondagemID)} s
            />)
    }
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

export const getInfo = (sondagemID) => {
    if (sondagemID == 4) {
        return [
            {
                id: 1,
                isOpen: true,
                title: 'História',
                content: "A Habitação A, ou Sondagem 4, foi explorada pela primeira vez em 2008, " +
                    "na primeira campanha realizada ao Monte dos Castelinhos após " +
                    " a descoberta de um grupo específico de fragmentos cerâmicos conectados no solo." +
                    " Mais tarde, identificou-se que esta escavação continha edifícios residenciais, " +
                    "sendo que sua construção principal apresentava características de uma Domus, casas " +
                    "habitadas por famílias romanas mais abastadas. <br/><br/>" +
                    "&nbsp;É importante referir que o caminho atual " +
                    "da montanha passa por parte desta escavação, então, embora não esteja totalmente à descoberta, " +
                    "foram feitas sondagens para revelar as ruínas restantes."
            }]
    }

    if (sondagemID == 5) {
        return [
            {
                id: 1,
                isOpen: true,
                title: 'História',
                content: "A Habitação B, ou Sondagem 5, foi iniciada numa campanha de 2009 devido à 'existência de uma dispersão " +
                " invulgar de materiais de construção claramente importados da época romana e cerâmicas finas'. " +
                "Esta área também contém, entre outras particularidades, edifícios residenciais."
            }]
    }

    if (sondagemID == 8) {
        return [
            {
                id: 1,
                isOpen: true,
                title: 'História',
                content: "A área de Habitações e Oficinas, ou Sondagem 8 apenas começou numa campanha de 2016, " +
                "após muitos anos de recolha de materiais que indicavam que esta área poderia apresentar resultados " +
                "promissores. Os arqueólogos descrevem este local de escavação como tendo ultrapassado as suas melhores " +
                "expetativas, revelando-se bastante frutífero, com contextos e estruturas bem preservados. Em resumo, " +
                "esta área contém ruínas de edifícios residenciais e comerciais que ladeiam uma rua."
            }]
    }

    if (sondagemID == 9) {
        return [
            {
                id: 1,
                isOpen: true,
                title: 'História',
                content: "&nbsp;A Muralhada, ou Sondagem 9, foi explorada na última campanha, em 2018, " +
                    "numa área que parecia corresponder à zona melhor preservada da hipotética muralha. " +
                    "Desde o início do projeto Monte dos Castelinhos, ficou claro que o local teria um sistema " +
                    "defensivo amplo e complexo. No entanto, apesar dessa percepção, os dados eram bastante escassos. " +
                    "A Sondagem 9, que agora mostra parte da fortificação do assentamento, foi iniciada como uma forma de " +
                    "esclarecer essas suspeitas. "
            }]
    }
}
