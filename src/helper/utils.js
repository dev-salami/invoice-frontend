import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadPDF = ({ name, style }) => {
	const capture = document.querySelector(`.${style}`);
	const dpi = 300; // Increase DPI for better quality, 300 is a good starting point
	const scaleFactor = dpi / 96; // 96 DPI is the default for most screens

	// Calculate the dimensions of the element after scaling
	const width = capture.offsetWidth * scaleFactor;
	const height = capture.offsetHeight * scaleFactor;

	// Create a canvas with the adjusted dimensions
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const context = canvas.getContext("2d");
	context.scale(scaleFactor, scaleFactor);

	// Set the background color if needed
	// context.fillStyle = 'white'; // You can set a background color if desired
	// context.fillRect(0, 0, width, height);

	// Capture the element with the adjusted canvas
	return html2canvas(capture, { canvas }).then((canvas) => {
		const imgData = canvas.toDataURL("image/jpeg", 1.0); // Use JPEG for better quality

		const pdf = new jsPDF("p", "mm", "a4");
		const imgWidth = 210; // A4 page width in mm
		const imgHeight = (height * imgWidth) / width;

		pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
		pdf.save(`${name}_receipt.pdf`);
	});
};

export const getFormattedDate = () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
};
export const getFutureDate = (numDays) => {
	const today = new Date();
	today.setDate(today.getDate() + numDays);

	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
};
export const generateID = () => {
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var id = "";
	for (var i = 0; i < 2; i++) {
		id += letters.charAt(Math.floor(Math.random() * letters.length));
	}
	for (var i = 0; i < 4; i++) {
		id += Math.floor(Math.random() * 10);
	}
	return id;
};
export const formatDBDate = (inputDate) => {
	const options = { year: "numeric", month: "short", day: "numeric" };
	const date = new Date(inputDate);
	return date.toLocaleDateString("en-US", options);
};
