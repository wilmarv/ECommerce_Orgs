import DetalhesCesta from "./detalhesCesta";
import ItemCesta from "./itemCesta";

interface Cesta {
    detalhes: DetalhesCesta,
    itens: Array<ItemCesta>
}
export default Cesta;