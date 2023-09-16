import { Schema, model } from "mongoose";

const cursor = new Schema({
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

const CursorData = model("cursor", cursor);

export default CursorData;
