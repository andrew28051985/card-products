import React from "react";
import FullPrice from "/src/full-price/full-price";

export default {
  title: 'Полная цена (fullPrice)'
}

const Template = (args) => <FullPrice {...args} />;

export const WithOldPrice = Template.bind({});
WithOldPrice.args = {
  oldPrice: 1000, 
  price: 500
};

export const OldPriceLessPrice = Template.bind({});
OldPriceLessPrice.args = {
  oldPrice: 500, 
  price: 1500
};

export const WithOutOldPrice = Template.bind({});
WithOutOldPrice.args = {
  price: 1500
};
