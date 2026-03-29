//alumnos
export interface AlumnoProps {
    id: string;
    nombre: string;
}

export class Alumno {
    constructor(private props: AlumnoProps) {}

    get id(): string {
        return this.props.id;
    }

    get nombre(): string {
        return this.props.nombre;
    }
}