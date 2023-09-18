import { describe, it } from '@jest/globals';
import StoreCollection from './StoreCollection';
import { IIterator } from './iteratorTypes';

interface IProduct {
  uid: string;
  title: string;
  price: number;
}

// Mock data item - 1
const firstProduct: IProduct = {
  uid: '1',
  title: 'Iphone X',
  price: 1009.0,
};

// Mock data item - 2
const secondProduct: IProduct = {
  uid: '2',
  title: 'Iphone XS',
  price: 522.0,
};

describe('Behaviours ->Iterator design pattern', () => {
  it('Should be able to retrieve a first/current item', () => {
    const collection: StoreCollection<IProduct> =
      new StoreCollection<IProduct>();

    collection.push(firstProduct);
    collection.push(secondProduct);

    const listIterator: IIterator<IProduct> = collection.listIterator();

    expect(listIterator.current()).toEqual(firstProduct);
    expect(listIterator.hasNext()).toBeTruthy();
  });

  it('Should not be able to retrieve next item', () => {
    const collection: StoreCollection<IProduct> = new StoreCollection<IProduct>(
      [firstProduct],
    );

    const listIterator: IIterator<IProduct> = collection.listIterator();

    listIterator.next();

    expect(listIterator.hasNext()).toBeFalsy();
    expect(listIterator.next()).toBeFalsy();
  });
});
