import headphones from "../public/headphones.jpg";
import shoes from "../public/Shoes.jpg";
import digitalClock from "../public/DigitalClock.jpg";
import { StaticImageData } from "next/image";

export interface Order {
  id: number;
  itemsCount: number;
  total: number;
  date: Date;
  items: OrderItem[];
}
export interface OrderItem {
  id: number;
  imgUrl: StaticImageData;
  name: string;
  quantity: number;
  price: number;
}

export const orders: Order[] = [
  {
    id: 12345,
    itemsCount: 3,
    total: 12000,
    date: new Date(2022, 5, 8),
    items: [
      { id: 1, imgUrl: shoes, name: "Shoe", quantity: 2, price: 200 },
      {
        id: 2,
        imgUrl: digitalClock,
        name: "Digital Clock",
        quantity: 1,
        price: 800,
      },
      {
        id: 3,
        imgUrl: headphones,
        name: "Headphones",
        quantity: 3,
        price: 500,
      },
    ],
  },
  {
    id: 12346,
    itemsCount: 3,
    total: 12000,
    date: new Date(2022, 5, 8),
    items: [
      { id: 1, imgUrl: shoes, name: "Shoe", quantity: 2, price: 200 },
      {
        id: 2,
        imgUrl: digitalClock,
        name: "Digital Clock",
        quantity: 1,
        price: 800,
      },
      {
        id: 3,
        imgUrl: headphones,
        name: "Headphones",
        quantity: 3,
        price: 500,
      },
    ],
  },
  // {
  //   id: 12347,
  //   itemsCount: 3,
  //   total: 12000,
  //   date: new Date(2022, 5, 8),
  //   items: [
  //     { id: 1, imgUrl: shoes, name: "Shoe", quantity: 2, price: 200 },
  //     {
  //       id: 2,
  //       imgUrl: digitalClock,
  //       name: "Digital Clock",
  //       quantity: 1,
  //       price: 800,
  //     },
  //     {
  //       id: 3,
  //       imgUrl: headphones,
  //       name: "Headphones",
  //       quantity: 3,
  //       price: 500,
  //     },
  //   ],
  // },
];
