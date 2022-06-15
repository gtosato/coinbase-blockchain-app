import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "bcszislf",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skwqZ1QelvvNKvpibH2aVFcctJ9mzbHC9QPsrevwhp1YPmkVDBpPftiept2sWh6H7g5Z3X4xVnB5nNEFwcySoW6vv4zyyUeUBqb3Y8n9VvSXvzG9hiPjize6M9cWtlR8sp5q5jgOaqDgJ9rKXO1LtgivoJUtY48ezRWzOPh7tONaVsQ4ht88",
  useCdn: false,
});
