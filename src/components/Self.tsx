import type React from "react";
import type { SelfDetails } from "../App";
import "../Self.css"; // import the css file

interface SelfProps {
  selfDetails: SelfDetails;
  setSelfDetails: React.Dispatch<React.SetStateAction<SelfDetails>>;
}

const Self: React.FC<SelfProps> = ({ selfDetails, setSelfDetails }) => {
  return (
    <div className="self-container">
      <h3 className="self-title">Your Details</h3>
      <div className="self-form">
        <input
          type="text"
          placeholder="Name"
          value={selfDetails.name}
          onChange={(e) =>
            setSelfDetails({ ...selfDetails, name: e.target.value })
          }
        />
        <textarea
          placeholder="Address"
          value={selfDetails.address}
          onChange={(e) =>
            setSelfDetails({ ...selfDetails, address: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Contact"
          value={selfDetails.contact}
          onChange={(e) =>
            setSelfDetails({ ...selfDetails, contact: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Self;
