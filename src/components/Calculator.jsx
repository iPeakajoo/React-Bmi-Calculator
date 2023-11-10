import { useState } from "react";
import Swal from "sweetalert2";

const BmiTable = [
  {
    bmi: "น้อยกว่า 18.50",
    criteria: "น้ำหนักน้อย / ผอม",
    risk: "มากกว่าคนปกติ",
  },
  {
    bmi: "ระหว่าง 18.50 - 22.90",
    criteria: "ปกติ (สุขภาพดี)",
    risk: "เท่าคนปกติ",
  },
  {
    bmi: "ระหว่าง 23 - 24.90",
    criteria: "ท้วม / โรคอ้วนระดับ 1",
    risk: "อันตรายระดับ 1",
  },
  {
    bmi: "ระหว่าง 25 - 29.90",
    criteria: "อ้วน / โรคอ้วนระดับ 2",
    risk: "อันตรายระดับ 2",
  },
  {
    bmi: "มากกว่า 30",
    criteria: "อ้วนมาก / โรคอ้วนระดับ 3",
    risk: "อันตรายระดับ 3",
  },
];

const AlertModal = () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "ok",
  });
};

const Calculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [isBackgroundRed, setIsbackgroundRed] = useState(true);
  const [bmiResult, setBmiResult] = useState(0);

  const bmiCal = () => {
    const bmi = weight / (((height / 100) * height) / 100);
    setBmiResult(bmi.toFixed(2));

    //check ค่าว่าง
    if (height === 0 || weight === 0) {
      AlertModal();
      setBmiResult(0);
      return;
    }

    if (bmi < 18.5) {
      setIsbackgroundRed(false);
    } else if (bmi >= 18.5 && bmi <= 22.9) {
      setIsbackgroundRed(false);
    } else if (bmi >= 23 && bmi <= 24.9) {
      setIsbackgroundRed(true);
    } else if (bmi >= 25 && bmi <= 29.9) {
      setIsbackgroundRed(true);
    } else if (bmi >= 30) {
      setIsbackgroundRed(false);
    }
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center min-h-full mx-0 mt-10 mb-10 ">
        <div className="relative overflow-x-auto bg-gray-200 p-10 shadow-gray-500 shadow-lg rounded-lg">
          <h1 className="text-center text-4xl mb-5">BMI Calculator</h1>
          <div className="grid grid-cols-2 gap-2 ">
            <div>
              <div className="mb-2">
                <label
                  htmlFor="height"
                  className="block mb-2 text-2xl font-medium text-gray-900 light:text-black"
                >
                  Height
                </label>
                <input
                  type="number"
                  id="height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="weight"
                  className="block mb-2 text-2xl font-medium text-gray-900 light:text-black"
                >
                  Weight
                </label>
                <input
                  type="number"
                  id="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="py-4 px-4 me-2 mb-2 text-4xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
                onClick={bmiCal}
              >
                Calculate
              </button>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <div className=" bg-gray-500 w-52 h-52 flex flex-col justify-center items-center text-white rounded-lg">
                <h1 className="text-2xl">BMI Result</h1>
                <h1 className="text-7xl">{bmiResult}</h1>
              </div>
            </div>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  BMI kg/m2
                </th>
                <th scope="col" className="px-6 py-3">
                  อยู่ในเกณท์
                </th>
                <th scope="col" className="px-6 py-3">
                  ภาวะเสี่ยงต่อโรค
                </th>
              </tr>
            </thead>

            {BmiTable.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr
                    className="border-b dark:bg-gray-800 dark:border-gray-700 "
                    style={{
                      backgroundColor: isBackgroundRed
                        ? "rgb(31,41,55)"
                        : "red",
                    }}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.bmi}
                    </th>
                    <td className="px-6 py-4">{item.criteria}</td>
                    <td className="px-6 py-4">{item.risk}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Calculator;
