import DisplayData from "../models/display.js";

const getDisplay = async (req, res) => {
	try {
		const { name } = req.params;
		const display = await DisplayData.findOne({ name });
		res.status(200).json({ message: "Data retrieved successfully", display });
	} catch (error) {
		res.status(500).json({ message: "Erorr", err: error });
	}
};

export default getDisplay;
