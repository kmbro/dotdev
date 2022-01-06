const Experience = () => {
  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="p-4 rounded-lg border shadow-md basis-1/3 bg-slate-100 dark:bg-slate-900">
        <header>Overview</header>
        <ul className="pl-8 list-disc">
          <li>Cornell</li>
          <li>Amazon</li>
          <li>AWS</li>
        </ul>
      </div>
      <div className="p-4 basis-2/3">
        Content Coming Soon...
      </div>
    </div>
  );
};

export default Experience;
