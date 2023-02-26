export function InputTodo() {
  return (
    <div className="flex items-center gap-1 bg-white pl-5 w-[327px] h-12 mt-[35px] rounded-md">
      <span className="h-[20px] w-[20px] border border-solid rounded-full border-[#E3E4F1]"></span>

      <input
        type="text"
        placeholder="Create a new todo..."
        className="border-none focus:ring-transparent text-xs"
      />
    </div>
  );
}
