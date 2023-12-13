import Widget from "@/server/models/widget"


export default defineEventHandler(async (event) => {
  try {
    const  a = getRouterParams(event)
    const query = await getQuery(event)
    const body = await readBody(event)
    const widget = new Widget(body);
    const item = await widget.save()
    return {
      item: item,
    };
  } catch (error:any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
});
