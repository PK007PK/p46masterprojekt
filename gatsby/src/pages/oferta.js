import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { VscFilePdf } from '@react-icons/all-files/vsc/VscFilePdf';
import {
  BootsColumn,
  BootsContainer,
  BootsRow,
} from '../components/BootsElements';
import SectionHero from '../components/SectionHero/SectionHero';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

const HeroBottomBarStyles = styled.div`
  ${({ theme }) => theme.media.mdAbove} {
    display: flex;
    justify-content: space-between;
  }
  .subtitle {
    ${({ theme }) => theme.media.mdAbove} {
      font-size: 40px;
      line-height: 43px;
      letter-spacing: 3px;
    }
  }
`;

const heroBottomBar = () => (
  <HeroBottomBarStyles>
    <h2 className="subtitle"># Oferta</h2>
  </HeroBottomBarStyles>
);

const PageStyling = styled.main`
  ul {
    list-style-type: square;
  }

  li {
    padding-left: 10px;
    margin-left: 20px;
  }

  h3 {
    text-align: left;
  }

  h4 {
    /* font-weight: bold; */
    font-size: 20px;
    margin-top: 50px;
  }

  em {
    font-weight: bold;
    color: var(--gray);
    font-style: normal;
  }

  .headingPadding {
    padding-top: 50px;
  }
`;

const PDFLinkStyles = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  background-color: var(--grey);
  transition: var(--basicTransition);

  &:hover {
    box-shadow: ${({ theme }) => theme.elevation.dp4};
  }

  .icon {
    width: 120px;
    height: 200px;
    color: white;
  }
`;

const PDFLink = () => (
  <PDFLinkStyles>
    <VscFilePdf className="icon" />
  </PDFLinkStyles>
);

const Offer = ({ data }) => (
  <Layout>
    <SEO title="Oferta" />
    <SectionHero
      imgSrc={data.image.childImageSharp.gatsbyImageData}
      bottomBar={heroBottomBar}
      secondary
    />
    <PageStyling>
      <BootsContainer>
        <BootsRow className="sectionPaddings">
          <BootsColumn md="10" lg="9">
            <h3 id="dok" className="leadTxt">
              Przygotowanie dokumentacji aplikacyjnej
            </h3>
            <p>
              Posiadamy bardzo duże doświadczenie w zakresie sporządzania
              dokumentacji aplikacyjnych dla projektów inwestycyjnych oraz
              miękkich. Duże zaangażowanie, dbałość o szczegóły i sprawnie
              działający system kontroli pozwoliły nam uzyskać bardzo wysoką
              skuteczność w aplikowaniu o środki.
            </p>
            <h4>Oferta obejmuje:</h4>
            <ul>
              <li>Przygotowanie wniosku aplikacyjnego</li>
              <li>
                Przygotowanie listy załączników oraz wykonanie wybranych
                załączników
              </li>
              <li>
                Wydruki przygotowanych dokumentów, odpowiednie opisanie,
                oklejenie teczek, segregatorów, płyt CD
              </li>
              <li>
                Na wezwanie Instytucji Zarządzającej - bezpłatne wprowadzenie
                poprawek na wszystkich etapach oceny
              </li>
              <li>
                Prowadzenie projektu na platformie elektronicznej online
                (komunikacja, współpraca, repozytorium plików)
              </li>
            </ul>
            <h4>Sposób realizacji</h4>
            <ul>
              <li>
                Współpraca odbywa się poprzez udostępnianą Klientom aplikację do
                zarządzania projektami. Aplikacja dostępna na komputerach i
                urządzeniach mobilnych (terminy, zadania, repozytorium plików,
                współpraca grupowa)
              </li>
              <li>
                Wersję konsultacyjną otrzymacie Państwo w formie elektronicznej
              </li>
              <li>
                Wersję finalną otrzymacie w formie papierowej (ilość sztuk
                wymagana przez instytucję prowadzącą konkurs + jedna archiwalna
                wersja dla Zleceniodawcy). Wersja finalna dostępna będzie także
                zawsze w formie elektronicznej poprzez system zarządzania
                projektami
              </li>
              <li>
                Poprawki na etapie oceny formalnej i merytorycznej otrzymacie
                Państwo w wersji elektronicznej
              </li>
            </ul>
            <h4>Aspekty jakościowe</h4>
            <ul>
              <li>
                <em>Gwarancja.</em> Udzielamy gwarancji na przygotowaną przez
                nas dokumentację. Oznacza to, że Klient płaci za dokumentację
                dopiero wtedy kiedy wie, że spełniła ona jego oczekiwania. Po
                przygotowaniu dokumentacji przedstawiamy ją do oceny Klienta, w
                razie konieczności nanosimy poprawki. Dopiero po akceptacji
                opracowania Klient dokonuje zapłaty. Ponadto, jeżeli po złożeniu
                dokumentacji instytucja oceniająca wnioski ma jakiekolwiek
                zastrzeżenia co do treści dokumentacji, zobowiązujemy się do
                nanoszenia poprawek, aż do momentu pełnej akceptacji
                opracowania. W przypadku odrzucenia dokumentacji przez
                instytucję oceniającą wnioski z przyczyn zawinionych przez naszą
                firmę zobowiązujemy się do całkowitego zwrotu otrzymanego
                wynagrodzenia.
              </li>
              <li>
                <em>Kryteria oceny projektu.</em> W strukturze realizacji
                projektu po stronie Masterprojektu wyodrębniona zostaje osoba,
                której jedynym zadaniem jest dopilnowanie możliwie najlepszego
                wyeksponowania walorów projektu w kontekście kryteriów oceny
                danego konkursu.
              </li>
              <li>
                <em>Poprawność formalna.</em> W strukturze realizacji projektu
                oprócz osoby prowadzącej projekt i osoby odpowiedzialnej za
                wyeksponowanie kryteriów jego oceny, uwzględniamy również osobę
                odpowiedzialną za jego kontrolę.
              </li>
              <li>
                <em>Poprawność formalna.</em> W strukturze realizacji projektu
                oprócz osoby prowadzącej projekt i osoby odpowiedzialnej za
                wyeksponowanie kryteriów jego oceny, uwzględniamy również osobę
                odpowiedzialną za jego kontrolę.
              </li>
              <li>
                <em>Modyfikacje projektu.</em> Na etapie przygotowywania
                dokumentacji aplikacyjnej pomagamy Klientowi modyfikować zakres
                projektu w taki sposób, aby jak najlepiej dostosować go do
                wymagań konkursu.
              </li>
              <li>
                <em>Konsultacje.</em> Przekazujemy Klientowi wersję
                konsultacyjną opracowania do wniesienia uwag.
              </li>
              <li>
                <em>Rozwiązywanie problemów.</em> Angażujemy się w rozwiązywanie
                problemów decyzyjnych powstających na etapie tworzenia koncepcji
                projektu i przygotowywania dokumentacji.
              </li>
              <li>
                <em>Aplikacja do zarządzania projektami.</em> Współpracujemy z
                Klientem poprzez system zarządzania projektami online, co
                porządkuje komunikację, ułatwia kontrolę realizacji projektu,
                ułatwia efektywną współpracę osób przebywających w różnych
                lokalizacjach, umożliwia archiwizację wszystkich ustaleń
                (szczególnie istotne w przypadku projektów które trwają wiele
                miesięcy lub wiele lat).
              </li>
            </ul>
          </BootsColumn>
          <BootsColumn md="2" lg="3">
            <PDFLink />
          </BootsColumn>
        </BootsRow>
        <BootsRow className="headingPadding">
          <BootsColumn md="10" lg="9">
            <h3 id="roz" className="leadTxt">
              Rozliczanie projektu
            </h3>
            Zakres obsługi obejmuje:
            <ul>
              <li>
                Przygotowanie wszelkich dokumentów związanych z realizacją
                Projektu i dotyczących Projektu, wymaganych przez Instytucję
                Zarządzającą w formie i terminie obowiązującym Beneficjenta,
              </li>
              <li>
                Przygotowanie i aktualizacja załączników do umowy o
                dofinansowanie w terminie obowiązującym Beneficjenta,
              </li>
              <li>
                Przygotowanie dokumentów do aneksów do umowy o dofinansowanie,{' '}
              </li>
              <li>
                Przygotowanie dokumentów i informowanie Instytucji Zarządzającej
                o konieczności przesunięcia środków pomiędzy kategoriami
                wydatków kwalifikowanych;{' '}
              </li>
              <li>
                Przygotowanie wniosków o dokonanie zmiany w Projekcie, w
                sytuacji gdyby taka nastąpiła, w terminie i na zasadach
                obowiązujących Beneficjenta;{' '}
              </li>
              <li>
                Przygotowanie wniosków z uzasadnieniem o przedłużenie okresu
                realizacji projektu, w sytuacji gdyby nastąpiła taka potrzeba, w
                terminach i na zasadach obowiązujących Beneficjenta;{' '}
              </li>
              <li>
                Przygotowanie dokumentów informujących o zamiarze dokonania
                zmian prawno – organizacyjnych w statusie Beneficjenta, które
                miałyby wpływ na realizację Projektu lub osiągnięcie celów i
                rezultatów;{' '}
              </li>
              <li>
                Przygotowanie dokumentów informujących o zmianie danych
                teleadresowych oraz zmianie numerów rachunków bankowych
                związanych z realizacją Projektu;{' '}
              </li>
              <li>
                Przygotowanie dokumentów informujących o wystąpieniu siły
                wyższej i jej wpływie na realizację Projektu;{' '}
              </li>
              <li>
                {' '}
                Przygotowanie dokumentów i informowanie Instytucji Zarządzającej
                o statusie Beneficjenta jako płatnika podatku VAT oraz o
                kwalifikowalności podatku VAT w Projekcie;{' '}
              </li>
              <li>
                {' '}
                opracowanie wniosków o płatności zaliczkowe i płatności
                pośrednie wraz z wymaganymi załącznikami w formie i terminie
                wymaganym przez Instytucję Zarządzającą;{' '}
              </li>
              <li>
                {' '}
                Opracowanie wniosków o płatność końcową wraz z wymaganymi
                załącznikami w formie i terminie wymaganym przez Instytucję
                Zarządzającą;
              </li>
              <li>
                {' '}
                Nadzór nad zgodnością realizacji projektu z przyjętym
                harmonogramem;{' '}
              </li>
              <li>
                {' '}
                Nadzór nad realizacją przez Beneficjenta obowiązków informacyjno
                – promocyjnych zgodnie z wytycznymi w tym zakresie, nadzór nad
                promocją projektu;{' '}
              </li>
            </ul>
          </BootsColumn>
          <BootsColumn md="2" lg="3">
            <PDFLink />
          </BootsColumn>
        </BootsRow>
        <BootsRow className="headingPadding">
          <BootsColumn md="10" lg="9">
            <h3 id="fin" className="leadTxt">
              Analizy finansowe
            </h3>
            <p>
              Oferta dotyczy przygotowania analizy ekonomiczno - finansowej dla
              projektów inwestycyjnych aplikujących o bezzwrotne lub zwrotne
              finansowanie w ramach funduszy strukturalnych, źródeł krajowych,
              innych źródeł zagranicznego finansowania inwestycji realizowanych
              w Polsce
            </p>
            <h4>Specyfikacja usługi</h4>
            <p>
              Usługa polega na przygotowaniu analizy finansowej (ekonomiczno –
              finansowej) do dokumentacji aplikacyjnej zgodnie z wytycznymi
              danego konkursu. Przez analizę ekonomiczno - finansową rozumiemy:
            </p>
            <ul>
              <li>
                wykonanie analizy ekonomiczno – finansowej do studium
                wykonalności;
              </li>
              <li>wykonanie analizy wrażliwości i ryzyka</li>
              <li>
                przygotowanie i przekazanie zamawiającemu arkusza MsExcel z
                aktywnymi / niezablokowanymi formułami
              </li>
              <li>
                wprowadzenie poprawek do wykonanych opracowań na etapie oceny
                formalnej i merytorycznej na wezwanie instytucji prowadzącej
                konkurs.
              </li>{' '}
            </ul>
            <h4>Etapy realizacji</h4>
            <ul>
              <li>Podpisanie umowy;</li>
              <li>Dostarczenie danych do projektu;</li>
              <li>
                Wykonanie analizy finansowej na potrzeby danej procedury
                aplikacyjnej
              </li>
            </ul>
          </BootsColumn>
          <BootsColumn md="2" lg="3">
            <PDFLink />
          </BootsColumn>
        </BootsRow>
        <BootsRow className="headingPadding">
          <BootsColumn md="10" lg="9">
            <h3 id="obs" className="leadTxt">
              Stała obsługa
            </h3>
            <p>
              Usługa swoim zakresem obejmują wszystko, co istotne dla
              skutecznego korzystania ze środków preferencyjnych:
            </p>
            <ul>
              <li>monitoring (zadzwonimy z każdą istotną informacją);</li>
              <li>
                doradztwo (rozwiążemy wszystkie zagadki związane z projektami);
              </li>
              <li>
                przygotowanie dokumentacji konkursowej (tak, zastanawiamy się
                wspólnie z Klientem czy warto do danego konkursu aplikować, a
                potem zwyczajnie - bez żadnych formalności - przygotujemy dobrą
                dokumentację);
              </li>
              <li>
                rozliczanie projektów (teraz już nie ma problemu co zrobić,
                kiedy ZOZ wygra konkurs, z automatu zajmiemy się jego
                rozliczaniem);
              </li>
              <li>
                dostęp do platformy komunikacyjnej (telefon telefonem, ale nad
                projektami pracuje się w formie „pisemnej”, dlatego zapraszamy
                naszych klientów do współpracy z nami poprzez wygodną aplikację
                do zarządzania projektami, która umożliwi budowanie zespołów
                projektowych współpracujących ze zosbą przez Internet.{' '}
              </li>
            </ul>
            <p>Zapraszamy do zapoznania się ze szczegółową ofertą.</p>
          </BootsColumn>
          <BootsColumn md="2" lg="3">
            <PDFLink />
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </PageStyling>
  </Layout>
);

export const pageQuery = graphql`
  {
    image: file(name: { eq: "offer" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP])
      }
    }
  }
`;

export default Offer;
