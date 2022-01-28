import React from "react";
import { Container, Content } from "@/styles/pages/Home";
import { GetServerSideProps } from "next";
import Notes from "@/components/Notes";

export default function Home({notesData}) {
  return (
    <Container>
      <h1>Notes</h1>
      <Content>
        <Notes initialData={notesData}/>
      </Content>
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { notesData = false } = req.cookies;

  return {
    props: {
      notesData: notesData
    }
  }
};