import jsPDF from "jspdf";

export const generateBillPDF = (customerName, customerNumber, cart, orderStatus) => {
  const doc = new jsPDF();

  doc.text("Cafe Heden", 20, 10);
  doc.text(`Customer Name: ${customerName}`, 20, 20);
  doc.text(`Phone Number: ${customerNumber}`, 20, 30);
  doc.text(`Order Status: ${orderStatus}`, 20, 40);

  cart.forEach((item, index) => {
    doc.text(`${item.name} - ${item.quantity} x ${item.price}`, 20, 50 + index * 10);
  });

  doc.save("bill.pdf");
};
