import DraggableComponent from "./DraggableComponent";

const Sidebar = () => {
  return (
    <div className="w-full bg-gray-800 text-white p-6 overflow-auto h-full">
      <h2 className="text-2xl font-semibold mb-8">Draggable Components</h2>
      <div className="space-y-4">
        <DraggableComponent type="Progress Bar" />
        <DraggableComponent type="Question Text" />
        <DraggableComponent type="Timer" />
        <DraggableComponent type="Option" />
      </div>
    </div>
  );
};

export default Sidebar;
