import { useEffect, useState } from "react";

const ConentGame = () => {
  // const route = useRoute();
  // const dispatch = useDispatch();
  // const { playerName }=  useSelector((state) => state.auth);

  //to speak words
  const msg = new SpeechSynthesisUtterance();

  const playerName = "friend";

  const word_Pic = [
    {
      _id: 0,
      DefintioninEn: "cat",
      Image: "https://cdn-icons-png.flaticon.com/128/1998/1998592.png",
    },
    {
      _id: 1,
      DefintioninEn: "dog",
      Image: "https://cdn-icons-png.flaticon.com/128/1998/1998627.png",
    },
    {
      _id: 2,
      DefintioninEn: "bat",
      Image: "https://cdn-icons-png.flaticon.com/128/616/616620.png",
    },
    {
      _id: 3,
      DefintioninEn: "apple",
      Image: "https://cdn-icons-png.flaticon.com/128/415/415733.png",
    },
    {
      _id: 4,
      DefintioninEn: "egg",
      Image: "https://cdn-icons-png.flaticon.com/128/2682/2682201.png",
    },
    {
      _id: 5,
      DefintioninEn: "fish",
      Image: "https://cdn-icons-png.flaticon.com/512/3066/3066721.png",
    },
  ];

  // const { word_Pic, url } = useSelector((state) => state.global);
  //to set how many correct answers
  const [done, setDone] = useState(0);
  //to set how many wrong answers
  const [wrong, setWrong] = useState(0);
  //if right match, will be true
  const [correct0, setCorrect0] = useState(false);
  const [correct1, setCorrect1] = useState(false);
  const [correct2, setCorrect2] = useState(false);
  const [correct3, setCorrect3] = useState(false);
  const [correct4, setCorrect4] = useState(false);
  const [correct5, setCorrect5] = useState(false);

  ///to store wrong count for each word
  const [wrong0, setWrong0] = useState(0);
  const [wrong1, setWrong1] = useState(0);
  const [wrong2, setWrong2] = useState(0);
  const [wrong3, setWrong3] = useState(0);
  const [wrong4, setWrong4] = useState(0);
  const [wrong5, setWrong5] = useState(0);

  //////////////////create sounds array//////////////
  const sounds = [
    "../assets/sounds/correct.mp3",
    "../assets/sounds/wrong.mp3",
    "../assets/sounds/done.mp3",
    "../assets/sounds/touch.mp3",
  ];
  /////////////////////////////////////////////////
  /////////////////function to play sound\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const playSound = async (i) => {
    const audio = new Audio(sounds[i]);
    await audio.play();
  };
  //////////////////////////////////////////////////////////////////

  ///////////////refresh on navigating back from Score screen///////////////
  const [render, setRender] = useState(false);

  useEffect(() => {
    // dispatch(fetchData());
    setRandWord(random());
    setRandPic(random());
    setDone(0);
    setWrong(0);
    setCorrect0(false);
    setCorrect1(false);
    setCorrect2(false);
    setCorrect3(false);
    setCorrect4(false);
    setCorrect5(false);
    setWrong0(0);
    setWrong1(0);
    setWrong2(0);
    setWrong3(0);
    setWrong4(0);
    setWrong5(0);
    setNoRepeat([]);
  }, [render]);

  //////////////////////////////////////////////

  ///creating a random array of numbers from 0 to 5 \\\\\\\\\\\\\\\\\\\\\\\\\\
  const length = word_Pic.length;
  const random = () => {
    var i = 0;
    var firstNum = 7;
    while (firstNum >= 6) {
      firstNum = Math.floor(Math.random() * word_Pic.length);
    }
    var randoms = [firstNum];
    while (i < length - 1) {
      var num = Math.floor(Math.random() * word_Pic.length);
      var count = 0;
      if (num < 6) {
        for (let r = 0; r < randoms.length; r++) {
          if (num === randoms[r]) {
            count += 1;
          }
        }
        if (count === 0) {
          randoms.push(num);
          i++;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return randoms;
  };

  ///////////////////////////////////////////////////////////////////

  ////////////////////creating words cards\\\\\\\\\\\\\\\\\\\\\\\\\\\
  var wordCards = [];
  var wordID = -1;
  var wordIndex = -1;
  const [randomWords, setRandWord] = useState(random());
  const setWordView = (correct) => {
    word_Pic?.forEach((word, i) => {
      wordCards.push(
        <div
          className="w-full flex justify-center items-center m-2 h-5/6  hover:cursor-pointer"
          onClick={() => {
            wordIndex = word_Pic.indexOf(word_Pic[randomWords[i]]);
            wordID = word_Pic[randomWords[i]]?._id;
            counter++;
            check().then((data) => {
              setWordView(data);
            });
          }}
          key={word_Pic[randomWords[i]]?._id}
        >
          {word_Pic.indexOf(word_Pic[randomWords[i]]) == 0 && correct0 ? (
            <p
              className="rounded-3xl text-4xl flex justify-center items-center"
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                backgroundColor: "#50D97F",
              }}
            >
              {word_Pic[randomWords[i]]?.DefintioninEn}
            </p>
          ) : word_Pic.indexOf(word_Pic[randomWords[i]]) == 1 && correct1 ? (
            <p
              className="rounded-3xl text-4xl flex justify-center items-center"
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                backgroundColor: "#50D97F",
              }}
            >
              {word_Pic[randomWords[i]]?.DefintioninEn}
            </p>
          ) : word_Pic.indexOf(word_Pic[randomWords[i]]) == 2 && correct2 ? (
            <p
              className="rounded-3xl text-4xl flex justify-center items-center"
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                backgroundColor: "#50D97F",
              }}
            >
              {word_Pic[randomWords[i]]?.DefintioninEn}
            </p>
          ) : word_Pic.indexOf(word_Pic[randomWords[i]]) == 3 && correct3 ? (
            <p
              className="rounded-3xl text-4xl flex justify-center items-center"
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                backgroundColor: "#50D97F",
              }}
            >
              {word_Pic[randomWords[i]]?.DefintioninEn}
            </p>
          ) : word_Pic.indexOf(word_Pic[randomWords[i]]) == 4 && correct4 ? (
            <p
              className="rounded-3xl text-4xl flex justify-center items-center"
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                backgroundColor: "#50D97F",
              }}
            >
              {word_Pic[randomWords[i]]?.DefintioninEn}
            </p>
          ) : word_Pic.indexOf(word_Pic[randomWords[i]]) == 5 && correct5 ? (
            <p
              className="rounded-3xl text-4xl flex justify-center items-center"
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                backgroundColor: "#50D97F",
              }}
            >
              {word_Pic[randomWords[i]]?.DefintioninEn}
            </p>
          ) : (
            <p
              className="rounded-3xl text-white text-4xl flex justify-center items-center"
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                fontWeight: "bold",
                backgroundColor: "#1D3Eff",
              }}
            >
              {word_Pic[randomWords[i]]?.DefintioninEn}
            </p>
          )}
        </div>
      );
    });

    return wordCards;
  };
  //////////////////////////////////////////////////////////////////
  /////////////////////creating pics cards\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  var picCards = [];
  var picID = -2;
  const [randomPics, setRandPic] = useState(random());
  const setPicView = () => {
    var picIndex = -2;
    word_Pic?.forEach((word, i) => {
      const imgPath = word_Pic[randomPics[i]]?.Image;
      picCards.push(
        <div
          className="w-full flex justify-center items-center m-2 h-5/6 hover:cursor-pointer"
          // style={styles.card}
          onClick={() => {
            // playSound(3);
            picIndex = word_Pic[randomPics[i]];
            picID = word_Pic[randomPics[i]]?._id;

            counter++;
            check();
          }}
          key={word_Pic[randomPics[i]]?._id}
        >
          {word_Pic.indexOf(word_Pic[randomPics[i]]) == 0 && correct0 ? (
            <div
              className="rounded-3xl flex"
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#50D97F",
              }}
            >
              <img src={imgPath} style={styles.img} />
            </div>
          ) : word_Pic.indexOf(word_Pic[randomPics[i]]) == 1 && correct1 ? (
            <div
              className="rounded-3xl flex"
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#50D97F",
              }}
            >
              <img src={imgPath} style={styles.img} />
            </div>
          ) : word_Pic.indexOf(word_Pic[randomPics[i]]) == 2 && correct2 ? (
            <div
              className="rounded-3xl flex"
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#50D97F",
              }}
            >
              <img src={imgPath} style={styles.img} />
            </div>
          ) : word_Pic.indexOf(word_Pic[randomPics[i]]) == 3 && correct3 ? (
            <div
              className="rounded-3xl flex"
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#50D97F",
              }}
            >
              <img src={imgPath} style={styles.img} />
            </div>
          ) : word_Pic.indexOf(word_Pic[randomPics[i]]) == 4 && correct4 ? (
            <div
              className="rounded-3xl flex"
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#50D97F",
              }}
            >
              <img src={imgPath} style={styles.img} />
            </div>
          ) : word_Pic.indexOf(word_Pic[randomPics[i]]) == 5 && correct5 ? (
            <div
              className="rounded-3xl flex"
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#50D97F",
              }}
            >
              <img src={imgPath} style={styles.img} />
            </div>
          ) : (
            <div
              className="rounded-3xl flex "
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1D3Eff",
              }}
            >
              <img src={imgPath} style={styles.img} />
            </div>
          )}
        </div>
      );
    });

    return picCards;
  };
  /////////////////////////////////////////////////////////////////////////////

  ///////////////////handling Card press\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //counter will be increased by 1 every click on card
  var counter = 0;
  // array to store the done wordID to not be repeated
  const [noRepeat, setNoRepeat] = useState([]);

  //to store if the word is new or already done
  var status = "";

  const check = async () => {
    //if correct
    if (counter % 2 === 0 && wordID === picID) {
      //check if the wordID is already done
      status = "new";
      if (noRepeat.length !== 0) {
        noRepeat.forEach((el) => {
          if (el === wordID) {
            status = "found";
          }
        });
      }

      //if wordID was not found (new) in the noRepeat array
      if (status === "new") {
        setNoRepeat([...noRepeat, wordID]);
        setDone(done + 1);
        //to speak the word
        msg.text = `"${word_Pic[wordIndex]?.DefintioninEn}"`;
        window.speechSynthesis.speak(msg, {
          rate: 0.4,
          quality: "Enhanced",
          language: "en-US",
        });

        //wait a while before continuing to speak the word completely
        setTimeout(() => {
          if (wordIndex == 0) {
            setCorrect0(true);
          } else if (wordIndex == 1) {
            setCorrect1(true);
          } else if (wordIndex == 2) {
            setCorrect2(true);
          } else if (wordIndex == 3) {
            setCorrect3(true);
          } else if (wordIndex == 4) {
            setCorrect4(true);
          } else if (wordIndex == 5) {
            setCorrect5(true);
          }

          if (done < 5) {
            //play sound
            playSound(0);
          } else if (done === 5) {
            //play sound
            playSound(2);
          }
        }, 500);
      }

      //if wrong
    } else if (counter % 2 === 0 && wordID !== picID) {
      //to edit wrong count
      if (wordIndex == 0) {
        setWrong0(wrong0 + 1);
      } else if (wordIndex == 1) {
        setWrong1(wrong1 + 1);
      } else if (wordIndex == 2) {
        setWrong2(wrong2 + 1);
      } else if (wordIndex == 3) {
        setWrong3(wrong3 + 1);
      } else if (wordIndex == 4) {
        setWrong4(wrong4 + 1);
      } else if (wordIndex == 5) {
        setWrong5(wrong5 + 1);
      }
      setWrong(wrong + 1);
      //play sound
      playSound(1);
    }
  };
  ///////////////////////////////////////////////////////////////////
  return (
    <div className="grid grid-cols-12">
      <div
        id="topBar"
        className="col-start-1 col-span-12 grid grid-cols-12 bg-cyan-700 h-16"
      >
        <label className="col-start-1 col-span-5 text-white text-xl font-semibold flex justify-center items-center">
          Welcome {`${playerName} `}
        </label>
        <div className="col-start-6 col-span-1 flex justify-start items-center">
          <img
            className="w-3/6"
            src="https://cdn-icons-png.flaticon.com/512/9845/9845280.png"
            alt=""
          />
        </div>

        {done >= 6 ? (
          <div
            className="col-start-11 col-span-1 bg-pink-500 m-3 rounded-xl flex justify-center items-center hover:cursor-pointer"
            onClick={() => {
              setRender(!render);
              const sentData = [
                { question_id: word_Pic[0]?._id, attempts: wrong0 },
                { question_id: word_Pic[1]?._id, attempts: wrong1 },
                { question_id: word_Pic[2]?._id, attempts: wrong2 },
                { question_id: word_Pic[3]?._id, attempts: wrong3 },
                { question_id: word_Pic[4]?._id, attempts: wrong4 },
                { question_id: word_Pic[5]?._id, attempts: wrong5 },
              ];
              // dispatch(sendAttempts({ questions: sentData, gameID: "0" }));
              // navigation.navigate("Score", {
              //   wrong,
              //   word_Pic,
              //   path: "Connect",
              // });
            }}
          >
            <div className="w-5/12">
              <img src="https://cdn-icons-png.flaticon.com/512/556/556690.png" />
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "25%",
              marginTop: "8.5%",
              alignItems: "center",
              margin: "1%",
            }}
          >
            <label></label>
          </div>
        )}
      </div>
      <div className="col-start-1 col-span-12 grid grid-cols-12 bg-cyan-200">
        <div
          className="col-start-1 col-span-12 flex flex-row justify-center items-center m-2 "
          style={{
            height: window.innerHeight * 0.42,
          }}
        >
          {setWordView()}
        </div>
        <div
          className="col-start-1 col-span-12  flex flex-row justify-center items-center m-2 "
          style={{
            height: window.innerHeight * 0.42,
          }}
        >
          {setPicView()}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#36B0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "40%",
    height: "20%",
    margin: "3%",
  },
  input: {
    backgroundColor: "#C5F1E7",
    width: "80%",
    height: 50,
    margin: "3%",
    padding: 5,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
  },
  pressable: {
    backgroundColor: "#2CE770",
    width: "90%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
    marginBottom: "3%",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#79FA04",
  },
  startText: {
    marginTop: "10%",
    fontSize: 15,
    color: "#fff",
  },
  body: {
    // flex: 1,
    width: window.innerWidth,
    height: window.innerHeight - 90,
    flexDirection: "row",
    backgroundColor: "#60A5FA",
  },
  leftView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    margin: "2%",
  },
  rightView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    margin: "2%",
  },
  card: {
    width: "100%",
    height: "15.6%",
    margin: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "50%",
    height: "80%",
    margin: 5,
  },
  cardText: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#09B8F4",
  },
  topBar: {
    flex: 1 / 20,
    backgroundColor: "#1E3A8A",
    justifyContent: "center",
    padding: 8,
  },
};

export default ConentGame;
