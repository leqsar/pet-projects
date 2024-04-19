import vehicle from '../../../../public/space-tourism/technology/image-launch-vehicle-portrait.jpg'
import vehicleTablet from '../../../../public/space-tourism/technology/image-launch-vehicle-landscape.jpg'
import spaceport from '../../../../public/space-tourism/technology/image-spaceport-portrait.jpg'
import spaceportTablet from '../../../../public/space-tourism/technology/image-spaceport-landscape.jpg'
import capsule from '../../../../public/space-tourism/technology/image-space-capsule-portrait.jpg'
import capsuleTablet from '../../../../public/space-tourism/technology/image-space-capsule-landscape.jpg'

export const technologies = [
  {
    number: 1,
    image: vehicle,
    imageTablet: vehicleTablet,
    name: 'Launch vehicle',
    definition: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
      payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
      WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
      it's quite an awe-inspiring sight on the launch pad!`,
  },
  {
    number: 2,
    image: spaceport,
    imageTablet: spaceportTablet,
    name: 'Spaceport',
    definition: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
      by analogy to the seaport for ships or airport for aircraft. Based in the 
      famous Cape Canaveral, our spaceport is ideally situated to take advantage 
      of the Earth’s rotation for launch.`,
  },
  {
    number: 3,
    image: capsule,
    imageTablet: capsuleTablet,
    name: 'Space capsule',
    definition: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
      capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
      you'll spend your time during the flight. It includes a space gym, cinema, 
      and plenty of other activities to keep you entertained.`,
  },
]