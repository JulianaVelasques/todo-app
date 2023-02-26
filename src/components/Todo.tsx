export function Todo() {
  return (
    <div className="flex items-center gap-1 bg-white pl-5 w-[307px] h-12">
      <div className="relative">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-full border-[#E3E4F1] checked:bg-gradient-to-br checked:from-[#57ddff] checked:to-[#c058f3] focus:ring-transparent before:content-[''] before:hidden before:absolute before:top-[62%] before:left-[50%] before:translate-y-[-50%] before:translate-x-[-50%] before:pointer-events-none before:bg-check-icon before:bg-contain before:bg-no-repeat before:w-[55%] before:h-[55%] checked:before:block"
        />
      </div>

      <label>Something to do...</label>
    </div>
  );
}
