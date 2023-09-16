import { Schema, model } from "mongoose";

const pilot = new Schema({
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

const PilotData = model("pilot", pilot);

export default PilotData;
