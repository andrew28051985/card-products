import React, { useState } from "react";
import Title from "/src/title/title";
import Article from "/src/article/article";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Popularity from "/src/popularity/popularity";
import Slider from "/src/slider/slider";
import PopUp from "/src/popup/popup";
import Order from "/src/order/order";
import Tabs from "/src/tabs/tabs";
import Accordion from "/src/accordion/accordion";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue,
  SelectButton
} from "./styled";
const MAX_TEXT_SIZE = 200;
const COMMENTS_COUNT = 3;

function AllComponents({ product }) {
  const [count, setCount] = useState(1);
  const [showInfoInAccordion, setShowInfoInAccordion] = useState(true);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);
  const price = product.price * count;
  const oldPrice = product.oldPrice * count;

  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments
          comments={product.comments.slice(0, commentsShow)}
          onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Article>{product.code}</Article>
      </Header>
      <ProductWrapper>
        <Slider images={product.images} />
        <ProductInfo>
          <ProductInfoLine>
            Цена: <PageFullPrice price={price} oldPrice={oldPrice} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:{" "}
            <PageCounter
              onChange={setCount}
              value={count}
              initValue={1}
              minValue={1}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton
            type="button"
            size="large"
            onClick={() => setIsShowPopup(true)}
          >
            Купить
          </BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      <SelectButton
        onClick={() =>
          showInfoInAccordion
            ? setShowInfoInAccordion(false)
            : setShowInfoInAccordion(true)
        }
      >
        Сменить вид
      </SelectButton>
      {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
      <PopUp
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        title="Оформление заказа"
      >
        <Order />
      </PopUp>
    </StyledProductPage>
  );
}

export default AllComponents;
