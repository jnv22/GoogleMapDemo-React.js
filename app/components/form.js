import components from "../components/mdlComponents";
import React from "react";


function formSetup(addressData, changeAddressForm) {
  const formFields = [{
    value: addressData.streetAddress,
    label: "Street Address",
    type: "text",
    onChange: changeAddressForm.bind(null, "streetAddress")
  },
  {
    value: addressData.unit,
    label: "Unit Number",
    type: "number",
    onChange: changeAddressForm.bind(null, "unit")
  },
  {
    value: addressData.locality,
    label: "City",
    type: "text",
    onChange: changeAddressForm.bind(null, "locality")
  },
  {
    value: addressData.administrative_area_level_1,
    label: "State",
    type: "text",
    onChange: changeAddressForm.bind(null, "administrative_area_level_1")
  },
  {
    value: addressData.postal_code,
    label: "Postal Code",
    type: "number",
    onChange: changeAddressForm.bind(null, "postal_code")
  }]

  return <div>
    <form>
    {formFields.map(function(field) {
       return <components.InputField value={field.value} label={field.label} type={field.type} onChange={field.onChange}/>
    })}
    </form>
  </div>
};

var Form = React.createClass({
  render: function() {
    let Forms = formSetup.bind(null, this.props.addressFormData, this.props.modifyAddressForm);
    return <components.Card {...this.props} isExpanded={false} content={Forms()}/>
  }
})

module.exports = Form;
