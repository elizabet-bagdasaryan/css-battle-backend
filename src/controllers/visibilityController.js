import VisData from "../models/visibility.js";

const getVis = async (req, res) => {
	try {
		const { name } = req.params;
		const visibility = await VisData.findOne({ name });
		res
			.status(200)
			.json({ message: "Data retrieved successfully", visibility });
	} catch (error) {
		res.status(500).json({ message: "Erorr", err: error });
	}
};

export default getVis;
