import { useRef, useState } from "react";
import Bank from "./components/Bank";
import Client from "./components/Client";
import Self from "./components/Self";
import Preview from "./components/Preview";
import Details from "./components/Details";
// import jsPDF from "jspdf";
// import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./App.css";

export interface SelfDetails {
  name: string;
  address: string;
  contact: string;
}

export interface ClientDetails {
  name: string;
  address: string;
  project: string;
  gst: string;
  submitted: string;
  due: string;
}

export interface BankDetails {
  name: string;
  account: string;
  ifsc: string;
  upi: string;
}

export interface WorkDetails {
  pricing: string;
  travel: string;
}

function App() {
  const [selfDetails, setSelfDetails] = useState<SelfDetails>({
    name: "",
    address: "",
    contact: "",
  });

  const [clientDetails, setClientDetails] = useState<ClientDetails>({
    name: "",
    address: "",
    project: "",
    gst: "",
    submitted: "",
    due: "",
  });

  const [bankDetails, setBankDetails] = useState<BankDetails>({
    name: "",
    account: "",
    ifsc: "",
    upi: "",
  });

  const [details, setDetails] = useState<WorkDetails>({
    pricing: "",
    travel: "",
  });

  const [loading, ] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!previewRef.current) return;

    // Capture element as canvas
    const canvas = await html2canvas(previewRef.current, {
      scale: 2, // Higher scale = better quality
      useCORS: true, // fixes issues with images
    });

    const imgData = canvas.toDataURL("image/png");

    // Create PDF
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width; // keep aspect ratio

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("download.pdf");
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <Self selfDetails={selfDetails} setSelfDetails={setSelfDetails} />
        <Bank bankDetails={bankDetails} setBankDetails={setBankDetails} />
        <Client clientDetails={clientDetails} setClientDetails={setClientDetails} />
        <Details details={details} setDetails={setDetails} />
      </div>

      <div className="preview-section">
        <button
          onClick={downloadPDF}
          disabled={loading}
          className={`download-btn ${loading ? "disabled" : ""}`}
        >
          {loading ? "Generating PDF..." : "Download as PDF"}
        </button>

        <div ref={previewRef}>
          <Preview
            selfDetails={selfDetails}
            clientDetails={clientDetails}
            bankDetails={bankDetails}
            details={details}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
