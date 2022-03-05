import fetch from "node-fetch";
import fs from "fs";
import fse from "fs-extra";

// getting time
let date_ob = new Date();
let date = "0" + date_ob.getDate();
let month = "0" + (date_ob.getMonth() + 1);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();

// time to create folder
const time = `${year}-${month}-${date} ${hours}:${minutes}`;

// get api json
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_jja=";

const getdata = async () => {
	const wordQuery = "bali";
	const endpoint = `${url}${queryParams}${wordQuery}`;
	try {
		const response = await fetch(endpoint);
		if (response.ok) {
			const jsonResponse = await response.json();
			const resjson = JSON.stringify(jsonResponse);
			fse.outputFileSync(`${time}/jembut.js`, `${resjson}`);
		}
	} catch (error) {
		console.log(error);
	}
};

getdata();
console.log("create file successfully");
