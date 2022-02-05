import React from "react";
import { Ul } from "/src/elements";
import { CoomentsLi, CoomentsButton, Name, Text } from "./styled";

const Comments = ({ comments, onShowMore, allCommentsLength }) => {
  const commentsList =
    comments &&
    comments.map(({ id, author, text }) => (
      <CoomentsLi key={id}>
        <Name>{author}</Name>
        <Text>{text}</Text>
      </CoomentsLi>
    ));
  return (
    <React.Fragment>
      <div>
        <Ul>{commentsList}</Ul>
        {allCommentsLength > comments.length && (
          <CoomentsButton onClick={onShowMore}>Показать ещё</CoomentsButton>
        )}
      </div>
    </React.Fragment>
  );
};

export default Comments;
