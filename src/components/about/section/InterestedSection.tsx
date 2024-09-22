import { Description } from '../Description';
import { DescSection } from '../DescSection';
import { Section } from '../Section';
import { SubTitle } from '../SubTitle';
import { Title } from '../Title';
import { UnorderdList } from '../UnorderdList';

export function InterestedSection() {
  return (
    <Section>
      <Title>Interested</Title>
      <SubTitle>Tech</SubTitle>
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
        </UnorderdList>
      </DescSection>
      <SubTitle>Other</SubTitle>
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
        </UnorderdList>
      </DescSection>
    </Section>
  );
}
