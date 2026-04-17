type TableProps = {
  className?: string;
  children: React.ReactNode;
};

export const Table = (props: TableProps) => {
  return <table {...props} />;
};

type TableHeaderColumnProps = {
  className?: string;
  children: React.ReactNode;
};

export const TableHeaderColumn = (props: TableHeaderColumnProps) => {
  return <th {...props} />;
};

type TableHeaderProps = {
  className?: string;
  thClassName?: string;
  headers: string[];
};

export const TableHeader = (props: TableHeaderProps) => {
  return (
    <thead className={props.className}>
      <TableRow>
        {props.headers.map((header) => (
          <TableHeaderColumn
            className={props.thClassName}
            key={header}
          >
            {header}
          </TableHeaderColumn>
        ))}
      </TableRow>
    </thead>
  );
};

export const TableBody = (props: { children: React.ReactNode }) => {
  return <tbody {...props} />;
};

export const TableRow = (props: TableProps) => {
  return <tr {...props} />;
};

export const TableCell = (props: TableProps) => {
  return <td {...props} />;
};

type DataTableProps = {
  tableHeaders: TableHeaderProps;
  children: React.ReactNode;
};

export const DataTable = ({ tableHeaders, children }: DataTableProps) => {
  return (
    <Table className="w-full">
      <TableHeader {...tableHeaders} />
      <TableBody>{children}</TableBody>
    </Table>
  );
};
