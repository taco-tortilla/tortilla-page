import { Description } from '../Description';
import { DescSection } from '../DescSection';
import { Section } from '../Section';
import { SubTitle } from '../SubTitle';
import { Title } from '../Title';
import { UnorderdList } from '../UnorderdList';

export function FacvoriteSection() {
  return (
    <Section>
      <Title>Fav</Title>
      <SubTitle>House Plants</SubTitle>
      <DescSection>
        <UnorderdList>
          <li>
            <Description>Currently growing</Description>
            <UnorderdList>
              <li>
                <Description>Monstera deliciosa</Description>
              </li>
              <li>
                <Description>Window leaf</Description>
              </li>
              <li>
                <Description>Hoya linearis</Description>
              </li>
              <li>
                <Description>Pothos</Description>
              </li>
              <li>
                <Description>Amazon olive</Description>
              </li>
              <li>
                <Description>Monstera friedrichsthalii</Description>
              </li>
              <li>
                <Description>Phlebodium davana</Description>
              </li>
            </UnorderdList>
          </li>
        </UnorderdList>
      </DescSection>
      <SubTitle>Movies</SubTitle>
      <DescSection>
        <UnorderdList>
          <li>
            <Description>Diner / Barry Levinson</Description>
          </li>
          <li>
            <Description>Demolition / Jean-Marc Vallée</Description>
          </li>
          <li>
            <Description>
              あの夏、いちばん静かな海。/ Takeshi Kitano
            </Description>
          </li>
          <li>
            <Description>ソナチネ / Takeshi Kitano</Description>
          </li>
          <li>
            <Description>
              退屈な日々にさようならを / Rikiya Imaizumi
            </Description>
          </li>
        </UnorderdList>
      </DescSection>
    </Section>
  );
}
