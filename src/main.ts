//main
import { AgregarMonedero } from "../src/core/use_case/nuevomonedero"
import { MockMonederoRepository } from "../src/infraestructure/repositories/MockMonederoRepository";

async function ejecutar() {
    const repo = new MockMonederoRepository();
    const useCase = new AgregarMonedero(repo);

    const datos = { idAlumno: "ALU-2024", montoInicial: 100 };

    try {
        console.log("--- Intento 1 ---");
        await useCase.ejecutar(datos);
        console.log("Primer monedero creado con éxito.");

        console.log("--- Intento 2 (Mismo ID) ---");
        await useCase.ejecutar(datos); 
        
    } catch (error: any) {
        console.error("ERROR CAPTURADO:", error.message);
    }
}

ejecutar();