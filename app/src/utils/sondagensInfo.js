import Sondagem from './../pages/Sondagem/Sondagem';
import sondagem4Header from './../resources/images/headers/sondagem4Header.jpg'
import sondagem5Header from './../resources/images/headers/sondagem5Header.jpg'
import sondagem8Header from './../resources/images/headers/sondagem8Header.jpg'
import sondagem9Header from './../resources/images/headers/sondagem9Header.jpg'

export const getSondagem = (sondagemID) => {
    if (sondagemID == 4) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Habitação A"
                headerImage={sondagem4Header}
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
                headerImage={sondagem5Header}
                info={getInfo(sondagemID)}
            />)
    }
    if (sondagemID == 8) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Habitações e Oficinas"
                headerImage={sondagem8Header}
                info={getInfo(sondagemID)}
            />)
    }
    if (sondagemID == 9) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Muralha"
                headerImage={sondagem9Header}
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
