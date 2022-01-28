import React from "react";
import { Container, Content } from "@/styles/pages/Home";
import { GetServerSideProps } from "next";

export default function Home() {
  return (
    <Container>
      <h1>Notes</h1>
      <Content>
        <p>Initial Content</p>
      </Content>
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data = [] } = req.cookies;

  return {
    props: {
      data: data
    }
  }
};