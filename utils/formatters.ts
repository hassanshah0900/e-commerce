const formatter = Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  minimumFractionDigits: 0,
  currencySign: "accounting",
});

export function formatCurrency(amount: number) {
  return formatter.format(amount);
}

const dateFormatter = Intl.DateTimeFormat("en-PK", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function formatDate(date: Date) {
  return dateFormatter.format(date);
}
