import { AgregarMonedero } from "../src/core/use_case/nuevomonedero";
import { MockMonederoRepository } from "../src/infraestructure/repositories/MockMonederoRepository";

async function ejecutarPrueba() {
    console.log("--- Iniciando Sistema Tec-Café ---");

    const repo = new MockMonederoRepository();

    const casoDeUso = new AgregarMonedero(repo);

    try {
        console.log("Intentando crear monedero...");

        const resultado = await casoDeUso.ejecutar({
            idAlumno: "ALU-2024",
            montoInicial: 150
        });

        console.log("Monedero creado con éxito!");
        console.log(`ID Alumno: ${resultado.getIdAlumno()}`);
        console.log(`Saldo inicial: $${resultado.saldoActual}`);

    } catch (error: any) {
        console.error("Error en el proceso:", error.message);
    }
}

ejecutarPrueba();