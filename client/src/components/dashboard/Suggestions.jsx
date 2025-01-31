import Suggestion from "./Suggestion";
import FetchSuggestionApi from "../../apis/dashboard/FetchSuggestionApi";
export default function Suggestions() {
  const suggestions = FetchSuggestionApi();

  return (
    <div className=" w-full flex flex-col mt-10 ml-5 h-auto min-h-screen">
      <div className="grid grid-cols-3">
        {suggestions
          .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
          .map((suggestion) => (
            <Suggestion
              key={suggestion._id}
              id={suggestion._id}
              fullName={suggestion.fullName}
              email={suggestion.email}
              message={suggestion.message}
              uploadedAt={suggestion.uploadedAt}
            />
          ))}
      </div>
    </div>
  );
}
