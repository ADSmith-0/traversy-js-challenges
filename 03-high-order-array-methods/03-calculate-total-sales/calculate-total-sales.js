function calculateTotalSalesWithTax(products, taxRate) {
  return products.reduce((sum, num) => sum + num.price * num.quantity, 0) * ((taxRate / 100) + 1);
}

module.exports = calculateTotalSalesWithTax;
