import { useEffect, useState } from "react";
import Link from "next/link";
import { generateYearOptions } from "@/app/utils/generateYearOptions";
import Selector from "@/app/components/selector";
import { useFetchMakes } from "./usefetchMakes";

export interface Make {
  MakeId: string;
  MakeName: string;
}

export const FilterPage = () => {
  const [makes, setMakes] = useState<Make[]>([]);
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const isNextEnabled = !selectedMake || !selectedYear;
  const yearsOption = generateYearOptions();

  useEffect(() => {
    const fetchMakes = async () => {
      const makesData = await useFetchMakes();
      setMakes(makesData);
    };
    fetchMakes();
  }, []);

  const handleMakeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Vehicle Filter</h1>

      <Selector
        id="make"
        label="Vehicle Make"
        options={makes}
        value={selectedMake}
        onChange={handleMakeChange}
        optionKey="MakeId"
        optionLabel="MakeName"
      />

      <Selector
        id="year"
        label="Model Year"
        options={yearsOption}
        value={selectedYear}
        onChange={handleYearChange}
        optionKey="year"
        optionLabel="year"
      />

      <div className="mt-6">
        <Link href={`/result/${selectedMake}/${selectedYear}`}>
          <button
            className={`${
              !isNextEnabled ? "bg-blue-500" : "bg-gray-500"
            } text-white p-2 rounded-md w-[300px]`}
            disabled={isNextEnabled}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
