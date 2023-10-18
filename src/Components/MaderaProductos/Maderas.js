import fenolico1 from '../../../public/assets/fenolico-1.jpg'
import fenolico2 from '../../../public/assets/fenolico-2.jpg'
import fenolico3 from '../../../public/assets/fenolico-3.jpg'
import puntalobra from '../../../public/assets/puntal-obra-1.jpg'
import tablasencofrar1 from '../../../public/assets/tablas-encofrar-1.jpg'
import tablasencofrar2 from '../../../public/assets/tablas-encofrar-2.jpg'
import machimbre1 from '../../../public/assets/machimbre-1.jpg'
import machimbre2 from '../../../public/assets/machimbre-2.jpg'
import machimbre3 from '../../../public/assets/machimbre-3.jpg'
import tirantepino1 from '../../../public/assets/tirante-pino-1.jpg'
import tirantepino2 from '../../../public/assets/tirante-pino-2.jpg'
import tirantepino3 from '../../../public/assets/tirante-pino-3.jpg'
import pino1 from '../../../public/assets/pino-1.jpg'
import pino2 from '../../../public/assets/pino-2.jpg'
import pino3 from '../../../public/assets/pino-3.jpg'
import paraiso1 from '../../../public/assets/paraiso-1.jpg'
import paraiso2 from '../../../public/assets/paraiso-2.jpg'
import paraiso3 from '../../../public/assets/paraiso-3.jpg'
import clavadores1 from '../../../public/assets/clavadores.jpg'
import clavadores2 from '../../../public/assets/clavadores-1x2.jpg'
import clavadores3 from '../../../public/assets/clavadores-1x3.jpg'
import anchico from '../../../public/assets/madera-nativa-anchico.jpg'
import guayubira from '../../../public/assets/madera-nativa-guayubira.jpg'
import cedro from '../../../public/assets/madera-nativa-cedro.jpg'

const Maderas = [
  {
    id: 1,
    name: 'Fenólicos',
    link: 'Fenolicos',
    image: fenolico1,
    image1: fenolico2,
    image2: fenolico3,
    description: 'Los fenólicos son placas de madera de pino o de eucalipto que se utilizan en la construcción de diferentes formas. Gracias a la versatilidad de este material, pueden ser aplicados para encofrados, dividir espacios o cubrir superficies. Actualmente, las placas de fenólicos también suelen usarse para decoraciones en interiores o exteriores. ¿Cuáles son los beneficios de usar fenólicos? Los tableros fenólicos poseen grandes beneficios. Estos tableros contrachapados son ideales para encofrados, escenarios y terrazas al aire libre, rampas o carrocerías de vehículos.Una de las principales características que hacen de los fenólicos uno de los materiales más utilizados en la construcción, es que son resistentes, soportan el agua, humedad y vapor sin perder su forma.'
  },
  {
    id: 2,
    name: 'Pino obra',
    link: 'Pino-obra',
    image: puntalobra,
    image1: tablasencofrar1,
    image2: tablasencofrar2,
    description: 'Los tirantes de pino son piezas estructurales de madera utilizadas para soportar el peso de los techos, los pisos y otros elementos de la construcción. El pino es una madera resistente y duradera que también es fácil de trabajar, lo que la hace ideal para su uso en estructuras de construcción. Los tirantes de pino son una opción popular y duradera para la construcción de techos y estructuras debido a su resistencia y facilidad de trabajo.'
  },
  {
    id: 3,
    name: 'Machimbre',
    link: 'Machimbre',
    image: machimbre1,
    image1: machimbre2,
    image2: machimbre3,
    description: 'El machimbre es un tipo de revestimiento de paredes y techos hecho de tablas de madera de lengua y ranura. Estas tablas de madera se superponen y se unen entre sí mediante una lengüeta que se encaja en una ranura, creando una superficie uniforme y sin juntas visibles. El machimbre se utiliza como revestimiento de paredes y techos interiores, y también se utiliza en exteriores para proteger las fachadas de las casas y edificios contra los elementos. Además de su apariencia atractiva y natural, el machimbre también es duradero, resistente y fácil de mantener, lo que lo convierte en una excelente opción para muchos proyectos de construcción.'
  },
  {
    id: 4,
    name: 'Tirante pino',
    link: 'Tirante-pino',
    image: tirantepino1,
    image1: tirantepino2,
    image2: tirantepino3,
    description: 'Los tirantes de pino son piezas estructurales de madera utilizadas para soportar el peso de los techos, los pisos y otros elementos de la construcción. Están hechos de madera de pino, una especie de madera blanda que se encuentra en abundancia en Argentina. El pino es una madera resistente y duradera que también es fácil de trabajar, lo que la hace ideal para su uso en estructuras de construcción. Los tirantes de pino se pueden encontrar en diferentes dimensiones y grados de calidad, desde tirantes de pino estándar hasta tirantes de pino de alta calidad y resistencia.'
  },
  {
    id: 5,
    name: 'Tablas pino',
    link: 'Tablas-pino',
    image: pino1,
    image1: pino2,
    image2: pino3,
    description: 'Las tablas de pino se pueden utilizar para una variedad de proyectos, como la fabricación de muebles, la construcción de estanterías y la creación de molduras y acabados decorativos en paredes y techos. También se pueden utilizar en proyectos de construcción más grandes, como la construcción de casas y edificios, como revestimiento o como soportes estructurales. En resumen, las tablas de pino son una opción popular y versátil para proyectos de carpintería y construcción en Argentina debido a su disponibilidad, facilidad de trabajo, precio asequible y resistencia adecuada para muchos proyectos.'
  },
  {
    id: 6,
    name: 'Paraiso',
    link: 'Paraiso',
    image: paraiso1,
    image1: paraiso2,
    image2: paraiso3,
    description: 'El paraíso es una especie de madera dura que se caracteriza por su tonalidad marrón-rojiza y su textura uniforme y fina, lo que la hace muy apreciada en la fabricación de muebles y objetos decorativos de alta calidad. Esta madera es muy resistente y duradera, con una densidad y dureza que la hacen adecuada para la fabricación de piezas de gran tamaño y resistencia, como mesas, sillas, puertas y ventanas. Además, el paraíso tiene una alta resistencia a la humedad y a los insectos, lo que lo convierte en una opción popular para muebles de exteriores y para la construcción naval.'
  },
  /*     {
        id: ,
        name: "Molduras",
        image: "/Productos/molduras-1.jpg",
        image1: "/Productos/molduras-2.jpg",
        image2: "/Productos/",
        description: "",
    },
    {
        id: ,
        name: "Listones finger",
        image: "/Productos/listones-finger-1.jpg",
        image1: "/Productos/listones-finger-2.jpg",
        image2: "/Productos/",
        description: "Los listones finger son una opción moderna y popular en la industria de la madera. Se caracterizan por estar compuestos por piezas de madera más pequeñas, unidas mediante un sistema de encaje llamado "finger joint" o junta de dedos, que permite crear listones largos y uniformes a partir de madera de menor tamaño. Esta técnica de unión permite crear una madera más resistente y estable que la madera maciza, lo que la hace ideal para la fabricación de piezas de carpintería y construcción que requieren alta resistencia y estabilidad, como vigas, columnas y revestimientos. Además, al estar fabricados a partir de madera de menor tamaño, los listones finger son una opción más sostenible y económica que la madera maciza. ",
    }, */
  {
    id: 7,
    name: 'Clavadoras cepillados',
    link: 'Clavadoras-cepillados',
    image: clavadores1,
    image1: clavadores2,
    image2: clavadores3,
    description: 'Los clavadores cepillados se refieren a tablas o piezas de madera que han sido sometidas a un proceso de cepillado. El cepillado es una técnica en la que se utiliza una herramienta llamada cepillo eléctrico para alisar y nivelar la superficie de la madera, eliminando irregularidades y obteniendo un acabado más suave y uniforme. Estas maderas cepilladas son muy apreciadas en proyectos de carpintería y construcción, ya que ofrecen varias ventajas. En primer lugar, el proceso de cepillado elimina asperezas y rugosidades, lo que facilita su manipulación y evita posibles astillas al trabajar con ellas. Además, al tener una superficie más lisa, son ideales para aplicar acabados, como pinturas, barnices o lacas, ya que la madera clavadora cepillada ofrece una superficie más receptiva y uniforme para estos tratamientos.'
  },
  {
    id: 8,
    name: 'Maderas nativas',
    link: 'Maderas-nativas',
    image: anchico,
    image1: guayubira,
    image2: cedro,
    description: 'Estas maderas son apreciadas por su durabilidad, resistencia y belleza natural, y se utilizan en la fabricación de muebles, objetos decorativos y piezas de carpintería y construcción de alta calidad. Además, al ser especies autóctonas, las maderas nativas suelen ser más resistentes a las plagas y enfermedades propias de la región, lo que las hace más duraderas y de mayor calidad. Al utilizar maderas nativas, también se fomenta la conservación y el uso sostenible de los recursos forestales de la región, lo que ayuda a proteger el medio ambiente y a mantener la biodiversidad.'
  }
]
export default Maderas
