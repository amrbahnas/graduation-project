const insertQuestions = async (word, _id) => {
  try {
    const formdata = new FormData();
    formdata.append("type", word.type);
    formdata.append("grade", word.stadge);
    formdata.append("subject", word.subjectName);
    formdata.append("wordar", word.definitionInAc);
    formdata.append("worden", word.definitionInEn);
    if (word.image) formdata.append("image", word.image, word.image.name);
    formdata.append("sentence", word.sentence);
    formdata.append("choices", word.choices);
    formdata.append("number", JSON.stringify(word.number));

    const url = `${import.meta.env.VITE_REACT_ADD_QUESTION_API}/${_id}`;
    const headers = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const res = await fetch(url, headers);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default insertQuestions;
