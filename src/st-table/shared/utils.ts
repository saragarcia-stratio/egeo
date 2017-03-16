import { FieldsMetadata } from './st-list.model';

export function getColPercent(type: string, rowLength: number, metadata: Array<FieldsMetadata>): string {
  let average: number = rowLength / metadata.length;
  let percentage: number;
  switch (type) {
    case 'number':
      percentage = (2 * average) / 3;
      break;
    // Text and others
    default:
      let numberCols = getNumberCols(metadata);
      percentage = (rowLength - (((2 * average) / 3) * numberCols)) / (metadata.length - numberCols);
      break;
  }
  return percentage + '%';
}

function getNumberCols(metadata: Array<FieldsMetadata>): number {
  return metadata.filter((field) => field.type === 'number').length;
}
