import commander from '../../../../public/space-tourism/crew/image-douglas-hurley.png'
import engineer from '../../../../public/space-tourism/crew/image-anousheh-ansari.png'
import pilot from '../../../../public/space-tourism/crew/image-victor-glover.png'
import specialist from '../../../../public/space-tourism/crew/image-mark-shuttleworth.png'

export const members = [
  {
    image: commander,
    position: 'Commander',
    name: 'Douglas Hurley',
    info: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
      and former NASA astronaut. He launched into space for the third time as 
      commander of Crew Dragon Demo-2.`,
    number: 1,
  },
  {
    image: engineer,
    position: 'Flight Engineer',
    name: 'Anousheh Ansari',
    info: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
      Ansari was the fourth self-funded space tourist, the first self-funded woman to 
      fly to the ISS, and the first Iranian in space. `,
    number: 2,
  },
  {
    image: pilot,
    position: 'Pilot',
    name: 'Victor Glover',
    info: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
      International Space Station. Glover is a commander in the U.S. Navy where 
      he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
      station systems flight engineer. `,
    number: 3,
  },
  {
    image: specialist,
    position: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    info: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
      the Linux-based Ubuntu operating system. Shuttleworth became the first South 
      African to travel to space as a space tourist.`,
    number: 4,
  },
]