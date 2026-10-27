// TODO: Client to fill in actual prices
// All prices are currently set to "Call for price"

export interface PricingItem {
  id: string
  service: string
  price: string
  unit?: string
  note?: string
}

export interface PricingCategory {
  id: string
  name: string
  items: PricingItem[]
}

export const pricing: PricingCategory[] = [
  {
    id: 'printing',
    name: 'Printing & Copying',
    items: [
      { id: 'photocopy-bw', service: 'Photocopying (B&W)', price: 'Call for price', unit: 'per page' },
      { id: 'photocopy-colour', service: 'Photocopying (Colour)', price: 'Call for price', unit: 'per page' },
      { id: 'print-bw', service: 'Printing (B&W)', price: 'Call for price', unit: 'per page' },
      { id: 'print-colour', service: 'Printing (Colour)', price: 'Call for price', unit: 'per page' },
      { id: 'graph-printing', service: 'Graph Printing', price: 'Call for price', unit: 'per page' },
      { id: 'music-notes', service: 'Music Notes Printing', price: 'Call for price', unit: 'per page' },
    ],
  },
  {
    id: 'typing',
    name: 'Typing Services',
    items: [
      { id: 'typing-page', service: 'Typing', price: 'Call for price', unit: 'per page' },
    ],
  },
  {
    id: 'binding',
    name: 'Binding & Laminating',
    items: [
      { id: 'spiral-binding', service: 'Spiral Binding', price: 'Call for price', unit: 'per document' },
      { id: 'slide-binding', service: 'Slide Binding', price: 'Call for price', unit: 'per document' },
      { id: 'laminating-a4', service: 'Laminating (A4)', price: 'Call for price', unit: 'per page' },
      { id: 'laminating-a3', service: 'Laminating (A3)', price: 'Call for price', unit: 'per page' },
    ],
  },
  {
    id: 'scanning',
    name: 'Scanning',
    items: [
      { id: 'scan-bw', service: 'Scanning (B&W)', price: 'Call for price', unit: 'per page' },
      { id: 'scan-colour', service: 'Scanning (Colour)', price: 'Call for price', unit: 'per page' },
    ],
  },
  {
    id: 'internet',
    name: 'Internet & POS',
    items: [
      { id: 'internet', service: 'Internet Usage', price: 'Call for price', unit: 'per hour' },
      { id: 'pos-withdrawal', service: 'POS Withdrawal', price: 'Call for price', note: 'Fee based on amount' },
      { id: 'pos-transfer', service: 'POS Transfer', price: 'Call for price', note: 'Fee based on amount' },
    ],
  },
  {
    id: 'registration',
    name: 'Online Registration Assistance',
    items: [
      { id: 'kadpoly', service: 'Kaduna Polytechnic Registration', price: 'Call for price' },
      { id: 'kasu', service: 'Kaduna State University Registration', price: 'Call for price' },
      { id: 'police-academy', service: 'Police Academy Registration', price: 'Call for price' },
      { id: 'nda', service: 'NDA Registration', price: 'Call for price' },
      { id: 'dssc', service: 'DSSC Registration', price: 'Call for price' },
      { id: 'npower', service: 'NPower Registration', price: 'Call for price' },
      { id: 'airforce', service: 'Airforce Registration', price: 'Call for price' },
      { id: 'navy', service: 'Navy Registration', price: 'Call for price' },
    ],
  },
]
