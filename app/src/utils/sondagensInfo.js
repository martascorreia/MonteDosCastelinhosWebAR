import Sondagem from './../pages/Sondagem/Sondagem';

export const getSondagem = (sondagemID, tab) => {
    if (sondagemID == 4) {
        return (
            <Sondagem
                sondagemID={4}
                title="Sondagem 4"
                headerImage="/images/Headers/sondagem4Header.png"
                tab={tab}
                tabs={[
                    {
                        id: "info",
                        title: "Info",
                    },
                    {
                        id: "ar",
                        title: "RA",
                    },
                    {
                        id: "vr",
                        title: "RV",
                    }]}
                info={[
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
                    }]}
                ra={[{
                    firstDescription: `&nbspEsta experiência de <b>Realidade Aumentada</b> permite a visualização, sobre as ruínas, de uma <b>rescontrução 3D</b> da casa que aqui existiria.`,
                    instructions: `1. Desloque-se até um dos 3 pontos de visualização <br>
                                        2. Carregue no botão correspondente, no mapa acima <br>
                                        3. Aponte a câmara de forma a ficar alinhada com a imagem no ecrã<br>
                                        4. Clique no botão "alinhado"`
                }]}
                vr={[{
                    firstDescription: `&nbspEsta experiência de <b>Realidade Virtual</b> permite a visualização e exploração de uma <b>rescontrução 3D</b> da casa que aqui existiria.`,
                    instructions: `1. Desloque-se até um dos 3 pontos de visualização <br>
                                    2. Carregue no botão correspondente, no mapa acima <br>
                                    3. Aponte a câmara de forma a ficar alinhada com a imagem no ecrã<br>
                                    4. Clique no botão "alinhado"`
                }]}
            />)
    }

    if (sondagemID == 5) {
        return (
            <Sondagem sondagemID={5}
                title="Sondagem 5"
                headerImage="/images/Headers/sondagem4Header.png" //TODO CHANGE
                tab={tab}
                info={[
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
                    }]}
            />)
    }
    if (sondagemID == 8) {
        return (
            <Sondagem sondagemID={8}
                title="Sondagem 8"
                headerImage="/images/Headers/sondagem4Header.png" //TODO CHANGE
                tab={tab}
                info={[
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
                    }]}
            />)
    }
    if (sondagemID == 9) {
        return (
            <Sondagem sondagemID={9}
                title="Sondagem 9"
                headerImage="/images/Headers/sondagem4Header.png" //TODO CHANGE
                tab={tab}
                info={[
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
                    }]}
            />)
    }
}