export default function GraphLayout({ children, topLeftContent, sidebarContent, bottomContent }) {
  // Inline style for the encoded SVG background pattern
  const gridPatternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%234A5568' /%3E%3C/svg%3E")`,
    backgroundSize: '20px 20px',
  };

  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 p-8">
        {topLeftContent}
      </div>
      {/* Main graph area with grid pattern */}
      <div className="flex-grow flex flex-col" style={gridPatternStyle}>
        <div className="flex-grow">
          {children} {/* Your D3 graph would be rendered inside this div */}
        </div>
        {/* Timeline scrubber section */}
        <div className="">
          {bottomContent} {/* The timeline scrubber component will be rendered here */}
        </div>
      </div>
      {/* Sidebar */}
      <div className="">
        {sidebarContent}
      </div>
    </div>
  );
}