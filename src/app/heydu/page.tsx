export default function Page() {
  const tocWithPageNumbers = [
    { title: 'Introduction' },
    { title: 'Chapter 1' },
    { title: 'Chapter 2' },
    { title: 'Conclusion' },
    { title: 'Introduction' },
    { title: 'Chapter 1' },
    { title: 'Chapter 2' },
    { title: 'Conclusion' },
  ];

  return (
    <div className="w-full h-full p-4">
      <div className="border-2 border-gray-200 border-solid w-full aspect-[0.707] max-w-[210mm] max-h-[297mm] shadow-xl shadow-slate-700 mx-auto relative bg-red-100">
        <div className="flex gap-6 w-full absolute top-10 left-4 sm:top-20 sm:left-16">
            <h1 className="uppercase text-2xl sm:text-5xl">Table of Contents</h1>
        </div>
        <div className="absolute top-32 left-4 sm:top-64 sm:left-20">
            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-40 gap-y-6 sm:gap-y-10">
                {tocWithPageNumbers.map((item, idx) => (
                    <a href={`#${item.title}`} className="flex gap-2 sm:gap-4 items-center" key={idx}>
                        <div className="flex flex-col gap-1">
                            <div className="text-xl sm:text-3xl text-blue-600 font-bold">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                            <div className="text-sm sm:text-md font-semibold">
                                {item.title}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}