import Sondagem from './../pages/Sondagem/Sondagem';

export const getSondagem = (sondagemID) => {
    if (sondagemID == 4) {
        return (
            <Sondagem
                sondagemID={4}
                title="Sondagem 4"
                headerImage="/images/sondagem4Header.png"
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
                        isOpen: true,
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
                    firstDescription: `&nbspEsta experiência de <b>Realidade Aumentada</b> permite visualizar, sobre as ruínas, uma <b>rescontrução 3D</b> da casa que aqui existiria.`,
                    secondDescription: `&nbsp;Desloque-se até um dos 3 pontos de visualização, carregue no botão correspondente no mapa acima, aponte a câmara de forma a
                    ficar alinhada com a imagem e clique em alinhar.`
                }]}
            />)
    }

    if (sondagemID == 5) {
        return (<Sondagem sondagemID={5} title="Sondagem 5" />)
    }
}