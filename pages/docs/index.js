export default function DocsHome() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Surgeyos Documentation</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to the Surgeyos Documentation. Select a project to view its docs.
      </p>
      {/* List of projects or links to subfolders (e.g., /docs/robotic-arm) */}
    </div>
  );
}