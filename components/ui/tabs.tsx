// // components/ui/tabs.tsx
// import React, { useState } from "react";

// export const Tabs: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <div>{children}</div>;
// };

// export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <div className="flex space-x-2 border-b">{children}</div>;
// };

// export const TabsTrigger: React.FC<{ title: string; active: boolean; onClick: () => void }> = ({
//   title,
//   active,
//   onClick,
// }) => {
//   return (
//     <button
//       className={`px-4 py-2 ${
//         active ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
//       }`}
//       onClick={onClick}
//     >
//       {title}
//     </button>
//   );
// };

// export const TabsContent: React.FC<{ children: React.ReactNode; active: boolean }> = ({
//   children,
//   active,
// }) => {
//   if (!active) return null;
//   return <div className="p-4">{children}</div>;
// };
