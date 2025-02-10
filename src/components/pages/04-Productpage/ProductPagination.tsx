'use client';
 
import { usePathname, useSearchParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FC } from 'react';

interface ProductPaginationProps {
  totalPages: number;
}

const ProductPagination: FC<ProductPaginationProps> = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderEllipsis = (min: number, max: number) => (
    <PaginationItem>
      <PaginationEllipsis
        href={createPageURL(Math.floor(min + (max - min) / 2))}
      />
    </PaginationItem>
  );
  const renderPageLink = (pageNumber: number) => (
    <PaginationItem>
      <PaginationLink
        href={createPageURL(pageNumber)}
        isActive={pageNumber === currentPage}
      >
        {pageNumber}
      </PaginationLink>
    </PaginationItem>
  );

  // No pagination if there's only a single page or the page is out of bounds.
  if (totalPages == 1 || currentPage < 1 || currentPage > totalPages)
    return null;
  return (
    <Pagination className='w-full h-10'>
      <PaginationContent>
        <PaginationPrevious
          href={createPageURL(currentPage - 1)}
          aria-disabled={currentPage <= 1}
          tabIndex={currentPage <= 1 ? -1 : undefined}
          className={currentPage <= 1 ? "pointer-events-none opacity-30" : undefined}
        >
        </PaginationPrevious>
        {currentPage === 1 ? null : renderPageLink(1)}
        {currentPage === 1 || currentPage - 1 === 1 || currentPage - 2 === 1
          ? null
          : currentPage - 3 > 1
            ? renderEllipsis(2, currentPage - 2)
            : renderPageLink(currentPage - 2)}
        {currentPage === 1 || currentPage - 1 === 1
          ? null
          : renderPageLink(currentPage - 1)}
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {currentPage === totalPages || currentPage + 1 === totalPages
          ? null
          : renderPageLink(currentPage + 1)}
        {currentPage === totalPages ||
        currentPage + 1 === totalPages ||
        currentPage + 2 === totalPages
          ? null
          : currentPage + 3 < totalPages
            ? renderEllipsis(currentPage + 2, totalPages - 1)
            : renderPageLink(currentPage + 2)}
        {currentPage === totalPages ? null : renderPageLink(totalPages)}
        <PaginationNext
          href={createPageURL(currentPage + 1)}
          aria-disabled={currentPage >= totalPages}
          tabIndex={currentPage >= totalPages ? -1 : undefined}
          className={currentPage >= totalPages ? "pointer-events-none opacity-30" : undefined}
        >
          
        </PaginationNext>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
