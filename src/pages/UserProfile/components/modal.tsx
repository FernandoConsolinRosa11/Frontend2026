export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] border border-gray-800 p-5! w-full max-w-md shadow-2xl ">
        {children}
        <div className="flex justify-center mt-8">
          <button
            onClick={onClose}
            className="
        cursor-pointer
        px-4 py-2
        rounded-sm
        transition
        hover:bg-gray-700
        active:scale-100 
        w-full 
      "
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
