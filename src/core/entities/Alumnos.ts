//alumnos
export class Alumno {
    public idAlumno: string;
    public nombre: string;

    constructor(datos: { idAlumno: string; nombre: string }) {
        this.idAlumno = datos.idAlumno;
        this.nombre = datos.nombre;
    }
}