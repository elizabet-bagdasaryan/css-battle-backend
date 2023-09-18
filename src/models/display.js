import { Schema, model } from "mongoose";

const display = new Schema({
	name: {
		type: Schema.Types.String,
		required: true,
	},
	img: {
		type: Schema.Types.String,
		required: true,
	},
	solution: {
		type: Schema.Types.String,
		required: true,
	},
});

const DisplayData = model("display", display);

export default DisplayData;
