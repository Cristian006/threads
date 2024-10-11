import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

export default function GraphLayout({ children, topLeftContent, topRightContent, sidebarContent, bottomContent, containerRef, openSideBar }) {
  // Inline style for the encoded SVG background pattern
  const gridPatternStyle = {
    // backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%234A5568' /%3E%3C/svg%3E")`,
    //backgroundSize: '20px 20px',
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed top-0 left-0 p-8">
        {topLeftContent}
      </div>
      <div className="flex-grow flex flex-col" style={gridPatternStyle}>
        <div className="flex-grow overflow-hidden relative" ref={containerRef}>
          <div className="absolute top-0 right-0 p-8">
            {topRightContent}
          </div>
          {children}
        </div>
        <div>
          {bottomContent}
        </div>
      </div>
      <div className={openSideBar ? 'block' : 'hidden'}>
        {sidebarContent}
      </div>
    </div>
  );
}
/*
export default function GraphLayout({ children, topLeftContent, topRightContent, sidebarContent, bottomContent, containerRef, openSideBar }) {
  // Inline style for the encoded SVG background pattern
  const gridPatternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%234A5568' /%3E%3C/svg%3E")`,
    backgroundSize: '20px 20px',
  };

  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(200);

  // Debounce function to limit the resize rate
  const handleResize = (type, { size }) => {
    console.log(type, size);
    switch (type) {
      case 'w':
        setWidth(size.width);
        return;
      case 'h':
        setHeight(size.height);
        return;
    }
    // console.log('Resized to', size);
  }

  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 p-8">
        {topLeftContent}
      </div>
      <div className="flex-grow flex flex-col" style={gridPatternStyle}>
        <div className="flex-grow overflow-hidden relative" ref={containerRef}>
          <div className="absolute top-0 right-0 p-8">
            {topRightContent}
          </div>
          {children}
        </div>
        <Resizable height={height} onResize={(e, val) => handleResize('h', val)} resizeHandles={['n']}>
          <div style={{ height: height }}>
            {bottomContent}</div>
        </Resizable>
      </div>
      <Resizable width={width} onResize={(e, val) => handleResize('w', val)} resizeHandles={['w']} className={openSideBar ? 'block' : 'hidden'}>
        <div style={{ width: width }}>{sidebarContent}</div>
      </Resizable>
    </div>
  );
}

*/