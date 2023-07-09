const extractionArrayFromText = (text) => {
  const regex = /(\[[^\]]*\])/;
  const match = text.match(regex);
  if (match) {
    const arrayText = match[0];
    console.log(arrayText);
    const array = JSON.parse(arrayText);
    return array;
  } else {
    return [];
  }
};

export default extractionArrayFromText;
