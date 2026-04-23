//prueba unitaria alumnos
import { Alumnos } from '../core/entities/Alumnos';
test('crear un alumno con id y nombre', () => {
    const alumno = new Alumnos({ idAlumno: 'joven', nombre: 'Kevin' });
    
    console.log('ID del alumno:', alumno.getIdAlumno()); 
    expect(alumno.getIdAlumno()).toBe('joven'); 
    expect(alumno.getNombre()).toBe('Kevin');
});
test('si el idalumno esta siendo duplicado', () => {
    const alumno = new Alumnos({ idAlumno: 'joven', nombre: 'Kevin' });
    const alumno2 = new Alumnos({ idAlumno: 'joven', nombre: 'jose' });
    
    console.log('ID del alumno 1:', alumno.getIdAlumno()); 
    expect(alumno.getIdAlumno()).toBe('joven'); 
    expect(alumno.getNombre()).toBe('Kevin');
    console.log('ID del alumno 2:', alumno2.getIdAlumno()); 
    expect(alumno2.getIdAlumno()).toBe('joven'); 
    expect(alumno2.getNombre()).toBe('jose');

    if(alumno.getIdAlumno()===alumno2.getIdAlumno()){
        console.error("AVISO: El idalumno esta siendo duplicado");
    } 


});

