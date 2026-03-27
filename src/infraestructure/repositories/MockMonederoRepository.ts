import { IMonederoRepository } from "../IMonederoRepository";
import { Monedero } from "../../core/entities/Monedero"; 

export class MockMonederoRepository implements IMonederoRepository {
    private monederos: Map<string, Monedero> = new Map();

    async buscarPorId(id: string): Promise<Monedero | null> {
        return this.monederos.get(id) || null;
    }

    async guardar(monedero: Monedero): Promise<void> {
        this.monederos.set(monedero.getIdAlumno(), monedero);
    }
}