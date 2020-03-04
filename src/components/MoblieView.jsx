import React from "react";
import ArticleCard from "./ArticleCard";

const MoblieView = () => {
  return (
    <main style={pageStyles.grid}>
      <h2 style={{ gridColumn: "span 2" }}>this is mobile first</h2>
      <ArticleCard />
      <ArticleCard />

      <section
        style={{
          gridColumn: 2,
          gridRow: 2
        }}
      >
        <div
          style={{
            backgroundColor: "#AD8B6B",
            borderRadius: "2px",
            fontFamily: "Helvetica"
          }}
        >
          <h4>Side Section</h4>
          <p style={{ fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            quae doloribus molestiae magnam autem iste deserunt, error
            aspernatur voluptatem, assumenda reiciendis illo adipisci est.
            Voluptates dolorem reiciendis, ipsa, tempore molestias aliquid at
            rem amet delectus, doloribus fugit! Omnis vitae odit iure quasi,
            suscipit eligendi quod id quae adipisci, aperiam ipsum. Molestias
            aliquid facere porro obcaecati amet nobis quod repellendus eius
            quibusdam molestiae illo soluta error esse culpa perspiciatis,
            veniam tenetur deleniti libero repellat cum. Autem, veritatis
            asperiores blanditiis consequatur sint maiores. Voluptatum a omnis
            inventore nihil ut voluptatibus eum officia saepe sapiente incidunt
            dolorem, commodi vitae eveniet at voluptatem?
          </p>
        </div>
      </section>
      <section style={{ gridColumn: 2, gridRow: 3 }}>
        <h4>Links</h4>
        <a href="https://www.theguardian.com/uk">The Guardian</a>
        <a href="/">some Link</a>
        <a href="/">some Link</a>
        <a href="/">some Link</a>
      </section>
    </main>
  );
};

const pageStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr"
  }
};

export default MoblieView;
