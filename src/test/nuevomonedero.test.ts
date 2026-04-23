import { Alumnos} from "../core/entities/Alumnos"
import { AgregarMonedero } from "../core/use_case/nuevomonedero";
import { MockMonederoRepository } from "../infraestructure/repositories/MockMonederoRepository";

describe("Caso de Uso: AgregarMonedero", () => {
    let mockRepo: MockMonederoRepository;
    let useCase: AgregarMonedero;
    let alumno: Alumnos;
    let alumno2: Alumnos;

    beforeEach(() => {
        mockRepo = new MockMonederoRepository();
        useCase = new AgregarMonedero(mockRepo);
        alumno = new Alumnos({idAlumno: "compi", nombre: "kevin"})
        alumno2 = new Alumnos({idAlumno: "compi", nombre: "kevin"})
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
test("los monederos son iguales", async () => {
    const input = { idAlumno: "compi", monto: 200 };
    const resultado = await useCase.ejecutar(input);
    expect(resultado.getIdAlumno()).toBe(alumno.getIdAlumno());
    const guardado = await mockRepo.buscarPorId(alumno.getIdAlumno());
    expect(guardado).toBeDefined();
    //----------------------------------------------------------
    const input2 = { idAlumno: "compi", monto: 300 };
    const resultado2 = await useCase.ejecutar(input2);
    expect(resultado2.getIdAlumno()).toBe(alumno2.getIdAlumno());
    const guardado2 = await mockRepo.buscarPorId(alumno2.getIdAlumno());
    expect(guardado2).toBeDefined();
    if (resultado.getIdAlumno===resultado2.getIdAlumno) {
        console.error("AVISO: El idalumno esta siendo duplicado");
    }
    
});
});