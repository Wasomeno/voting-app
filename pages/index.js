import { useContext, useState } from "react";
import { useRouter } from "next/router";
import ChartCanvas from "../components/ChartCanvas";
import { UserContext } from "../context/userContext";

export default function Home() {
  const userDetails = useContext(UserContext).userDetails;
  const [candidates, setCandidates] = useState([
    "Supardi",
    "Suparman",
    "Sumanto",
    "Budi",
    "Popo",
    "Parno",
  ]);

  const router = useRouter();

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="w-full text-start mb-2">
        <p className="font-poppins font-medium text-sm ml-4 underline">
          {userDetails.name}
        </p>
      </div>
      <div className="text-center mb-4">
        <h1 className="font-poppins font-medium text-xl">Voting App</h1>
      </div>
      <div className="w-full h-5/6 flex flex-wrap justify-center items-start m-2">
        <div className="w-full h-2/6 mb-2 flex flex-col items-center">
          <div className="w-full text-center mb-2">
            <h2 className="font-poppins font-medium">Current Votes</h2>
          </div>
          <div className="h-5/6 md:h-4/6 w-9/12 md:w-4/12">
            <ChartCanvas />
          </div>
        </div>
        <div className="h-4/6 md:h-5/6 w-10/12 md:w-6/12">
          <div className="text-center m-2 mb-4">
            <h2 className="font-poppins font-medium text-base text-center">
              Voting Candidates
            </h2>
          </div>
          <div className="h-5/6 flex flex-col gap-3 items-center overflow-y-scroll max-h-96 md:max-h-full md:overflow-y-hidden">
            {candidates.map((candidate, index) => (
              <div
                key={index}
                onClick={() =>
                  router.push("/candidates/" + parseInt(index + 1))
                }
                className="w-5/6 md:w-4/6 p-3 flex justify-around items-center bg-slate-200 shadow-md rounded-lg transition duration-300 ease-in-out cursor-pointer hover:bg-white hover:shadow-slate-300"
              >
                <div className="w-2/6 flex">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-black mx-auto"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>

                <div className="w-2/6 text-center">
                  <h5 className="font-poppins text-sm md:text-base">
                    {candidate}
                  </h5>
                </div>
                <div className="w-2/6 text-center">
                  <h5 className="font-poppins text-xs md:text-sm font-medium">
                    Details {">"}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
