import { Schema, model } from "mongoose";

const visibility = new Schema({
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

const VisData = model("visibility", visibility);

export default VisData;
