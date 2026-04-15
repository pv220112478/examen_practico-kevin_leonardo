//main
import { AgregarMonedero } from "../src/core/use_case/nuevomonedero"
import { MockMonederoRepository } from "../src/infraestructure/repositories/MockMonederoRepository";

async function ejecutar() {
    const repo = new MockMonederoRepository();
    const useCase = new AgregarMonedero(repo);

    const datos = { idAlumno: "ALU-2024", monto: 100 };
    const datos2 = { idAlumno: "ALU-2023", monto: 100 };

    try {
    console.log("--- Intento 1 ---");
    await useCase.ejecutar(datos);
    console.log("Primer monedero creado con éxito.");

    console.log("--- Intento 2 ---");
    await useCase.ejecutar(datos2); 
    console.log("segundo monedero creado con éxito.");

    console.log("--- Intento 3 mismo monedero que el 2 ---");
    await useCase.ejecutar(datos2); 
    
} catch (error: any) {
    if (error.message.includes("already exists") || error.code === 409) {
        console.error("AVISO: El monedero ya existe, no se pudo crear por segunda vez.");
    } else {
        console.error("ERROR INESPERADO:", error.message);
    }
}
}

ejecutar();