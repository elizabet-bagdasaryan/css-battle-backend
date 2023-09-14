import PilotData from "../models/pilot.js";

const getPilot = async (req, res) => {
	try {
		const { name } = req.params;
		const pilot = await PilotData.findOne({ name });
		res.status(200).json({ message: "Data retrieved successfully", pilot });
	} catch (error) {
		res.status(500).json({ message: "Erorr", err: error });
	}
};

export default getPilot;
