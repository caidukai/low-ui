import Widget from "@/server/models/widget"


export default defineEventHandler(async (event) => {
  const widgets = await Widget.find();

  return {
    items: widgets,
  };
});
