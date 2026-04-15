import { IMonederoRepository } from "../IMonederoRepository";
import { Monedero } from "../../core/entities/Monedero"; 

export class MockMonederoRepository implements IMonederoRepository {
    private static monederos: Map<string, Monedero> = new Map();

    async buscarPorId(id: string): Promise<Monedero | null> {
        const monedero = MockMonederoRepository.monederos.get(id);
        return monedero || null;
    }

    async guardar(monedero: Monedero): Promise<void> {
    if (MockMonederoRepository.monederos.has(monedero.getIdAlumno())) {
        throw new Error("ya existe el monedero");
    }
    MockMonederoRepository.monederos.set(monedero.getIdAlumno(), monedero);
}

    async clear(): Promise<void> {
        MockMonederoRepository.monederos.clear();
    }
}