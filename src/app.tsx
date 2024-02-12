import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw-expert.png";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export type Note = {
  id: string;
  date: Date;
  content: string;
};

export function App() {
  const [search, setSearch] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  const onNoteCreated = (content: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const onNoteDeleted = (id: string) => {
    const notesArray = notes.filter((note) => note.id !== id);

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
  };

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLowerCase().includes(search.toLowerCase())
        )
      : notes;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="logo do nwl expert" />
      <form className="w-full">
        <input
          name="search"
          type="text"
          className="w-full bg-transparent placeholder:text-slate-500 tracking-tight outline-none text-3xl font-semibold"
          onChange={handleSearch}
          placeholder="Busque em suas notas..."
        />
      </form>

      <div className="bg-slate-700 h-px w-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => {
          return (
            <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
          );
        })}
      </div>
    </div>
  );
}
