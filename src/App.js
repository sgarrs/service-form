import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
			purchaseLocation: '',
      orderNumber: '',
      poOrSerialNumber: '',
      retailer: '',
      yearPurchased: '',
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      phoneOne: '',
      phoneTwo: '',
      emailOne: '',
      emailTwo: '',
      emailConfirmation: '',
      notes: '',
      images: '',
      lineItems: [],
      _lineItemQty: '',
      _lineItemLocation: '',
      _lineItemDescription: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTableSubmit = this.handleTableSubmit.bind(this);
    this.handleRemoveLineItem = this.handleRemoveLineItem.bind(this);

  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleTableSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
      const arr = [this.state._lineItemQty, this.state._lineItemLocation, this.state._lineItemDescription];
      return {
        lineItems: prevState.lineItems.concat([arr]),
        _lineItemQty: '',
        _lineItemLocation: '',
        _lineItemDescription: ''
      }
    });
  }

  handleRemoveLineItem(e, index) {
    e.preventDefault();
    this.setState((prevState) => {
      const l = prevState.lineItems;
      return {
        lineItems: l.slice(0, index).concat(l.slice(index + 1))
      }
    });
  }

  renderLineItems(lineItems) {
    if (Array.isArray(lineItems)) {
      if (lineItems.length > 0) {
        return (
          lineItems.map((line, index) => {
            return (
              <tr className="lineItemList" key={`line-item-${index}`} style={{background: index % 2 ? 'lightgray' : ''}}>
                <td className="lineItemQty lineItemCell">{line[0]}</td>
                <td className="lineItemLocation lineItemCell">{line[1]}</td>
                <td className="lineItemDescription lineItemCell">{line[2]}</td>
                <td className="lineItemRemove"><button onClick={(e) => this.handleRemoveLineItem(e, index)}>Remove</button></td>
              </tr>
            );
          })
        );
      } else {
        return;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h1>Service Information</h1>
          <label>
            <p>Where did you purchase your Pella products?</p>
            <select
              name="purchaseLocation"
              value={this.state.purchaseLocation}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="Pella Store">Pella Store</option>
              <option value="Lowes">Lowes</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            <p>Order# (if you have this information available)</p>
            <input
              type="text"
              name="orderNumber"
              value={this.state.orderNumber}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>If you can not provide a purchase order # or a serial #, please contact the Lowes store from which you purchased your products or call Pella's National Accounts at 1-800-374-4578</p>
            <p>Pella Southeast can not provide this information, as it is not in our system.</p>
            <p>Purchase Order# or Serial#</p>
            <input
              type="text"
              name="poOrSerialNumber"
              value={this.state.poOrSerialNumber}
              onChange={this.handleChange}
              />
          </label>
          <label>
            <p>Please specify the retailer from which you purchased your products.</p>
            <input
              type="text"
              name="retailer"
              value={this.state.retailer}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>In what year did you buy your Pella products?</p>
            <input
              type="text"
              name="yearPurchased"
              value={this.state.yearPurchased}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Describe the problems you are having with each product unit. Click the "Add Item" button when completing a description.</p>
            <table>
              <thead>
                <tr>
                  <td className="lineItemQty">Qty</td>
                  <td className="lineItemLocation">Location</td>
                  <td className="lineItemDescription">Description</td>
                  <td className="lineItemAdd">&nbsp;</td>
                </tr>
              </thead>
              <tbody>
                {this.renderLineItems(this.state.lineItems)}
                <tr>
                  <td className="lineItemQty"><input type="number" name="_lineItemQty" value={this.state._lineItemQty} min="0" onChange={this.handleChange} /></td>
                  <td className="lineItemLocation"><input type="text" name="_lineItemLocation" value={this.state._lineItemLocation} onChange={this.handleChange} /></td>
                  <td className="lineItemDescription"><input type="text" name="_lineItemDescription" value={this.state._lineItemDescription} onChange={this.handleChange} /></td>
                  <td className="lineItemAdd"><button onClick={this.handleTableSubmit}>Add Item</button></td>
                </tr>
              </tbody>
            </table>
          </label>
          <label>
            <p>Upload images showing the problems you are having with your products</p>
            <input type="file" name="images" onChange={this.handleChange} />
          </label>
          <h1>Contact Information</h1>
          <label>
            <p>Full Name</p>
            <div className="fullName">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </label>
          <label>
            <p>Address</p>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={this.state.streetAddress}
              onChange={this.handleChange}
            />
            <div className="addressSecondLine">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={this.state.city}
                onChange={this.handleChange}
              />
              <select
                value={this.state.state}
                name="state"
                onChange={this.handleChange}
              >
                <option value=""></option>
                <option value="GA">Georgia</option>
                <option value="NC">North Carolina</option>
                <option value="SC">South Carolina</option>
                <option value="TN">Tennessee</option>
                <option value="VA">Virginia</option>
                <option value="WV">West Virginia</option>
              </select>
              <input
                type="text"
                name="zipCode"
                placeholder="Zipcode"
                value={this.state.zipCode}
                onChange={this.handleChange}
              />
            </div>
          </label>
          <label>
            <p>Phone Number</p>
            <div className="phoneNumberLine">
              <input
                type="text"
                name="phoneOne"
                placeholder="Phone Number"
                value={this.state.phoneOne}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="phoneTwo"
                placeholder="Phone Number"
                value={this.state.phoneTwo}
                onChange={this.handleChange}
              />
            </div>
          </label>
          <label>
            <p>Email</p>
            <div className="emailLine">
              <input
                type="text"
                name="emailOne"
                placeholder="Email Address"
                value={this.state.emailOne}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="emailTwo"
                placeholder="Email Address"
                value={this.state.emailTwo}
                onChange={this.handleChange}
              />
            </div>
          </label>
          <label>
            <p>If you are not the customer and want a confirmation email, enter your email address here:</p>
            <input
              type="text"
              name="emailConfirmation"
              value={this.state.emailConfirmation}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Additional Notes</p>
            <textarea
              value={this.state.notes}
              name="notes"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
