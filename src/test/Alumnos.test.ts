//prueba unitaria alumnos
import { Alumno } from '../core/entities/Alumnos';

describe('Entidad Alumno', () => {
    test('debería crear un alumno con id y nombre', () => {
        const alumno = new Alumno({ idAlumno: '152026', nombre: '123' });
        
        expect(alumno.idAlumno).toBe('152026');
        expect(alumno.nombre).toBe('kevin leonardo');
    });
});