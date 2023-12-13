import { Schema, model } from "mongoose";
import Widget from "@/server/models/widget"
// const WidgetSchema = new Schema({
//   name: {
//     type: String,
//   },
//   desc: {
//     type: String,
//   },
// });



export default defineEventHandler(async (event) => {
  const widget = await Widget.findById("1112123121");

  return {
    widget,
  };
});
