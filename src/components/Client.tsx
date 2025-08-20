import type React from "react";
import type { ClientDetails } from "../App";
import "../Client.css";

interface ClientProps {
  clientDetails: ClientDetails;
  setClientDetails: React.Dispatch<React.SetStateAction<ClientDetails>>;
}

const Client: React.FC<ClientProps> = ({ clientDetails, setClientDetails }) => {
  return (
    <div className="client-container">
      <h3>Client Details</h3>
      <div className="client-form">
        <input
          type="text"
          placeholder="Name"
          value={clientDetails.name}
          onChange={(e) =>
            setClientDetails({ ...clientDetails, name: e.target.value })
          }
        />
        <textarea
          placeholder="Address"
          value={clientDetails.address}
          onChange={(e) =>
            setClientDetails({ ...clientDetails, address: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Project Name"
          value={clientDetails.project}
          onChange={(e) =>
            setClientDetails({ ...clientDetails, project: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="GST No"
          value={clientDetails.gst}
          onChange={(e) =>
            setClientDetails({ ...clientDetails, gst: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Due Date"
          value={clientDetails.due}
          onChange={(e) =>
            setClientDetails({ ...clientDetails, due: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Submitted on"
          value={clientDetails.submitted}
          onChange={(e) =>
            setClientDetails({ ...clientDetails, submitted: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Client;
