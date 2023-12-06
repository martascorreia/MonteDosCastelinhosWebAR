import Sondagem from './../pages/Sondagem/Sondagem';

export const getSondagem = (sondagemID) => {
    if (sondagemID == 4) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Habitação 1"
                headerImage="/images/Headers/sondagem4Header.jpg"
                info={getInfo(sondagemID)}
                ra={getAR(sondagemID)}
                rv={getVR(sondagemID)}
            />)
    }

    if (sondagemID == 5) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Habitação 2"
                headerImage="/images/Headers/sondagem5Header.jpg"
                info={getInfo(sondagemID)}
            />)
    }
    if (sondagemID == 8) {
        return (
            <Sondagem
            id={sondagemID}
            sondagemID={sondagemID}
                title="Habitações e Oficinas"
                headerImage="/images/Headers/sondagem8Header.jpg"
                info={getInfo(sondagemID)}
            />)
    }
    if (sondagemID == 9) {
        return (
            <Sondagem
                id={sondagemID}
                sondagemID={sondagemID}
                title="Muralha"
                headerImage="/images/Headers/sondagem9Header.jpg"
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
                isOpen: false,
                title: 'História',
                content: "Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante" +
                    "inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas" +
                    "concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um" +
                    "conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de" +
                    "armazenamento de época romana republicana, colocado a descoberto pelos agentes" +
                    "atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do" +
                    "povoado e se porventura a presença desta peça indicava algum contexto preservado," +
                    "decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a" +
                    "qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem" +
                    "fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"
            },
            {
                id: 2,
                isOpen: false,
                title: 'Escavações',
                content: "Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante" +
                    "inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas" +
                    "concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um" +
                    "conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de" +
                    "armazenamento de época romana republicana, colocado a descoberto pelos agentes" +
                    "atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do" +
                    "povoado e se porventura a presença desta peça indicava algum contexto preservado," +
                    "decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a" +
                    "qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem" +
                    "fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"
            },
            {
                id: 3,
                isOpen: false,
                title: 'Objectos encontrados',
                content: "Elargada ao longo das campanhas subsequentes, para uma"
            }]
    }

    if (sondagemID == 5) {
        return [
            {
                id: 1,
                isOpen: false,
                title: 'História',
                content: "Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante" +
                    "inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas" +
                    "concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um" +
                    "conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de" +
                    "armazenamento de época romana republicana, colocado a descoberto pelos agentes" +
                    "atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do" +
                    "povoado e se porventura a presença desta peça indicava algum contexto preservado," +
                    "decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a" +
                    "qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem" +
                    "fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"
            },
            {
                id: 2,
                isOpen: false,
                title: 'Escavações',
                content: "Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante" +
                    "inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas" +
                    "concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um" +
                    "conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de" +
                    "armazenamento de época romana republicana, colocado a descoberto pelos agentes" +
                    "atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do" +
                    "povoado e se porventura a presença desta peça indicava algum contexto preservado," +
                    "decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a" +
                    "qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem" +
                    "fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"
            },
            {
                id: 3,
                isOpen: false,
                title: 'Objectos encontrados',
                content: "Elargada ao longo das campanhas subsequentes, para uma"
            }]
    }

    if (sondagemID == 8) {
        return [
            {
                id: 1,
                isOpen: false,
                title: 'História',
                content: "Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante" +
                    "inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas" +
                    "concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um" +
                    "conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de" +
                    "armazenamento de época romana republicana, colocado a descoberto pelos agentes" +
                    "atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do" +
                    "povoado e se porventura a presença desta peça indicava algum contexto preservado," +
                    "decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a" +
                    "qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem" +
                    "fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"
            },
            {
                id: 2,
                isOpen: false,
                title: 'Escavações',
                content: "Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante" +
                    "inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas" +
                    "concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um" +
                    "conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de" +
                    "armazenamento de época romana republicana, colocado a descoberto pelos agentes" +
                    "atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do" +
                    "povoado e se porventura a presença desta peça indicava algum contexto preservado," +
                    "decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a" +
                    "qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem" +
                    "fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"
            },
            {
                id: 3,
                isOpen: false,
                title: 'Objectos encontrados',
                content: "Elargada ao longo das campanhas subsequentes, para uma"
            }]
    }

    if (sondagemID == 9) {
        return [
            {
                id: 1,
                isOpen: false,
                title: 'História',
                content: "Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante" +
                    "inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas" +
                    "concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um" +
                    "conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de" +
                    "armazenamento de época romana republicana, colocado a descoberto pelos agentes" +
                    "atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do" +
                    "povoado e se porventura a presença desta peça indicava algum contexto preservado," +
                    "decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a" +
                    "qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem" +
                    "fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"
            },
            {
                id: 2,
                isOpen: false,
                title: 'Escavações',
                content: "Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante" +
                    "inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas" +
                    "concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um" +
                    "conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de" +
                    "armazenamento de época romana republicana, colocado a descoberto pelos agentes" +
                    "atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do" +
                    "povoado e se porventura a presença desta peça indicava algum contexto preservado," +
                    "decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a" +
                    "qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem" +
                    "fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"
            },
            {
                id: 3,
                isOpen: false,
                title: 'Objectos encontrados',
                content: "Elargada ao longo das campanhas subsequentes, para uma"
            }]
    }
}
