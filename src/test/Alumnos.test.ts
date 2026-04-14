//prueba unitaria alumnos
import { Alumno } from '../core/entities/Alumnos';

describe('Entidad Alumno', () => {
    test('debería crear un alumno con id y nombre', () => {
        const alumno = new Alumno({ id: '152026', nombre: '123' });
        
        expect(alumno.id).toBe('152026');
        expect(alumno.nombre).toBe('kevin leonardo');
    });
});