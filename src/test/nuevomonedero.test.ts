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
    const input = { idAlumno: "compi", monto: 200 };
    const resultado = await useCase.ejecutar(input);

    //revisa si esta bien escrito el id alumno para luego poder buscarlo
    expect(resultado.getIdAlumno()).toBe("compi");
    
    //busca el idalumno para buscar el compi y si es igual no deberia dar problema
    const guardado = await mockRepo.buscarPorId("compi");
    
    if (!guardado) {
        throw new Error("El monedero debería existir");
    }

    expect(guardado.getSaldo()).toBe(200);
});
});