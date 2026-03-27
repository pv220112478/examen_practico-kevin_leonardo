import { Monedero } from "../entities/Monedero";
import { IMonederoRepository } from "../../infraestructure/IMonederoRepository";

export interface AgregarMonederoInput {
    idAlumno: string;
    montoInicial: number;
}

export class AgregarMonedero {
    // Inyectamos la interfaz que está en infrastructure
    constructor(private monederoRepo: IMonederoRepository) {}

    async ejecutar(input: AgregarMonederoInput): Promise<Monedero> {
        const { idAlumno, montoInicial } = input;

        // 1. Validar si el alumno ya tiene monedero
        const existe = await this.monederoRepo.buscarPorId(idAlumno);
        if (existe) {
            throw new Error(`El alumno ${idAlumno} ya tiene un monedero.`);
        }

        // 2. Crear la entidad (esto dispara las validaciones de 50 a 500)
        const nuevoMonedero = new Monedero({
            idAlumno: idAlumno,
            saldo: montoInicial
        });

        // 3. Guardar a través del repositorio
        await this.monederoRepo.guardar(nuevoMonedero);

        return nuevoMonedero;
    }
}