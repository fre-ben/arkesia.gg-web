import { Navigate } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Navigate to="/maps/Arkesia World Map" replace={true} />
    </>
  );
}
