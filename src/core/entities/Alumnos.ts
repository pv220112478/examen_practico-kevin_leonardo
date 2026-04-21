//alumnos
export interface AlumnosProps {
    idAlumno: string;
    nombre: string;
}

export class Alumnos {
    constructor(private props: AlumnosProps) {}
    public getIdAlumno(): string {
        return this.props.idAlumno;
    }

    public getNombre(): string {
        return this.props.nombre;
    }
}