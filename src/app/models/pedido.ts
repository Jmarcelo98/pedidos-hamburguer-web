import { CarneDTO } from "./dto/carneDTO";
import { MolhoDTO } from "./dto/molhoDTO";
import { PaoDTO } from "./dto/paoDTO";
import { Usuario } from "./usuario";

export interface Pedido {
    id: number;
    alface: boolean,
    bacon: boolean;
    cebolaCaramelizada: boolean;
    dataCriacao: Date;
    tomate: boolean;
    concluido: boolean;
    carneDTO: CarneDTO;
    paoDTO: PaoDTO;
    usuarioDTO: Usuario
    molhoDTO: Array<MolhoDTO>;
}