import { useState, useMemo } from "react";
import { AppCard } from "./AppCard";
import { Button } from "@/packages/ui";
import { AppConfig } from "@/config/apps";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AppGridProps {
  apps: AppConfig[];
  itemsPerPage?: number;
  showPagination?: boolean;
}

export function AppGrid({
  apps,
  itemsPerPage = 6,
  showPagination = true,
}: AppGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(apps.length / itemsPerPage);

  const paginatedApps = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return apps.slice(startIndex, endIndex);
  }, [apps, currentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (apps.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No apps found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(page)}
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Page Info */}
      {showPagination && (
        <div className="text-center text-sm text-muted-foreground">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, apps.length)} of {apps.length}{" "}
          apps
        </div>
      )}
    </div>
  );
}
