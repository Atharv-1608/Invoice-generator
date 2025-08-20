import type React from "react"
import type { BankDetails } from "../App"
import "../Bank.css"

interface BankProps {
  bankDetails: BankDetails
  setBankDetails: React.Dispatch<React.SetStateAction<BankDetails>>;
}

const Bank: React.FC<BankProps> = ({ bankDetails, setBankDetails }) => {
  return (
    <div className="bank-container">
      <h3>Bank Details</h3>
      <div className="bank-form">
        <input
          type="text"
          placeholder="Bank Name"
          value={bankDetails.name}
          onChange={(e) => setBankDetails({ ...bankDetails, name: e.target.value })}
        />
        <input
          type="password"
          placeholder="Account Number"
          value={bankDetails.account}
          onChange={(e) => setBankDetails({ ...bankDetails, account: e.target.value })}
        />
        <input
          type="password"
          placeholder="IFSC code"
          value={bankDetails.ifsc}
          onChange={(e) => setBankDetails({ ...bankDetails, ifsc: e.target.value })}
        />
        <input
          type="password"
          placeholder="UPI id"
          value={bankDetails.upi}
          onChange={(e) => setBankDetails({ ...bankDetails, upi: e.target.value })}
        />
      </div>
    </div>
  )
}

export default Bank
