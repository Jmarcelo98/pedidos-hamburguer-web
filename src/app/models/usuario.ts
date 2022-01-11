export interface Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    senha?: string;
    admin: boolean;
}