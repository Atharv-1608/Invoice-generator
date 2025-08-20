import type React from "react";
import type { WorkDetails } from "../App";
import "../Details.css";


interface WorkProps {
  details: WorkDetails;
  setDetails: React.Dispatch<React.SetStateAction<WorkDetails>>;
}

const Details: React.FC<WorkProps> = ({ details, setDetails }) => {
  return (
    <div className="details-container">
      <h3 className="details-heading">Pricing Details</h3>
      <div className="details-inputs">
        <input
          type="number"
          placeholder="Hair n Makeup"
          value={details.pricing}
          onChange={(e) => setDetails({ ...details, pricing: e.target.value })}
        />
        <input
          type="number"
          placeholder="Travel"
          value={details.travel}
          onChange={(e) => setDetails({ ...details, travel: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Details;
