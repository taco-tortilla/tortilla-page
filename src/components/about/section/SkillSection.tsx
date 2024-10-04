import { Description } from '../Description';
import { DescSection } from '../DescSection';
import { Section } from '../Section';
import { SubTitle } from '../SubTitle';
import { Title } from '../Title';
import { UnorderdList } from '../UnorderdList';

export function SkillSection() {
  return (
    <Section>
      <Title>Skills</Title>
      <SubTitle>Language</SubTitle>
      <DescSection>
        <UnorderdList>
          <li>
            <Description>Java</Description>
            <UnorderdList>
              <li>
                <Description>Server-side dev using Spring Boot</Description>
              </li>
            </UnorderdList>
          </li>
          <li>
            <Description>TypeScript</Description>
            <UnorderdList>
              <li>
                <Description>Front-end dev using React + Next.js</Description>
              </li>
            </UnorderdList>
          </li>
          <li>
            <Description>Python</Description>
            <UnorderdList>
              <li>
                <Description>
                  Serverless Development with Azure Functions
                </Description>
              </li>
              <li>
                <Description>Competitive programming</Description>
              </li>
            </UnorderdList>
          </li>
        </UnorderdList>
      </DescSection>
      <SubTitle>Frameworks</SubTitle>
      <DescSection>
        <UnorderdList>
          <li>
            <Description>Spring Boot</Description>
          </li>
          <li>
            <Description>React</Description>
          </li>
          <li>
            <Description>Next.js</Description>
          </li>
        </UnorderdList>
      </DescSection>
      <SubTitle>Other</SubTitle>
      <DescSection>
        <UnorderdList>
          <li>
            <Description>Git</Description>
          </li>
          <li>
            <Description>CI/CD</Description>
            <UnorderdList>
              <li>
                <Description>Github Actions</Description>
              </li>
            </UnorderdList>
          </li>
          <li>
            <Description>Docker</Description>
            <UnorderdList>
              <li>
                <Description>Building a Dev Enviroment</Description>
              </li>
            </UnorderdList>
          </li>
          <li>
            <Description>UI libraries/frameworks</Description>
            <UnorderdList>
              <li>
                <Description>Material UI</Description>
              </li>
              <li>
                <Description>Tailwind CSS</Description>
              </li>
            </UnorderdList>
          </li>
        </UnorderdList>
      </DescSection>
    </Section>
  );
}
