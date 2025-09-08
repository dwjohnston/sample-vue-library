import type { VNode, VNodeChild } from "vue";

type TableRow = Record<string, unknown>;

type PaginationResponse<T extends TableRow> = {
  data: Array<T>;
  paginationInfo: {
    pageNumber: number;
    pageSize: number;
    totalResults: number;
  };
};

type TableColumnConfig<T extends TableRow> = {
  [K in keyof T]: {
    propertyKey: K;
    label: string;

    // I'm rethinking this - because shouldn't this be the pervue of the backend?
    // In which case - what do you do when the sort order changes?
    // sortFn?: (a: T[K], b: T[K]) => number;
    renderCell: (props: { value: T[K]; row: T }) => VNode;

    renderLabel: () => VNode;
  };
}[keyof T];

type ValidId<T extends TableRow> = {
  [K in keyof T]: T[K] extends string | number ? K : never;
}[keyof T];

export type TableProps<T extends TableRow> = {
  getPageFn: (paginationInfo: {
    page: number;
    pageSize: number;

    sort?: {
      sortKey: keyof T;
      sortDirection: "ascending" | "descending";
    };
  }) => Promise<PaginationResponse<T>>;

  idKey: ValidId<T>;
  columns: Array<TableColumnConfig<T>>;
};

export type Table2Props<T extends TableRow> = {
  initialPagination?: {
    pageSize: number;
    pageNumber: number;
  };

  getPageFn: (paginationInfo: {
    page: number;
    pageSize: number;

    sort?: {
      sortKey: keyof T;
      sortDirection: "ascending" | "descending";
    };
  }) => Promise<PaginationResponse<T>>;
  idKey: ValidId<T>;

  columns: Array<{
    key: keyof T & string;
    /**
     * Default behaviour depends on value type.
     * Numbers will be right aligned
     * Strings left aligned
     *
     *
     */
    renderType?: "template";
  }>;
};
