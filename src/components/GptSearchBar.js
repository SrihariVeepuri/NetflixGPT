import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-2 m-4 shadow-lg rounded-lg col-span-9"
          type="text"
          placeholder={lang?.[langKey]?.gptInputPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang?.[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
