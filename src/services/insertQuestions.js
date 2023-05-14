const insertQuestions = async (word, _id) => {
  try {
    const formdata = new FormData();
    const data = {};
    if (word.image) {
      formdata.append("type", word.type);
      formdata.append("grade", word.stadge);
      formdata.append("subject", word.subjectName);
      formdata.append("wordar", word.definitionInAc);
      formdata.append("worden", word.definitionInEn);
      formdata.append("image", word.image, word.image.name);
      formdata.append("sentence", word.sentence);
    } else {
      data.type = word.type;
      data.grade = word.stadge;
      data.subject = word.subjectName;
      data.wordar = word.definitionInAc;
      data.worden = word.definitionInEn;
      data.sentence = word.sentence;
      data.choices = word.choices;
      data.number = word.number;
    }

    const url = `${import.meta.env.VITE_REACT_ADD_QUESTION_API}/${_id}`;
    const headers = {
      method: "POST",
      body: Object.keys(data).length > 0 ? JSON.stringify(data) : formdata,
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
