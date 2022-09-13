import { faker } from '@faker-js/faker';
import WineListItem from '../components/wine/WineListItem';
import data from './data.json';

export function getFakeData(amount = 100): WineListItem[] {
  let result: WineListItem[] = [...data]
  Array.from({ length: amount }).forEach(() => result.push(createRandomWine()))
  return result;
}

function createRandomWine(): WineListItem {
  const types = ['red', 'white'];
  const randomNumber = faker.datatype.number({ min: 0, max: types.length - 1 })
  return {
    id: faker.datatype.uuid(),
    alcoholPercentage: faker.datatype.number({ min: 11, max: 15 }),
    description: faker.lorem.paragraph(),
    image: faker.image.cats(1024, 1024),
    type: types[randomNumber],
    name: faker.company.name(),
    winery: faker.company.companySuffix(),
    location: `${faker.address.country()} - ${faker.address.city()}`,
    rating: faker.datatype.float({ min: 0, max: 5 }),
    size: "750ml",
    source: "https://fakerjs.dev/",
    year: faker.datatype.number({ min: 1900, max: 2022 })
  };
}