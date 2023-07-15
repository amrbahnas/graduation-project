import React, { useEffect, useState } from "react";
import ArabicSentenceInput from "./ArabicSentenceInput";
import RenderData from "./RenderData";
import generateRandomDataWithAi from "../../services/generateRandomDataWithAi";
import { toast } from "react-hot-toast";
import { InfoIcon } from "../../utils/icons";

function ArabicData({ setSubjectData, activeStep }) {
  const [data, setData] = useState([]);
  const [multiChoose, setMultiChoose] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setSubjectData(data);
  }, [data]);
  useEffect(() => {
    setData([]);
  }, [activeStep]);

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  const tryGenerate = async () => {
    setIsError(false);
    setData([]);
    setIsLoading(true);
    let array = [];
    try {
      const arrayOfData = await generateRandomDataWithAi({
        subjectname: "arabic",
        amount: 6,
        multiChoose,
      });
      console.log("a");
      array = JSON.parse(arrayOfData);
    } catch (error) {
      setIsError(true);
      toast("Please try again.", {
        icon: <InfoIcon />,
      });
      setData([]);
    }
    setIsLoading(false);
    console.log(array);
    if (array.length > 0) setData(array);
  };

  const handleUpdateData = (updatedData, index) => {
    const updatedDataArray = [...data];
    updatedDataArray[index] = updatedData;
    setData(updatedDataArray);
  };

  const handleDeleteData = (index) => {
    const updatedDataArray = [...data];
    updatedDataArray.splice(index, 1);
    setData(updatedDataArray);
  };

  return (
    <div>
      <ArabicSentenceInput
        onAddData={handleAddData}
        tryGenerate={tryGenerate}
        isError={isError}
        isLoading={isLoading}
        multiChoose={multiChoose}
        setMultiChoose={setMultiChoose}
      />
      <div className=" text-base md:text-lg font-semibold mb-4">
        Number of sentences: {data.length}
      </div>
      <div className=" mb-8 p-1 shadow-inner min-h-[200px] border max-h-[600px] overflow-scroll">
        {data.map((item, index) => (
          <RenderData
            key={index}
            data={item}
            onDelete={() => handleDeleteData(index)}
            onUpdate={(updatedData) => handleUpdateData(updatedData, index)}
            multiChoose={multiChoose}
          />
        ))}
      </div>
    </div>
  );
}

export default ArabicData;
