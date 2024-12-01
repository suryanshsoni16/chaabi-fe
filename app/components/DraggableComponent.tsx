import { useDrag } from "react-dnd";

interface DraggableComponentProps {
  type: string;
}

const DraggableComponent = ({ type }: DraggableComponentProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 shadow-lg transition-all ${
        isDragging ? "opacity-50 scale-95" : "opacity-100"
      }`}
      role="button"
      aria-grabbed={isDragging ? "true" : "false"}
    >
      <span className="text-white text-lg font-semibold">{type}</span>
    </div>
  );
};

export default DraggableComponent;
