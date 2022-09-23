import Detalhes from "./detalhes";
import Itens from "./itens";
import Topo from "./topo";

interface Cesta {
    topo: Topo,
    detalhes: Detalhes,
    itens: Itens
};
export default Cesta;