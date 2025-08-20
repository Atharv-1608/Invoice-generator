import type { BankDetails, ClientDetails, SelfDetails, WorkDetails } from "../App";
import "../Preview.css";

interface Props {
  selfDetails: SelfDetails;
  clientDetails: ClientDetails;
  bankDetails: BankDetails;
  details: WorkDetails;
}

const Preview: React.FC<Props> = ({
  selfDetails,
  clientDetails,
  bankDetails,
  details,
}) => {
  const items = [
    { description: "Hair and Makeup", qty: 1, unitPrice: Number(details.pricing) || 0 },
    { description: "Travel", qty: 1, unitPrice: Number(details.travel) || 0 },
  ];

  const subtotal = items
    .filter((item) => item.unitPrice > 0)
    .reduce((acc, item) => acc + item.unitPrice, 0);

  return (
    <div className="preview">
      {/* Blue line */}
      <div className="preview-header-line"></div>

      {/* Self Details */}
      <div className="preview-self">
        <h2>{selfDetails.name}</h2>
        <h3>{selfDetails.address}</h3>
        <h2>Contact : {selfDetails.contact}</h2>
      </div>

      {/* Invoice Title */}
      <div className="preview-title">
        <div className="invoice-text">Invoice</div>
        <div className="submitted-text">
          Submitted on:{" "}
          {clientDetails.submitted &&
            new Date(clientDetails.submitted).toLocaleDateString("en-GB")}
        </div>
      </div>

      {/* Client + Invoice details */}
      <div className="preview-info">
        {/* Left column */}
        <div className="info-left">
          <h2>Invoice for</h2>
          <p>{clientDetails.name}</p>
          <p>{clientDetails.adress}</p>
          <p className="gst">
            GST No: <span>{clientDetails.gst}</span>
          </p>
        </div>

        {/* Right column */}
        <div className="info-right">
          <div>
            <h3>Payable to</h3>
            <p>{selfDetails.name}</p>
          </div>
          <div>
            <h3>Invoice #</h3>
            <p>1</p>
          </div>
          <div>
            <h3>Project</h3>
            <p>{clientDetails.project}</p>
          </div>
          <div>
            <h3>Due date</h3>
            <p>{clientDetails.due}</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="preview-table">
        <table>
          <colgroup>
            <col style={{ width: "60%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>

          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit price</th>
            </tr>
          </thead>

          <tbody>
            {items
              .filter((item) => item.unitPrice > 0)
              .map((item, i) => (
                <tr key={i}>
                  <td>{item.description}</td>
                  <td>{item.qty}</td>
                  <td>Rs. {item.unitPrice.toLocaleString()}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="subtotal">
          Subtotal: Rs. {subtotal.toLocaleString()}
        </div>
      </div>

      {/* Bank Details */}
      <div className="preview-bank">
        <div>Please make the payment to:</div>
        <div className="bank-info">
          <p>Name : {selfDetails.name}</p>
          <p>Bank Name : {bankDetails.name}</p>
          <p>Account Number : {bankDetails.account}</p>
          <p>IFSC Code : {bankDetails.ifsc}</p>
          <p>UPI id : {bankDetails.upi}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
