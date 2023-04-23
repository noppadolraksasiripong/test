import { forwardRef, memo } from 'react'
import Table from './Table'

import dynamic from 'next/dynamic'
import BarChart from './BarChart'
import AntdComponent from './AntdComponent'

const ComponentToPrint = forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <div ref={ref} id="invoice">
      <div id="pspdfkit-header">
        <div className="header-columns">
          <div className="logotype">

            <p>Company</p>
          </div>

          <div>
            <p>[Company Info]</p>
          </div>
        </div>
      </div>


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

        <div className="table-box" table-box="table-box">

          <Table />

        </div>



        {/* <div className="summary-box">
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
        </div> */}
      </div>

      {/* <div className="page" style="page-break-after: always;"> */}
      <div className="page" >
        <div>
          <h4>Thank you for your purchase!</h4>
        </div>

        <div className="form">
          <label htmlFor="notes" className="label"> Notes: </label>
          <input type="text" id="notes" className="border-bottom" defaultValue="" />
        </div>

        <div className="signer">
          <div className="form signer-item">
            <label htmlFor="date" className="label">Date:</label>
            <input
              type="text"
              id="date"
              className="border-bottom"
              defaultValue="01/01/2021"
            />
          </div>

          <div className="form signer-item">
            <label htmlFor="signature" className="label">Issued by:</label>
            <input
              type="text"
              id="signature"
              className="border"
              defaultValue="Sign Here"
            />
          </div>
        </div>
      </div>
      <div className="page" >
        <div>
          <h4>Thank you for your purchase!</h4>
        </div>

        <div className="form">
          <label htmlFor="notes" className="label"> Notes: </label>
          <input type="text" id="notes" className="border-bottom" defaultValue="" />
        </div>

        <div className="signer">
          <div className="form signer-item">
            <label htmlFor="date" className="label">Date:</label>
            <input
              type="text"
              id="date"
              className="border-bottom"
              defaultValue="01/01/2021"
            />
          </div>

          <div className="form signer-item">
            <label htmlFor="signature" className="label">Issued by:</label>
            <input
              type="text"
              id="signature"
              className="border"
              defaultValue="Sign Here"
            />
          </div>
        </div>
      </div>

      <div className="inside border1"> Hello world</div>
      <div className="inside border2"> Hello world2</div>
      <div className="inside border3"> Hello world3</div>
      <div className="inside border4"> Hello world4</div>
      <div>

        <BarChart />
      </div>

      {/* <div className="page" style="page-break-after: always;"> */}
      <div className="page" >
        <div>
          <h4>Thank you for your purchase!</h4>
        </div>

        <div className="form">
          <label htmlFor="notes" className="label"> Notes: </label>
          <input type="text" id="notes" className="border-bottom" defaultValue="" />
        </div>

        <div className="signer">
          <div className="form signer-item">
            <label htmlFor="date" className="label">Date:</label>
            <input
              type="text"
              id="date"
              className="border-bottom"
              defaultValue="01/01/2021"
            />
          </div>

          <div className="form signer-item">
            <label htmlFor="signature" className="label">Issued by:</label>
            <input
              type="text"
              id="signature"
              className="border"
              defaultValue="Sign Here"
            />
          </div>
        </div>
      </div>
      <div className="page" >
        <div>
          <h4>Thank you for your purchase!</h4>
        </div>

        <div className="form">
          <label htmlFor="notes" className="label"> Notes: </label>
          <input type="text" id="notes" className="border-bottom" defaultValue="" />
        </div>

        <div className="signer">
          <div className="form signer-item">
            <label htmlFor="date" className="label">Date:</label>
            <input
              type="text"
              id="date"
              className="border-bottom"
              defaultValue="01/01/2021"
            />
          </div>

          <div className="form signer-item">
            <label htmlFor="signature" className="label">Issued by:</label>
            <input
              type="text"
              id="signature"
              className="border"
              defaultValue="Sign Here"
            />
          </div>
        </div>
      </div>
      <AntdComponent />
    </div>
  )
})
ComponentToPrint.displayName = "ComponentToPrint"
export default ComponentToPrint
