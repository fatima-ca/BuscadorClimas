import { useEffect, useState } from "react";

interface temperaturaProps{
  ciudad:string;
}

export default function Temperatura({ciudad}:temperaturaProps) {
  const [pantalla, setPantalla] = useState(true);
  const [temperatura, setTemperatura] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTemp=async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=4c8aeec02d3b4725b4930011252502&q=${(ciudad)}&aqi=no`
        );
        const data = await response.json();
        setTemperatura(data);
      } catch (error) {
        setError("Error :c");
      } finally{
        setLoading(false);
      }
    };

    fetchTemp();
  }, [`https://api.weatherapi.com/v1/current.json?key=4c8aeec02d3b4725b4930011252502&q=${(ciudad)}&aqi=no`]);

  
  if (!pantalla) return null;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>

      <div className="relative w-40 h-40 bg-blue-700 flex items-center justify-center">


        <button className="absolute top-1 right-1 hover:bg-red-500 bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setPantalla(false)}
        >x</button>

        <div className="grid-1 gap-0">
          <p className="text-white-700">Temperatura en {ciudad}</p>

        {error ? (
          <p className="text-red-700">{error}</p>
        ) : temperatura ? (

        <div >
          <p className="text-white-700">{temperatura.location.localtime}</p>
          <p className="text-white-700">Temperatura {temperatura.current.temp_c}°C</p>
        </div>
        ) : (
          <p>Loading...</p>)}
        </div>


      </div>
    </main>


      
  );
}
