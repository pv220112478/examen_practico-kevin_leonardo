//caso de uso
import { Monedero } from "../entities/Monedero";
import { IMonederoRepository } from "../../infraestructure/IMonederoRepository";

export interface AgregarMonederoInput {
    idAlumno: string;
    montoInicial: number;
}

export class AgregarMonedero {
    constructor(private readonly repository: IMonederoRepository) {}

    async ejecutar(input: AgregarMonederoInput): Promise<Monedero> {
        // OPCIÓN A: Si tu clase Monedero recibe un OBJETO (Basado en tu test anterior)
        const nuevo = new Monedero({ 
            idAlumno: input.idAlumno, 
            saldo: input.montoInicial 
        });
        await this.repository.guardar(nuevo);
        return nuevo;
    }
}