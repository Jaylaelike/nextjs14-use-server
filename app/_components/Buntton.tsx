import React, { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { fetchData } from "../_action/fecth-data";

type Data = {
  id: number;
  name: string;
};

function Button() {
  const { pending } = useFormStatus();

  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    try {
      fetchData().then((res: Data[] | any) => setData(res));
    } catch (error: any) {
      console.log(error.message);
    }
  }, [pending]);

  return (
    <>
      <button
        className="bg-blue-500 rounded px-4 py-2 text-white font-semibold"
        type="submit"
      >
        {pending ? "Submit..." : "Submit"}
      </button>

      {data.map((item: any) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-between p-2 gap-4"
        >
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
}

export default Button;
