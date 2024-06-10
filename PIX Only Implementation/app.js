function preferredPayment() {
    fastspring.builder.reset();
    fastspring.builder.country("BR");
    fastspring.builder.language("EN");
    fastspring.builder.add("50-monster-eggs");
    fastspring.builder.payment("pix", true);
  }