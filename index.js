import fetch from "node-fetch";

const url = "https://api.datamuse.com/words?";
const queryParams = "rel_jja=";

const getdata = async () => {
	const wordQuery = "bali";
	const endpoint = `${url}${queryParams}${wordQuery}`;
	try {
		const response = await fetch(endpoint);
		if (response.ok) {
			const jsonResponse = await response.json();
			console.log(jsonResponse);
		}
	} catch (error) {
		console.log(error);
	}
};

getdata();
