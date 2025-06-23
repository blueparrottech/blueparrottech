 
import ToolCard from '@/components/tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';
import Head from 'next/head';
 
 
 

export default function PlumbersDirectory() {
   

  return (
    <div className=" border rounded-lg m-1 bg-slate-700 mx-64  px-4 py-8">
      
      <Link  className="bg-lime-300 p-4 rounded-xl shadow-lg" href="https://www.limeparrottech.site/"> Return to Homepage     
      </Link>


        <title>Detalles Almacén de Juguetes- Juguetería de San Luis</title>
        <Head>
        <link
          rel="canonical"
          href="https://www.limeparrottech.site/detalles-jugueteria"
          key="canonical"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-white text-center">Detalles Almacén de Juguetes</h1>
      <h2 className="text-2xl font-semibold mb-6 text-white text-center">- Juguetería de San Luis</h2>
      <div className="  justify-center flex flex-wrap">
      
      <p className="   text-lg w-7/12 text-gray-100 mb-8 text-center">
Explora una colección de juguetes diseñados para inspirar la imaginación y la aventura.
      </p>
      



      <div className="w-full flex justify-center space-x-4 mb-12">
    <a
      href="#bay-area"
      className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
    >
      Detalles Juguetería
    </a>

 



 


  </div>



      </div>







      <div className="mb-24 w-max-sm">
  <div className="flex items-center justify-between mb-4">
    <h2   id="bay-area" className="text-2xl font-semibold text-gray-100">
      GenFoo
    </h2>
    <Link href="https://www.detallesjugueteria.com.ar/">
    <button className="relative overflow-hidden ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
      <span className="relative z-10">Visitar Detalles Almacén de Juguetes</span>
      <span className="absolute inset-0 rounded border-2 border-transparent animate-borderTrail"></span>
    </button>
    </Link>
  </div>

  <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎀 Muñecas y Figuras Coleccionables</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Muñecas Disney Princesas Bailarinas (Mattel)</li>
            <li>Sylvanian Families Casa Grande con Luces</li>
            <li>Kweenies (muñecas inclusivas)</li>
            <li>Hello Kitty figuras y sets</li>
            <li>Muñecos de acción de películas y series</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🤖 Juguetes Interactivos y Electrónicos</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Furby (edición 2023)</li>
            <li>Bitzee (mascota digital)</li>
            <li>Dinosaurio Robot EPOCH</li>
            <li>Fingerlings</li>
            <li>Consolas Pop-It electrónicas</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🌈 Juguetes Sensoriales y Pop‑Its</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Pop-Its clásicos (formas, colores)</li>
            <li>Alfombras sensoriales</li>
            <li>Fidget toys surtidos</li>
            <li>Pulseras y anillos Pop‑It</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🔬 Juguetes Educativos y STEM</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Bloques Rasti y Lego</li>
            <li>Kits de ciencia y química</li>
            <li>Juegos de robótica para niños</li>
            <li>Juegos de programación básica</li>
            <li>Pizarras mágicas y didácticas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">☀️ Aire Libre y Verano</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Autitos plásticos para pileta y playa</li>
            <li>Kits de playa (balde, palita, rastrillo)</li>
            <li>Inflables (pelotas, flotadores, figuras)</li>
            <li>Pistolas de agua</li>
            <li>Juegos de jardín (aros, bolos, tejos)</li>
          </ul>
        </section>
</div>

      



 









 
    </div>
    
    
  )
}
