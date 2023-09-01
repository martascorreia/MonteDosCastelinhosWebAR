import Sondagem from './../pages/Sondagem/Sondagem';

export const getSondagemInfo = (sondagemID) => {
    if (sondagemID == 4) {
        return (
            <Sondagem
                sondagemID={4}
                title="Sondagem 4"
                tabs={[
                    {
                        title: "Informação",
                        icon: ""
                    },
                    {
                        title: "Realidade Aumentada",
                        icon: `<AugmentedReality size={60}
                        strokeWidth={1.5} />`
                    },
                    {
                        title: "Realidade Virtual",
                        icon: ""
                    }]}
                VRurl="/MonteDosCastelinhosWebAR/sondagem4/rv"
                ARurl="/MonteDosCastelinhosWebAR/sondagem4/ra" //TODO switch to sondagem 4
                accordions={
                    [{
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
                        isOpen: false,
                        title: 'Objectos encontrados',
                        content: "Elargada ao longo das campanhas subsequentes, para uma"
                    }
                    ]}
            />)
    }

    if (sondagemID == 5) {
        return (<Sondagem sondagemID={5} title="Sondagem 5" />)
    }
}