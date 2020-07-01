import { format } from "date-fns";

export const MODEL = "Users";
export const ROW_NAME = "User";
export const COLUMNS = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  {
    id: "phone",
    label: "Phone",
  },
  {
    id: "city",
    label: "City",
  },
  {
    id: "is_admin",
    label: "Admin",
    format: (value) => (value ? "Yes" : "No"),
  },
  {
    id: "edit",
    align: "center",
  },
  {
    id: "delete",
    align: "center",
  },
];
