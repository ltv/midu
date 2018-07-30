import React, { Component } from "react";
// react components used to create a SVG / Vector map
import { VectorMap } from "react-jvectormap";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class VectorMaps extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h3 className="text-center">
                World Map
                <br />
                <small>
                  <a
                    href="https://www.npmjs.com/package/react-jvectormap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React wrapper component
                  </a>{" "}
                  of jQuery{" "}
                  <a
                    href="http://jvectormap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    jVector Map
                  </a>{" "}
                  pluging.
                </small>
              </h3>
              <Card
                content={
                  <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "280px"
                    }}
                    containerClassName="map"
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      }
                    }}
                    series={{
                      regions: [
                        {
                          values: mapData,
                          scale: ["#AAAAAA", "#444444"],
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default VectorMaps;
