import { MotorcycleProps, MotorcycleRequest } from "@/types";


export async function fetchFipeMotorcycles({ brands, model, year }: MotorcycleRequest) {
  if (!brands) {
    brands = "80";
  }

  const headers = {
    "X-Subscription-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzQwZTRiNC05MzUzLTQ0YTMtOGMwZi01NTZlZGQwODc2YjciLCJlbWFpbCI6Imx1Y2FzZnJhbmNlbGlubzUyNUBnbWFpbC5jb20iLCJpYXQiOjE3MjE3Mzk5ODN9.FRVVDtpKtUpynjmwIFt47BZNJdubFlrH6RryfD0u0m4"
  };

  let url = `https://fipe.parallelum.com.br/api/v2/motorcycles/brands/${brands}/models`;

  if (model !== "") {
    url += `/${model}/years`;
  }

  if (year !== "") {
    url += `/${year}`;
  }

  const response = await fetch(url, { headers });
  const result = await response.json();

  return Array.isArray(result) ? result : [result];
}

export function formatName(name : string) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export const translationMap: { [key: string]: string } = {
  vehicleType: "Tipo de Veículo",
  price: "Preço",
  brand: "Marca",
  model: "Modelo",
  modelYear: "Ano do Modelo",
  fuel: "Combustível",
  codeFipe: "Código FIPE",
  referenceMonth: "Mês de Referência",
  fuelAcronym: "Sigla do Combustível"
};

//uNGsRvMJOeFfzabh