import React from 'react';
import './Menu.css'
import hamburger from './MenuImages/hamburger.jpg';
import cheeseburger from './MenuImages/cheeseburger.jpeg';
import fries from './MenuImages/fries.jpeg';
import coffee from './MenuImages/coffee.jpeg';
import tea from './MenuImages/tea.jpeg';
import cola from './MenuImages/cola.jpeg';
import nanoid from 'nanoid'

const Goods = [
    {name: 'Hamburger', price: 80, image: hamburger},
    {name: 'Cheeseburger', price: 90, image: cheeseburger},
    {name: 'Fries', price: 45, image: fries},
    {name: 'Coffee', price: 70, image: coffee},
    {name: 'Tea', price: 50, image: tea},
    {name: 'Cola', price: 40, image: cola},
];

const Menu = props => {
    return (
        <div className='menu'>
            {Goods.map(good => {
                return <div className="goodInfo" onClick={() => props.addGood(good)} key={nanoid()}>
                    <img src={good.image} alt="#"/>
                    {good.name}
                    <p>Price: {good.price} KGS</p>
                </div>
            })}
        </div>
    );
};

export default Menu;