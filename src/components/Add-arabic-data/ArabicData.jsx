import React, { useEffect, useState } from "react";
import ArabicSentenceInput from "./ArabicSentenceInput";
import RenderData from "./RenderData";
import generateRandomDataWithAi from "../../services/generateRandomDataWithAi";

function ArabicData({ setSubjectData }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setSubjectData(data);
  }, [data]);
  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  const tryGenerate = async () => {
    setIsError(false);
    setIsLoading(true);
    let array = [];
    try {
      const arrayOfData = await generateRandomDataWithAi("arabic", 6);
      console.log("a");
      array = JSON.parse(arrayOfData);
    } catch (error) {
      setIsError(true);
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
          />
        ))}
      </div>
    </div>
  );
}

export default ArabicData;
