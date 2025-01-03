import { useMemo } from "react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const memoizedPages = useMemo(() => {
        return pages.map(page => (
            <button
                key={page}
                onClick={() => onPageChange(page)}
                disabled={page === currentPage}
            >
                {page}
            </button>
        ));
    }, [pages, onPageChange, currentPage]);
    
    return (
        <>
            {memoizedPages}
        </>
    );
};

export default Pagination;