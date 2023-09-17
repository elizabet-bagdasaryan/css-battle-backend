import CursorData from "../models/cursor.js";

const getCursor = async (req, res) => {
	try {
		const { name } = req.params;
		const cursor = await CursorData.findOne({ name });
		res.status(200).json({ message: "Data retrieved successfully", cursor });
	} catch (error) {
		res.status(500).json({ message: "Erorr", err: error });
	}
};

export default getCursor;
