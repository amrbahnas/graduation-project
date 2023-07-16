import axios from "axios";

const generateRandomDataWithAi = async ({
  subjectname,
  amount,
  range,
  operator,
  multiChoose,
  sentence,
}) => {
  let content = "";
  switch (subjectname) {
    case "math":
      content = ` Generate with out explain json array for ${amount} ${operator} problems within the range of ${range[0]} to ${range[1]}, each with three options, in the format: "{number: {num1: <num1>, num2: <num2>, operator: '<operator>'}, choices: [<choice1>, <choice2>, <choice3>]}" all problems inside one array.`;
      break;
    case "english":
      if (sentence) {
        content = ` Generate with out explain a question sentence based on ${sentence} word,the correct choose inside the sentence, in the format: "[{_id,<_id>,sentence:<sentence>, choices: [<choice1>, <choice2>, <choice3>]}]" json array include one object`;
      } else {
        content = ` Generate with out explain json array for ${amount} english  problems for kids  example:( iam a boy), choices: [am, is, are] important sentance must include the correct choice, each with full sentence  and three options one of it inside the sentence, in the format: "{_id,<_id>,sentence:<sentence>, choices: [<choice1>, <choice2>, <choice3>]}" all problems inside one array.`;
      }
      break;
    case "arabic":
      if (!multiChoose) {
        content = `Generate without explanation a JSON array for ${amount} Arabic problems for kids, each with three or more options, in the format: "{sentence:<sentence>, choices: [<{id:number,answer:"text",correct:boolean}>, <{id:number,answer:"text",correct:boolean}}>, <{id:number,answer:"text",correct:boolean}>]}" all problems inside one array.`;
      } else {
        content = `Generate without explanation a JSON array for ${amount} Arabic (one or more correct answer) problems for kids, each with three or more options, in the format: "{sentence:<sentence>, choices: [<{id:number,answer:"text",correct:true}>, <{id:number,answer:"text",correct:false}}>, <{id:number,answer:"text",correct:true}>]}" all problems inside one array.`;
      }
      break;
  }

  const options = {
    method: "POST",
    url: "https://chatgpt-api8.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "30a778433amsh44ef6344d5a0937p1ca66cjsn5fdd378a630a",
      "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
    },
    data: [
      {
        content,
        role: "user",
      },
    ],
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data.text;
  } catch (error) {
    console.error(error);
  }
};

export default generateRandomDataWithAi;
