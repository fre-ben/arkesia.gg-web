import { NavLink } from "remix";
import { allMapData } from "~/lib/db";

export default function MapSelect() {
  return (
    <section>
      <h3>Maps</h3>
      <ul>
        {allMapData.map((mapData) => (
          <li key={mapData.title}>
            <NavLink
              to={`/maps/${encodeURIComponent(mapData.title)}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {mapData.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
