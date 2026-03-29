//mockmonederorepository
import { IMonederoRepository } from "../IMonederoRepository";
import { Monedero } from "../../core/entities/Monedero"; 

export class MockMonederoRepository implements IMonederoRepository {
    // El cambio clave es añadir 'static'
    private static monederos: Map<string, Monedero> = new Map();

    async buscarPorId(id: string): Promise<Monedero | null> {
        // Accedemos a través de la clase (MockMonederoRepository)
        return MockMonederoRepository.monederos.get(id) || null;
    }

    async guardar(monedero: Monedero): Promise<void> {
        MockMonederoRepository.monederos.set(monedero.getIdAlumno(), monedero);
    }
}