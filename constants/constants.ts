import { join } from 'path';

export const typeEquipment = [
  {
    title: 'Enceinte positive',
    between_desc: '0°C à 4°C',
    min: Number(0),
    max: 4,
  },
  {
    title: 'Enceinte sensible positive',
    between_desc: '0°C à 2°C',
    min: Number(0),
    max: 2,
  },
  {
    title: 'Enceinte produits finis',
    between_desc: '0°C à 3°C',
    min: Number(0),
    max: 3,
  },
  {
    title: 'Enceinte produits laitiers',
    between_desc: '0°C à 8°C',
    min: Number(0),
    max: 8,
  },
  {
    title: 'Enceinte négative',
    between_desc: '-16°C à -30°C',
    min: Number(-30),
    max: -16,
  },
  {
    title: 'Enceinte légumes',
    between_desc: '0°C à 10°C',
    min: Number(0),
    max: 10,
  },
  {
    title: 'Zone réfrigérée',
    between_desc: '< 12°C',
    min: Number(null),
    max: 12,
  },
  {
    title: 'Carcasse de viande',
    between_desc: '0°C à 7°C',
    min: Number(0),
    max: 7,
  },
];

export const typeProduct = [
  {
    name: 'Produit sec',
    description: '',
  },
  {
    name: 'Produit frais',
    description: '',
  },
  {
    name: 'Produit surgelé',
    description: '',
  },
  {
    name: 'Produit laitier - BOF',
    description: '',
  },
  {
    name: 'Produit sensible',
    description: 'viande hachée ou poisson frais',
  },
  {
    name: 'Produit chaud',
    description: '',
  },
  {
    name: 'Carcasse de viande',
    description: '',
  },
];

export const FILE_FOLDER_DIR = join(process.cwd(), 'photos');
