import { AgregarMonedero } from "../core/use_case/nuevomonedero";
import { MockMonederoRepository } from "../infraestructure/repositories/MockMonederoRepository";

describe("Caso de Uso: AgregarMonedero", () => {
    let mockRepo: MockMonederoRepository;
    let useCase: AgregarMonedero;

    beforeEach(() => {
        mockRepo = new MockMonederoRepository();
        useCase = new AgregarMonedero(mockRepo);
    });

    test("Debe crear y guardar un monedero cuando los datos son válidos", async () => {
    const input = { idAlumno: "compi", montoInicial: 200 };
    const resultado = await useCase.ejecutar(input);

    // Si usas Getters
    expect(resultado.getIdAlumno()).toBe("compi");
    
    const guardado = await mockRepo.buscarPorId("compi");
    
    // El "Type Guard" para que TS no llore por el posible 'null'
    if (!guardado) {
        throw new Error("El monedero debería existir");
    }

    expect(guardado.getSaldo()).toBe(200);
});
});