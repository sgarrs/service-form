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
      notes: ''
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h1>Service Information</h1>
          <label>
            <p>Where did you purchase your Pella products?</p>
            <select value={this.state.purchaseLocation}>
              <option value=""></option>
              <option value="Pella Store">Pella Store</option>
              <option value="Lowes">Lowes</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            <p>Order# (if you have this information available)</p>
            <input type="text" name="orderNumber"
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
                  <td>Quantity</td>
                  <td>Location</td>
                  <td>Description</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="submit" value="Add Item" /></td>
                </tr>
              </tbody>
            </table>
          </label>
          <label>
            <p>Upload images showing the problems you are having with your products</p>
            <input type="file" />
          </label>
          <h1>Contact Information</h1>
          <label>
            <p>Full Name</p>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Address</p>
            <input
              type="text"
              name="streetAddress"
              value={this.state.streetAddress}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
						<select value={this.state.state}>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>
            <input
              type="text"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Phone Number</p>
            <input
              type="text"
              name="phoneOne"
              value={this.state.phoneOne}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Phone Number</p>
            <input
              type="text"
              name="phoneTwo"
              value={this.state.phoneTwo}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="text"
              name="emailOne"
              value={this.state.emailOne}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="text"
              name="emailTwo"
              value={this.state.emailTwo}
              onChange={this.handleChange}
            />
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
