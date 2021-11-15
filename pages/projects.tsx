import { GetStaticProps } from "next";
import { FC } from "react";
import Title from "../components/Title";
import Layout from "../layouts/Layout";
import Col from "../components/Col";

interface Repo {
  owner: string;
  repo: string;
  link: string;
  description: string;
  stars: number;
  forks: number;
}

interface Props {
  repos: Repo[]
}

const Projects: FC<Props> = ({ repos }) => {
  return (
    <Layout title='projects'>
      <Col>
        <Title>projects</Title>
        <Col>
        {
          repos.map(repo => (
            <RepoCards key={repo.repo} user={repo.owner} repos={[repo.repo]} />
          ))
        }
        </Col>
      </Col>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=QuiiBz')
  const repos = await response.json() as Repo[]

  return {
    props: {
      repos,
    },
    revalidate: 60
  };
}

export default Projects
