//monedero
export interface MonederoProps {
    idAlumno: string;
    saldo: number;
}

export class Monedero {
    constructor(private props: MonederoProps) {}
    public getIdAlumno(): string {
        return this.props.idAlumno;
    }
    public getSaldo(): number {
        return this.props.saldo;
    }

    public validarMontoRecarga(monto: number): boolean {
        return monto >= 50 && monto <= 500;
    }
}