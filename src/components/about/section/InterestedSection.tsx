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
            <Description>Low layer area</Description>
            <UnorderdList>
              <li>
                <Description>Language</Description>
              </li>
              <li>
                <Description>OS</Description>
              </li>
            </UnorderdList>
          </li>
        </UnorderdList>
      </DescSection>
    </Section>
  );
}
