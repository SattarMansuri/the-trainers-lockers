import unlock from '../assets/unlock.png'
import endurance from '../assets/Endurance.svg'
import recovery from '../assets/Recovery.svg'
import flexify from '../assets/flexify.png'
import joint from '../assets/Joint-Health.svg'
import epo from '../assets/epo.png'
import oxygen from '../assets/O2.svg'
import bleeder from '../assets/bleeder.png'
import lungs from '../assets/lungs.svg'
import royal from '../assets/royal.png'
import performance from '../assets/Performance.png'
import trainer1 from '../assets/trainer 1.png'
import trainer2 from '../assets/trainer 2.png'
import trainer3 from '../assets/trainer 3.png'
import packages from '../assets/Package.svg'
import delivery from '../assets/Delivery.svg'
import customer from '../assets/Customer-Service.svg'

export const PRODUCTS_LISTS=[
  {
    id: 1,
    productImg: unlock,
    productName: 'UN-LOCK+',
    about: 'Horserace performance muscle formula for endurance, fatigue and recovery',
    supports: [
      {id: 1, image: endurance, word: 'Endurance'},
      {id:2, image: recovery, word: 'Recovery'}
    ],
    col: '#F58220',
    bgCol: '#FFEAD8'
  },
  {
    id: 2,
    productImg: flexify,
    productName: 'Flexify-HA',
    about: 'Joint support formula for cartilage, flexibility and joint health',
    supports: [
      {id: 1, image: joint, word: 'Joint Health'}
    ],
    col: '#00B0AD',
    bgCol: '#DAFFFE'
  },
  {
    id: 3,
    productImg: epo,
    productName: 'EPO-Equine',
    about: 'All-natural blood builder optimises oxygen levels for peak performance',
    supports: [
      {id: 1, image: oxygen, word: 'Oxygen Levels'}
    ],
    col: '#9E3023',
    bgCol: '#FFE0E0'
  },
  {
    id: 4,
    productImg: bleeder,
    productName: 'Bleeder Shield',
    about: 'One-of-a-kind respiratory formula. Now comes in a powder',
    supports: [
      {id: 1, image: lungs, word: 'Lungs Support'}
    ],
    col: '#663179',
    bgCol: '#F8E3FF'
  },
  {
    id: 5,
    productImg: royal,
    productName: 'EQ-Royal',
    about: 'Natural blood builder focused on optimising performance for equestrian horses.',
    supports: [
      {id: 1, image: performance, word: 'Performance'}
    ],
    col: '#28996A',
    bgCol: '#DDFFF1',
  },
]

export const REVIEWS = [
  {id: 1, profile: trainer1},
  {id: 2, profile: trainer2},
  {id: 3, profile: trainer3},
]

export  const OUR_PROMISE = [
  { id: 1, figure: packages, letter: 'Never Got Returned Products' },
  { id: 2, figure: delivery, letter: 'Fast Delivery' },
  { id: 3, figure: customer, letter: 'Customer Support' },
  { id: 4, figure: customer, letter: '24/7 Availability' }
]

export const FEATURES =[
  { id: 1, figure: packages, letter: 'Return Policy', para: "We’ve never had a return. That's how confident we are." },
  { id: 2, figure: delivery, letter: 'Fast Delivery', para: 'Guaranteed next-day shipping across New Zealand and Australia' },
  { id: 3, figure: customer, letter: 'Customer Support', para: 'Contact us for personalised recommendations.' },
]