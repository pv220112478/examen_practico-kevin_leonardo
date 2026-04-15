//prueba unitaria alumnos
import { Alumno } from '../core/entities/Alumnos';
test('crear un alumno con id y nombre', () => {
    const alumno = new Alumno({ idAlumno: '152026', nombre: 'Kevin' });
    
    console.log('ID del alumno:', alumno.idAlumno);
    expect(alumno.idAlumno).toBe('152026'); 
    expect(alumno.nombre).toBe('Kevin');
});