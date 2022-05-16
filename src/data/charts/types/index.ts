type ColorThemes = {
  [key: string]: string;
};

type Dataset = {
  label: string;
  backgroundColor: string | string[];
  borderColor: string;
  data: number[];
}

type PlutusDataset = {
  label: string;
  backgroundColor: string | string[];
  borderColor: string;
  data: number[];
  tension: number;
}

type GeneratedData = {
  labels: string[];
  datasets: Dataset[];
}

type GeneratedPlutusData = {
  labels: string[];
  datasets: PlutusDataset[];
}