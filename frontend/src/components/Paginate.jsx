import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((s) => (
          <LinkContainer
            key={s + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${s + 1}`
                  : `/page/${s + 1}`
                : `/admin/productlist/${s + 1}`
            }
          >
            <Pagination.Item active={s + 1 === page}>{s + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
