import axios from "axios";

const getRestaurants = async () => {
	try {
		const response = await axios.get("https://nextjs-orpin-omega-98.vercel.app/api/restaurants", {
			headers: {
				'Content-Type': 'application/json',
			}
		});
		return response.data;
	} catch (e) {
		console.log(`error: ${e.message}`);
	}
};

export default getRestaurants;