'use client';
import Temperatura from "./componentes/Temperatura";


export default function Home() {
  return (
    <main className="">
      
      <div className="flex flex-col items-center justify-start h-screen text-center gap-5">


        <h1 className="text-3xl font-bold">Temperatura</h1>
        
        <div className="mt-4 flex gap-2">
          <input type="text" name="city" placeholder='Buscar ciudad ' className="bg-blue-200 p-2 rounded-md focus:ring-2 focus:ring-blue-400"/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buscar</button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Temperatura ciudad="Monterrey"/>
          <Temperatura ciudad="Paris"/>
          <Temperatura ciudad="London"/>
          <Temperatura ciudad="Monterrey"/>
        </div>


      </div> 
    </main> 
  );
}
