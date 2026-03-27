import { Alumno } from '../core/entities/Alumnos';

describe('Entidad Alumno', () => {
    test('debería crear un alumno con id y nombre', () => {
        const alumno = new Alumno({ id: '152026', nombre: 'kevin leonardo' });
        
        expect(alumno.id).toBe('152026');
        expect(alumno.nombre).toBe('kevin leonardo');
    });
});