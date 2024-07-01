import React from 'react';

const WorkPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="flex justify-center items-center mt-8 text-[#c9d1d9]">
      <button
        className="px-3 py-1 mx-1 h-8 border-[0.2px] border-borderColor bg-[#21262D] hover:bg-[#292e36] rounded disabled:opacity-50"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="px-3 py-1 mx-1 h-8 border-[0.2px] border-borderColor bg-[#21262D] hover:bg-[#292e36] rounded disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default WorkPagination;
