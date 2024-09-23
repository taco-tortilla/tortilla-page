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
          <li>Spring Boot</li>
          <li>React</li>
          <li>Next.js</li>
        </UnorderdList>
      </DescSection>
      <SubTitle>Other</SubTitle>
      <DescSection>
        <UnorderdList>
          <li>
            <Description>CI/CD</Description>
            <UnorderdList>
              <li>
                <Description>Github Actions</Description>
              </li>
            </UnorderdList>
          </li>
        </UnorderdList>
      </DescSection>
    </Section>
  );
}
