//caso de uso
import { Monedero } from "../entities/Monedero";
import { IMonederoRepository } from "../../infraestructure/IMonederoRepository";

export interface AgregarMonederoInput {
    idAlumno: string;
    monto: number;
}

export class AgregarMonedero {
    constructor(private readonly repository: IMonederoRepository) {}

    async ejecutar(input: AgregarMonederoInput): Promise<Monedero> {
        const nuevo = new Monedero({ 
            idAlumno: input.idAlumno, 
            saldo: input.monto
        });
        await this.repository.guardar(nuevo);
        return nuevo;
    }
}