import React from "react";
import Article from "/src/article/article";

export default {
  title: 'Артикул (Article)'
}

const Template = (args) => <Article {...args} />;

export const DefaultArticle = Template.bind({});
DefaultArticle.args = {
  children: 258965,
}
