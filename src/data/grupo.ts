// Datos del Grupo Aponte Rivera.
//
// Las categorías de negocio están confirmadas en CLAUDE.md (15 comercios:
// restaurantes, heladerías, cervecerías, un colegio y una inmobiliaria).
// Los NOMBRES reales de cada comercio aún no los tenemos del cliente:
// TODO(cliente): reemplazar `ejemplos` por los nombres y sedes reales.

export interface CategoriaNegocio {
  slug: string;
  nombre: string;
  descripcion: string;
  /** Ícono: nombre semántico que se dibuja en línea como SVG. */
  icono: 'restaurante' | 'heladeria' | 'cerveceria' | 'colegio' | 'inmobiliaria';
  /** TODO(cliente): nombres reales de los comercios de esta categoría. */
  ejemplos: string[];
}

export const categorias: CategoriaNegocio[] = [
  {
    slug: 'restaurantes',
    nombre: 'Restaurantes',
    descripcion: 'Cocina de autor y sabores de siempre en nuestras mesas.',
    icono: 'restaurante',
    ejemplos: ['Comercio por confirmar'],
  },
  {
    slug: 'heladerias',
    nombre: 'Heladerías',
    descripcion: 'Postres y helados artesanales para cerrar el día.',
    icono: 'heladeria',
    ejemplos: ['Comercio por confirmar'],
  },
  {
    slug: 'cervecerias',
    nombre: 'Cervecerías',
    descripcion: 'Cerveza fría y buen ambiente para encontrarse.',
    icono: 'cerveceria',
    ejemplos: ['Comercio por confirmar'],
  },
  {
    slug: 'educacion',
    nombre: 'Educación',
    descripcion: 'Formación con propósito para las familias de la región.',
    icono: 'colegio',
    ejemplos: ['Colegio por confirmar'],
  },
  {
    slug: 'inmobiliaria',
    nombre: 'Inmobiliaria',
    descripcion: 'Proyectos de vivienda y acompañamiento en cada compra.',
    icono: 'inmobiliaria',
    ejemplos: ['Inmobiliaria por confirmar'],
  },
];

export const grupo = {
  nombre: 'Grupo Aponte Rivera',
  lema: 'Un grupo, muchas experiencias',
  // TODO(cliente): número de comercios y texto de contacto definitivos.
  totalComercios: 15,
  ciudad: 'Colombia',
  email: 'contacto@grupoaponterivera.com', // TODO(cliente): correo real
  urlClubApp: 'https://club.grupoaponterivera.com',
};
