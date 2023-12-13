import { Schema, model } from "mongoose";
import { generateUUID } from "@/server/utils/string_util"
const WidgetSchema = new Schema({
  _id: {
    type: String,
    default: generateUUID
  },
  nikename: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
  },
  props: {
    type: Object
  },
  methods: {
    type: Object
  },
  componentType: {
    type: Number,
    required: true,
  },
  render: {
    type: String,
  },
}, {versionKey: false});

export default model<any>("Widget", WidgetSchema);
