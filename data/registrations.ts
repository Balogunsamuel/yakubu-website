export interface Registration {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
}

export const registrations: Registration[] = [
  {
    id: 'kadpoly',
    name: 'Kaduna Polytechnic (HND/ND)',
    shortName: 'Kaduna Poly',
    description: 'Application assistance for Higher National Diploma and National Diploma programmes.',
    icon: 'GraduationCap',
  },
  {
    id: 'kasu',
    name: 'Kaduna State University',
    shortName: 'KASU',
    description: 'Undergraduate and postgraduate admission application support.',
    icon: 'School',
  },
  {
    id: 'police-academy',
    name: 'Police Academy',
    shortName: 'Police Academy',
    description: 'Application support for Nigeria Police Academy admission.',
    icon: 'Shield',
  },
  {
    id: 'nda',
    name: 'Nigerian Defence Academy',
    shortName: 'NDA',
    description: 'Regular and short service course application assistance.',
    icon: 'Swords',
  },
  {
    id: 'dssc',
    name: 'Direct Short Service Commission',
    shortName: 'DSSC',
    description: 'DSSC application and documentation support for all branches.',
    icon: 'Medal',
  },
  {
    id: 'npower',
    name: 'NPower',
    shortName: 'NPower',
    description: 'NPower programme registration and application support.',
    icon: 'Zap',
  },
  {
    id: 'airforce',
    name: 'Nigerian Airforce',
    shortName: 'Airforce',
    description: 'Airforce recruitment application and documentation assistance.',
    icon: 'Plane',
  },
  {
    id: 'navy',
    name: 'Nigerian Navy',
    shortName: 'Navy',
    description: 'Navy recruitment application and documentation support.',
    icon: 'Anchor',
  },
]
