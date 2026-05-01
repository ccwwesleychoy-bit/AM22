window.SHOP_CONFIG = {
  shopName: "AM22",
  currencyLabel: "HK$",

  // Free shipping when subtotal reaches this amount (HK$)
  freeShippingAtAmount: 240,
  shippingFee: 30,

  // Payment
  payMeUrl: "https://payme.hsbc/996976ef1a4840e397b5d218c81a662a",
  fpsId: "128799590",
  fpsNote: "Please put the Order ID in the transfer remark.",

  // Contact
  contactPhone: "90137619",
  contactEmail: "AM22coffee@gmail.com",

  // Google Apps Script Web App — receives order + payment proof image
  orderEndpoint:
    "https://script.google.com/macros/s/AKfycbxfwD_P97LJmyBPr4hiVQwC1ZZf6i4rp8QpQME7ehZah3HhBLhSDWCcTQz6e_CweaIb-g/exec",
};
