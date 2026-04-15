//test monedero
import { Monedero } from "../core/entities/Monedero";

describe('Pruebas de Nómina Tec-Café', () => {
    // Creamos la instancia dentro o fuera, pero con el formato de objeto correcto
    const Objmonedero = new Monedero({ idAlumno: '12345', saldo: 100 });

    test('recarga debe ser entre 50 y 500', () => { 
        expect(Objmonedero.validarMontoRecarga(50)).toBe(true); 
    });

    test('Recarga mayor a 500 imposible', () => { 
        expect(Objmonedero.validarMontoRecarga(600)).toBe(false); 
    });

    test('Recarga menor a 50 imposible', () => { 
        expect(Objmonedero.validarMontoRecarga(40)).toBe(false); 
    });
});