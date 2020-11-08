const getSlug = (text: string) => text.toLowerCase().replace(/\W/g, "-");

export default getSlug;
