import { Suspense } from "react";
import { useFetchModels } from "./useFetchModels";
import { useFetchMakes } from "../filter-page/usefetchMakes";
import { Make } from "../filter-page";

interface ResultPageProps {
  makeId: string;
  year: string;
}

interface Modal {
  Make_Name: string;
  Model_ID: string;
  Model_Name: string;
}

export async function ResultPage({ params }: { params: ResultPageProps }) {
  const { makeId, year } = await params;
  const models = await useFetchModels(makeId, year);

  return (
    <Suspense fallback={<p>Loading vehicle models...</p>}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Vehicle Results</h1>
        <p className="text-lg">
          Selected Make: <span className="font-bold">{makeId}</span>
        </p>
        <p className="text-lg">
          Selected Year: <span className="font-bold">{year}</span>
        </p>
        <div className="mt-6">
          <h2 className="text-2xl">Available Models</h2>
          <ul className="mt-2">
            {models?.length > 0 ? (
              (models as Modal[]).map((model, index) => (
                <li key={index} className="text-lg">
                  {model?.Make_Name} {model?.Model_ID}, {model?.Model_Name}
                </li>
              ))
            ) : (
              <p>No models found for this combination.</p>
            )}
          </ul>
        </div>
      </div>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const makes = await useFetchMakes();
  const years = Array.from({ length: 10 }, (_, index) => 2015 + index);

  const paths = makes.flatMap((make: Make) =>
    years.map((year) => ({
      params: { makeId: make.MakeId, year: year.toString() },
    }))
  );

  return { paths };
}
