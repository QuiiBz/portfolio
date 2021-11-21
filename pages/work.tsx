import { FC, ReactNode, useMemo } from 'react';
import Hoverable from '../components/Hoverable';
import Typography from '../components/Typography';
import Title from '../components/Title';
import Col from '../components/Col';
import Row from '../components/Row';
import Layout from '../layouts/Layout';
import { theme } from '../stitches.config';
import { useTheme } from 'next-themes';

type Job = {
  title: string;
  company: string;
  duration: string;
  url: string;
  icon: {
    colorFrom: string;
    colorTo: string;
    svg: ReactNode;
  };
};

const Work: FC = () => {
  const { resolvedTheme } = useTheme();

  const jobs = useMemo<Job[]>(() => {
    return [
      {
        title: 'Front End Developer (intern)',
        company: 'Scaleway',
        duration: 'September 2021 - September 2022',
        url: 'https://scaleway.com/',
        icon: {
          colorFrom: '#4F0599',
          colorTo: '#8000FF',
          svg: (
            <path d="M16.61 11.11v5.72a1.77 1.77 0 0 1-1.54 1.69h-4a1.43 1.43 0 0 1-1.31-1.22 1.09 1.09 0 0 1 0-.18 1.37 1.37 0 0 1 1.37-1.36h1.74a1 1 0 0 0 1-1v-3.62a1.4 1.4 0 0 1 1.18-1.39h.17a1.37 1.37 0 0 1 1.39 1.36zm-6.46 1.74V9.26a1 1 0 0 1 1-1H13a1.37 1.37 0 0 0 1.37-1.37 1 1 0 0 0 0-.17 1.45 1.45 0 0 0-1.41-1.2H9a1.81 1.81 0 0 0-1.58 1.66v5.7a1.37 1.37 0 0 0 1.37 1.37H9a1.4 1.4 0 0 0 1.15-1.4zm12-4.29V20A4.53 4.53 0 0 1 18 24h-7.58a8.57 8.57 0 0 1-8.56-8.57V4.54A4.54 4.54 0 0 1 6.4 0h7.18a8.56 8.56 0 0 1 8.56 8.56zm-2.74 0a5.83 5.83 0 0 0-5.82-5.82H6.4a1.79 1.79 0 0 0-1.8 1.8v10.89a5.83 5.83 0 0 0 5.82 5.8h7.44a1.79 1.79 0 0 0 1.54-1.48z" />
          ),
        },
      },
      {
        title: 'Open source maintainer',
        company: 'Fig',
        duration: 'August 2021 - now',
        url: 'https://fig.io/',
        icon: {
          colorFrom: (resolvedTheme === 'light' ? theme.colors.black : theme.colors.extraLight).value,
          colorTo: (resolvedTheme === 'light' ? theme.colors.gray : theme.colors.light).value,
          svg: (
            <>
              <rect width="20" height="20" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_17_2" transform="scale(0.03125)" />
                </pattern>
                <image
                  id="image0_17_2"
                  width="32"
                  height="32"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAu0lEQVRYhe2XQQ7DIAwE1z3wutBTnpR38QweEnp3hUQkl4BUEVL34JVWkQh4x5wM/k0eQACQAPBkp1J76fW83RDa81aHLz8MP+wlQFAACBJgHy3knMvfCGBlZtTO6/l/2Se9S4ArncRWcAMkNs5OAWh23rmJEwAJgCExM317jojqHHqMBs+SARiAARiAARiAAVwGIKJ1xj71kUxjKE0SQH0s9woAHw8TaD/NDj3L1bxuCM01c+1T53oC8AbUuLkzQKhiqgAAAABJRU5ErkJggg=="
                />
              </defs>
            </>
          ),
        },
      },
    ];
  }, [resolvedTheme]);

  return (
    <Layout title="work">
      <Col css={{ width: '100%', height: '100%' }}>
        <Title>work</Title>
        <Col css={{ width: '100%', height: '100%' }} justify="center" align="center">
          {jobs.map(job => (
            <Row key={job.company} css={{ margin: '16px 0' }}>
              <Col css={{ marginRight: '32px' }}>
                <Typography important css={{ marginBottom: '8px' }}>
                  {job.title}
                </Typography>
                <Typography>{job.duration}</Typography>
              </Col>
              <Hoverable
                color={{ from: job.icon.colorFrom, to: job.icon.colorTo }}
                href={job.url}
                icon={
                  <svg
                    fill={job.icon.colorFrom}
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {job.icon.svg}
                  </svg>
                }
              >
                {job.company}
              </Hoverable>
            </Row>
          ))}
        </Col>
      </Col>
    </Layout>
  );
};

export default Work;
