import components from "../components/mdlComponents";
import React from "react";

var Form = React.createClass({
  render: function() {
    let Forms = formSetup.bind(null, this.props.addressFormData, this.props.modifyAddressForm);
    return <components.Card {...this.props} content={Forms()}/>
  }
})

function formSetup(addressData, changeAddressForm) {
  return <div>
    <form>
      <components.InputField value={addressData.streetAddress} label="Street Address" type="text" onChange={changeAddressForm.bind(null, "streetAddress")}/>
      <components.InputField label="Unit Number" type="number" onChange={changeAddressForm.bind(null, "locality")}/>
      <components.InputField value={addressData.locality} label="City" type="text" onChange={changeAddressForm.bind(null, "locality")}/>
      <components.InputField value={addressData.administrative_area_level_1} label="State" type="text" onChange={changeAddressForm.bind(null, "administrative_area_level_1")}/>
      <components.InputField value={addressData.postal_code} label="Postal Code" type="number" onChange={changeAddressForm.bind(null, "postal_code")}/>
    </form>
  </div>
};

module.exports = Form;
