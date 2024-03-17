import Categories from "@/components/Categories";
import { dua } from "@/components/demo";

export default function Home() {
  return (
    <main className="flex gap-2">
      <div className="w-[350px] h-[700px] ml-36 bg-white">
        <div className="text-center py-6 w-full bg-[#1FA45B]">
          <h1 className="text-white font-semibold text-lg">Categories</h1>
        </div>
        <Categories demo={dua} />
      </div>
      <div className="w-[500px] h-[500px] bg-white"></div>
    </main>
  );
}
