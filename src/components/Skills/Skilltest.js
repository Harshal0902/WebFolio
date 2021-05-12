import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const gridExamplesPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>Column</MDBCol>
        <MDBCol>Column</MDBCol>
        <div className="w-100" />
        <MDBCol>Column</MDBCol>
        <MDBCol>Column</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default gridExamplesPage;