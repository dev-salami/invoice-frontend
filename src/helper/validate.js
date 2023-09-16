export default function hasEmptyOrZeroValues(obj) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key];

			// Check if the value is empty or 0
			if (value === "" || value === 0) {
				return true; // Found an empty or zero value
			}

			// If the value is an object or array, recursively check its properties or elements
			if (typeof value === "object" && !Array.isArray(value)) {
				if (hasEmptyOrZeroValues(value)) {
					return true; // Found an empty or zero value within nested object
				}
			} else if (Array.isArray(value)) {
				for (const item of value) {
					if (typeof item === "object") {
						if (hasEmptyOrZeroValues(item)) {
							return true; // Found an empty or zero value within nested array
						}
					} else if (item === "" || item === 0) {
						return true; // Found an empty or zero value within the array
					}
				}
			}
		}
	}

	return false; // No empty or zero values found
}

// Example usage:
//   const input = {
//     id: 'RT3080',
//     createdAt: '2023-09-15T00:00:00.000Z',
//     paymentDue: '2023-10-15T00:00:00.000Z',
//     description: 'Re-branding',
//     paymentTerms: 7,
//     clientName: 'Salami Khalil',
//     clientEmail: 'jensenh@mail.com',
//     status: 'paid',
//     senderAddress: {
//       street: '19 Union Terrace',
//       city: 'London',
//       postCode: 'E1 3EZ',
//       country: 'UnPJDYBited Kingdom',
//     },
//     clientAddress: {
//       street: '106 Kendell Street',
//       city: 'Sharrington',
//       postCode: 'NR24 5WQ',
//       country: 'IGBO HYE Kingdom',
//     },
//     items: [
//       {
//         name: 'Brand Guidelines',
//         quantity: 145,
//         price: 1800.90,
//         total: 1800.90,
//       },
//     ],
//     total: 1800.90,
//   };

//   const hasEmptyOrZero = hasEmptyOrZeroValues(input);
// console.log(hasEmptyOrZero); // true if any field is empty or 0, otherwise false
