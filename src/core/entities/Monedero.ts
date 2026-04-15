//monedero
export interface MonederoProps {
    idAlumno: string;
    saldo: number;
}

export class Monedero {
    private idAlumno: string;
    private saldo: number;

    constructor(props: MonederoProps) {
        this.idAlumno = props.idAlumno;
        this.saldo = props.saldo;
    }

    public getIdAlumno(): string {
        return this.idAlumno;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    // El método que tus tests están llamando
    public validarMontoRecarga(monto: number): boolean {
        return monto >= 50 && monto <= 500;
    }
}