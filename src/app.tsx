import logo from "./assets/logo-nlw-expert.png";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

const note = {
  date: new Date(),
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi sapiente porro officia qui earum! Commodi exercitationem labore animi distinctio. Totam delectus rerum explicabo excepturi corporis eum id laboriosam earum?",
};

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="logo do nwl expert" />
      <form className="w-full">
        <input
          name="search"
          type="text"
          className="w-full bg-transparent placeholder:text-slate-500 tracking-tight outline-none text-3xl font-semibold"
          placeholder="Busque em suas notas..."
        />
      </form>

      <div className="bg-slate-700 h-px w-full" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard note={note} />
      </div>
    </div>
  );
}
