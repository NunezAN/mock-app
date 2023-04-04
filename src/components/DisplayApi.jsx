import axios from "axios";
import React, { useEffect, useState } from "react";

const DisplayApi = () => {
  const [data, setData] = useState([]);
  //https://jsonplaceholder.typicode.com/posts/1/comments
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      setData(data.data);
      //   console.log(data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((elem) => (
        <div
          key={elem.id}
          className="bg-slate-800 text-white border-green-400 border-2 rounded-md p-4 m-4 flex flex-col gap-4"
        >
          <span>name: {elem.name}</span>
          <span>email: {elem.email}</span>
          <span>body: {elem.body}</span>
        </div>
      ))}
    </div>
  );
};

export default DisplayApi;
