import { Alumnos} from "../core/entities/Alumnos"
import { AgregarMonedero } from "../core/use_case/nuevomonedero";
import { MockMonederoRepository } from "../infraestructure/repositories/MockMonederoRepository";

describe("Caso de Uso: AgregarMonedero", () => {
    let mockRepo: MockMonederoRepository;
    let useCase: AgregarMonedero;
    let alumno: Alumnos;

    beforeEach(() => {
        mockRepo = new MockMonederoRepository();
        useCase = new AgregarMonedero(mockRepo);
        alumno = new Alumnos({idAlumno: "compi", nombre: "kevin"})
    });

    test("Debe crear y guardar un monedero cuando los datos son válidos", async () => {
    const input = { idAlumno: "compi", monto: 200 };
    const resultado = await useCase.ejecutar(input);

    expect(resultado.getIdAlumno()).toBe(alumno.getIdAlumno());
    
    const guardado = await mockRepo.buscarPorId(alumno.getIdAlumno());
    
    expect(guardado).toBeDefined();

    if (guardado) {
        expect(guardado.getSaldo()).toBe(200);
        expect(guardado.getIdAlumno()).toBe(alumno.getIdAlumno());
    }
});
});