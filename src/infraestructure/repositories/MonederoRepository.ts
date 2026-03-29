//monederorepository
import { Monedero } from "../../core/entities/Monedero"

export interface IMonederoRepository {
    guardar(monedero: Monedero): Promise<void>;
    buscarPorId(idAlumno: string): Promise<Monedero | null>;
}