// components/ui/table.tsx
import React from "react";

export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <table className="min-w-full table-auto">{children}</table>;
};

export const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <thead>
      <tr className="bg-gray-100">{children}</tr>
    </thead>
  );
};

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <tr className="hover:bg-gray-50">{children}</tr>;
};

export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <td className="px-4 py-2 border">{children}</td>;
};
