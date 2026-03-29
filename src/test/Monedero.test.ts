//test monedero
import { Monedero } from "../core/entities/Monedero";

//objeto necesario para llamar a las funciones que se van a probar
const Objmonedero = new Monedero({ idAlumno: '12345', saldo: 100 });

describe('Pruebas de Nómina Tec-Café', () => {

    //prueba1---------------------------------------------------------
    test('recraga debe ser entre 50 y 500', 
        () => { expect(
                Objmonedero.validarMontoRecarga(50)
        ).toBe(true); });

    //prueba2 --------------------------------------------------------
    test('Recarga mayor a 500 iimpossible', 
        () => { expect(
                Objmonedero.validarMontoRecarga(600)
        ).toBe(false); });

    //prueba3---------------------------------------------------------
    test('Recarga menor a 50 iimpossible', 
        () => { expect(
                Objmonedero.validarMontoRecarga(40)
        ).toBe(false); });
});