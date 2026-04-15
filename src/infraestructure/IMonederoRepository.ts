//imonederorepository
import { Monedero } from "../core/entities/Monedero";

export interface IMonederoRepository {
    buscarPorId(id: string): Promise<Monedero | null>;
    guardar(monedero: Monedero): Promise<void>;
}