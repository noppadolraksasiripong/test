const ComponentToPrint = () => {
  return (
    <div id="invoice">
      <div id="pspdfkit-header">
        <div className="header-columns">
          <div className="logotype">
            <img className="logo" src="logo.svg" />
            <p>Company</p>
          </div>

          <div>
            <p>[Company Info]</p>
          </div>
        </div>
      </div>

      {/* <div className="page" style={{ "page-break-after": "always" }}> */}
      <div className="page">
        <div>
          <h2>Invoice #</h2>
        </div>

        <div className="intro-table">
          <div className="intro-form intro-form-item">
            <p className="intro-table-title">Billed To:</p>
            <p>
              Company Ltd.<br />
              Address<br />
              Country<br />
              VAT ID: ATU12345678
            </p>
          </div>

          <div className="intro-form">
            <div className="intro-form-item-border">
              <p className="intro-table-title">Payment Date:</p>
              <p>November 22nd 2021</p>
            </div>

            <div className="intro-form-item-border">
              <p className="intro-table-title">Payment Method:</p>
              <p>Bank Transfer</p>
            </div>
          </div>
        </div>

        <div className="table-box">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr className="heading">
                <td>Description</td>
                <td>QTY</td>
                <td>Unit Price</td>
                <td>Total</td>
              </tr>

              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="summary-box">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr className="item">
                <td></td>
                <td>Subtotal:</td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td>Discount:</td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td>Subtotal Less Discount:</td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td>Tax Rate:</td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td>Total Tax:</td>
                <td></td>
              </tr>

              <tr className="item">
                <td></td>
                <td>Shipping/Handling:</td>
                <td></td>
              </tr>

              <tr className="no-border-item">
                <td></td>
                <td>Total Due:</td>
                <td></td>
              </tr>

              <tr className="total">
                <td></td>
                <td>Amount Paid:</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="page" style="page-break-after: always;"> */}
      <div className="page" >
        <div>
          <h4>Thank you for your purchase!</h4>
        </div>

        <div className="form">
          <label htmlFor="notes" className="label"> Notes: </label>
          <input type="text" id="notes" className="border-bottom" value="" />
        </div>

        <div className="signer">
          <div className="form signer-item">
            <label htmlFor="date" className="label">Date:</label>
            <input
              type="text"
              id="date"
              className="border-bottom"
              value="01/01/2021"
            />
          </div>

          <div className="form signer-item">
            <label htmlFor="signature" className="label">Issued by:</label>
            <input
              type="text"
              id="signature"
              className="border"
              value="Sign Here"
            />
          </div>
        </div>
      </div>

      <div id="pspdfkit-footer">
        <div className="footer-columns">
          <span>Invoice</span>
          <span>Page 1</span>
        </div>
      </div>
    </div>
  )
}
export default ComponentToPrint
