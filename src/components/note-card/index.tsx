export function NoteCard() {
  return (
    <button className="relative text-left outline-none rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">Há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        assumenda tenetur, nesciunt excepturi molestiae veniam voluptate beatae!
        Quae deserunt commodi, vitae architecto dolore animi aspernatur vel ex
        pariatur, accusantium nihil. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aspernatur assumenda tenetur, nesciunt excepturi
        molestiae veniam voluptate beatae! Quae deserunt commodi, vitae
        architecto dolore animi aspernatur vel ex pariatur, accusantium nihil.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
