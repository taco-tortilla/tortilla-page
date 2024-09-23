import { Description } from '../Description';
import { DescSection } from '../DescSection';
import { Section } from '../Section';
import { Title } from '../Title';
import { UnorderdList } from '../UnorderdList';

export function LinksSection() {
  return (
    <Section>
      <Title>Links</Title>
      <DescSection>
        <UnorderdList>
          <li>
            <Description>
              <a
                href='https://github.com/taco-tortilla'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </Description>
          </li>
          <li>
            <Description>
              <a
                href='https://x.com/tortillataco0'
                target='_blank'
                rel='noopener noreferrer'
              >
                X
              </a>
            </Description>
          </li>
        </UnorderdList>
      </DescSection>
    </Section>
  );
}
