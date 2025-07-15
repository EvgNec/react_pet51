import { useMemo, useState } from "react";

export default function UseMemo({ someProp }) {
    const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
    const [query, setQuery] = useState("");
    const [clicks, setClicks] = useState(0);
  
    const filteredPlanets = useMemo(
      () => planets.filter(planet => {planet.includes(query);
        console.log("UseMemo ~ planet:", planet)
      }),
      [planets, query]
    );
    const filteredPlanets2 =  planets.filter(planet => {
        planet.includes(query);
        console.log("Not ~ UseMemo ~ planet:", planet)
    });
        
  
    return (
      <div>
        <div>Some prop: {someProp}</div>
        <button onClick={() => setClicks(clicks + 1)}>
          Number of clicks: {clicks}
        </button>
        <div>
          {filteredPlanets.map(planet => (
            <div key={planet}>{planet}</div>
          ))}
        </div>
        <div>
          {filteredPlanets2.map(planet => (
            <div key={planet}>{planet}</div>
          ))}
        </div>
      </div>
    );
  };
