import { Description } from '../Description';
import { DescSection } from '../DescSection';
import { Section } from '../Section';
import { Title } from '../Title';
import { UnorderdList } from '../UnorderdList';

export function InterestedSection() {
  return (
    <Section>
      <Title>Interested</Title>
      <DescSection>
        <UnorderdList>
          <li>
            <Description>Performance Tuning</Description>
            <UnorderdList>
              <li>
                <Description>
                  Recently, I have been studying performance tuning for React.
                </Description>
              </li>
            </UnorderdList>
          </li>
          <li>
            <Description>System design</Description>
          </li>
        </UnorderdList>
      </DescSection>
    </Section>
  );
}
