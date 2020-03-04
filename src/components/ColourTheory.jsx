import React, { Component } from "react";
import ViewToggler from "./ViewToggler";
import ColourSquare from "./ColourSquare";

class ColourTheory extends Component {
  state = {
    colourTheme: "Bad"
  };

  handleClick = () => {
    const newTheme = this.state.colourTheme === "Bad" ? "Good" : "Bad";
    this.setState({ colourTheme: newTheme });
  };
  render() {
    return (
      <main>
        <h2>Colour Theory</h2>
        <ViewToggler buttonName="Colour Wheel">
          <img
            src={require("../assets/colourWheel.png")}
            alt="colourWheelImage"
            style={{ width: 300 }}
          />
        </ViewToggler>
        <p>Using contrasting colours for emphasis</p>
        <button onClick={this.handleClick}>{this.state.colourTheme}</button>
        <div
          style={{
            borderStyle: "solid",
            borderWidth: "2px",
            width: "100px",
            alignContent: "center"
          }}
        >
          <div style={style[this.state.colourTheme].one}></div>
          <div style={style[this.state.colourTheme].two}></div>
        </div>

        <ViewToggler buttonName="Colour Scheme">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <ColourSquare colour="rgb(116, 19, 227)" />
            <ColourSquare colour="rgb(0, 96, 181)" />
            <ColourSquare colour="rgb(245, 245, 0)" />
            <ColourSquare colour="rgb(255, 140, 0)" />
          </div>
        </ViewToggler>
        <ViewToggler buttonName="Colours and Text">
          <section>
            <h3>Sub-Heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque neque suscipit amet tenetur exercitationem ab facilis
              odit inventore harum sequi officia dolorum quae modi, voluptatem
              soluta rerum porro molestias quia! Harum esse quo exercitationem
              aut dolorum! Dolorum saepe provident ex ad perspiciatis esse
              necessitatibus non, labore ducimus doloremque totam quibusdam
              harum quo. Corporis, ipsa! Quaerat ratione voluptatibus porro non
              doloribus saepe, fuga recusandae exercitationem tempore nam
              corrupti similique alias dolorem illum repellat vero fugiat ipsa
              provident temporibus minus? Velit eum quae possimus nisi tempora
              ipsum, libero cupiditate quos modi voluptatem eaque delectus nulla
              soluta, aperiam quia neque veniam asperiores quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque neque suscipit amet tenetur exercitationem ab facilis
              odit inventore harum sequi officia dolorum quae modi, voluptatem
              soluta rerum porro molestias quia! Harum esse quo exercitationem
              aut dolorum! Dolorum saepe provident ex ad perspiciatis esse
              necessitatibus non, labore ducimus doloremque totam quibusdam
              harum quo. Corporis, ipsa! Quaerat ratione voluptatibus porro non
              doloribus saepe, fuga recusandae exercitationem tempore nam
              corrupti similique alias dolorem illum repellat vero fugiat ipsa
              provident temporibus minus? Velit eum quae possimus nisi tempora
              ipsum, libero cupiditate quos modi voluptatem eaque delectus nulla
              soluta, aperiam quia neque veniam asperiores quaerat.
            </p>
          </section>
        </ViewToggler>
      </main>
    );
  }
}

const style = {
  Bad: {
    one: { height: "100px", width: "100px", backgroundColor: "Yellow" },
    two: { height: "100px", width: "100px", backgroundColor: "yellowGreen" }
  },
  Good: {
    one: { height: "100px", width: "100px", backgroundColor: "Yellow" },
    two: { height: "100px", width: "100px", backgroundColor: "Purple" }
  }
};

export default ColourTheory;
