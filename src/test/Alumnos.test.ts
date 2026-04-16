//prueba unitaria alumnos
import { Alumnos } from '../core/entities/Alumnos';
test('crear un alumno con id y nombre', () => {
    const alumno = new Alumnos({ idAlumno: '152026', nombre: 'Kevin' });
    
    console.log('ID del alumno:', alumno.getIdAlumno);
    expect(alumno.getIdAlumno).toBe('152026'); 
    expect(alumno.getNombre).toBe('Kevin');
});