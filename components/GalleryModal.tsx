"use client";

export default function GalleryModal({
  images,
  selectedIndex,
  setSelectedIndex,
}: {
  images: string[];
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
}) {
  if (selectedIndex === null) return null;

  const previous = () => {
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const next = () => {
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
      <button
        onClick={() => setSelectedIndex(null)}
        className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 font-black text-black"
      >
        ✕
      </button>

      <button
        onClick={previous}
        className="absolute left-6 rounded-full bg-cyan-300 px-5 py-4 text-2xl font-black text-slate-950"
      >
        ←
      </button>

      <img
        src={images[selectedIndex]}
        alt="Gallery image"
        className="max-h-[85vh] max-w-[85vw] rounded-[2rem] object-contain"
      />

      <button
        onClick={next}
        className="absolute right-6 rounded-full bg-cyan-300 px-5 py-4 text-2xl font-black text-slate-950"
      >
        →
      </button>
    </div>
  );
}