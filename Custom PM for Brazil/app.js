let country = "";

function preferredPayment() {
  
    fastspring.builder.reset();
    fastspring.builder.language("EN");
  
    fastspring.builder.add("50-monster-eggs");
  
    if (country === "BR") {
        fastspring.builder.payment("pix", true);
    } else {
        fastspring.builder.checkout();
    }
}

function dataCallback(data) {
    // Use data-data-callback to read the geolocated country from the FastSpring session.
    country = data.country;
}