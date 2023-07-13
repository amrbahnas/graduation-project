import React, { useEffect, useState } from "react";
import ArabicSentenceInput from "./ArabicSentenceInput";
import RenderData from "./RenderData";

function ArabicData({ setSubjectData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setSubjectData(data);
  }, [data]);
  const handleAddData = (newData) => {
    setData([...data, newData]);
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
      <ArabicSentenceInput onAddData={handleAddData} />
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
