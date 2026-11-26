// Datos del Club Aponte Rivera para la landing.
//
// REGLA DE NEGOCIO (ver CLAUDE.md del repo fidelizacion-GEAR):
//  - Los puntos son ESTATUS, no moneda. No se canjean ni se gastan: solo
//    determinan el nivel. No usar lenguaje de "canjear puntos" aquí.
//  - Los umbrales de puntos son SUPUESTOS DE DISEÑO (TODO cliente), no
//    reglas cerradas. Se muestran como referencia, no como promesa.
//  - Membresía confirmada: solo Diamante, $49.900/mes o $499.000/año.

export interface Nivel {
  slug: 'bronce' | 'plata' | 'oro' | 'diamante';
  nombre: string;
  rombos: number;
  /** TODO(cliente): umbral real de puntos. Hoy es supuesto de diseño. */
  desde: string;
  gancho: string;
}

export const niveles: Nivel[] = [
  {
    slug: 'bronce',
    nombre: 'Bronce',
    rombos: 1,
    desde: 'Al registrarte',
    gancho: 'Entras al Club y empiezas a sumar desde tu primera compra.',
  },
  {
    slug: 'plata',
    nombre: 'Plata',
    rombos: 2,
    desde: '500 pts*',
    gancho: 'Beneficios en los comercios del grupo y mejores sorpresas.',
  },
  {
    slug: 'oro',
    nombre: 'Oro',
    rombos: 3,
    desde: '1.500 pts*',
    gancho: 'Reconocimiento preferente y beneficios de mayor valor.',
  },
  {
    slug: 'diamante',
    nombre: 'Diamante',
    rombos: 4,
    desde: '3.000 pts*',
    gancho: 'El nivel más alto. También se alcanza por membresía o por evento.',
  },
];

export interface Paso {
  titulo: string;
  texto: string;
}

export const comoFunciona: Paso[] = [
  {
    titulo: 'Regístrate gratis',
    texto:
      'Te identificas con tu tipo y número de documento y creas un PIN. Sin costo, sin letra menuda.',
  },
  {
    titulo: 'Compra en el grupo',
    texto:
      'Cada compra en cualquiera de los comercios del Grupo Aponte Rivera suma puntos a tu cuenta.',
  },
  {
    titulo: 'Sube de nivel',
    texto:
      'Tus puntos definen tu nivel: Bronce, Plata, Oro o Diamante. Entre más acumulas, mejor te tratamos.',
  },
  {
    titulo: 'Disfruta tus beneficios',
    texto:
      'Muestra tu credencial en caja y recibe los beneficios de tu nivel. Los puntos son estatus, no se gastan.',
  },
];

export const formasDeSubir = [
  {
    titulo: 'Por consumo',
    texto: 'Acumulas puntos con tus compras y subes de nivel de forma automática.',
  },
  {
    titulo: 'Por membresía',
    texto:
      'Te suscribes a Diamante y accedes al nivel más alto mientras tu membresía esté vigente.',
  },
  {
    titulo: 'Por evento',
    texto: 'Comprar un inmueble con el grupo te otorga Diamante por un año.',
  },
];

export const membresia = {
  // Confirmado por el cliente (issue #1, decisión 8).
  nivel: 'Diamante',
  mensual: '$49.900',
  anual: '$499.000',
  ahorroAnualTexto: 'Pagas 10 meses y llevas 12',
};

/** Los puntos caducan al año (confirmado: 1 año calendario). */
export const vigenciaPuntosTexto = 'Tus puntos tienen vigencia de 1 año.';
