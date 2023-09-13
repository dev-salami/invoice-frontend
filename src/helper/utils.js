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
