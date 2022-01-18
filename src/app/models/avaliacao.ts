import { Pedido } from "./pedido";
import { Usuario } from "./usuario";

export interface Avaliacao {
    id: number;
    nota: number;
    avaliacao: string;
    usuario: Usuario;
    idPedido: number;
}