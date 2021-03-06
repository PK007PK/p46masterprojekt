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
    <h2 className="subtitle" style={{ marginTop: '0' }}>
      # Oferta
    </h2>
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
              Posiadamy bardzo du??e do??wiadczenie w zakresie sporz??dzania
              dokumentacji aplikacyjnych dla projekt??w inwestycyjnych oraz
              mi??kkich. Du??e zaanga??owanie, dba??o???? o szczeg????y i sprawnie
              dzia??aj??cy system kontroli pozwoli??y nam uzyska?? bardzo wysok??
              skuteczno???? w aplikowaniu o ??rodki.
            </p>
            <h4>Oferta obejmuje:</h4>
            <ul>
              <li>Przygotowanie wniosku aplikacyjnego</li>
              <li>
                Przygotowanie listy za????cznik??w oraz wykonanie wybranych
                za????cznik??w
              </li>
              <li>
                Wydruki przygotowanych dokument??w, odpowiednie opisanie,
                oklejenie teczek, segregator??w, p??yt CD
              </li>
              <li>
                Na wezwanie Instytucji Zarz??dzaj??cej - bezp??atne wprowadzenie
                poprawek na wszystkich etapach oceny
              </li>
              <li>
                Prowadzenie projektu na platformie elektronicznej online
                (komunikacja, wsp????praca, repozytorium plik??w)
              </li>
            </ul>
            <h4>Spos??b realizacji</h4>
            <ul>
              <li>
                Wsp????praca odbywa si?? poprzez udost??pnian?? Klientom aplikacj?? do
                zarz??dzania projektami. Aplikacja dost??pna na komputerach i
                urz??dzeniach mobilnych (terminy, zadania, repozytorium plik??w,
                wsp????praca grupowa)
              </li>
              <li>
                Wersj?? konsultacyjn?? otrzymacie Pa??stwo w formie elektronicznej
              </li>
              <li>
                Wersj?? finaln?? otrzymacie w formie papierowej (ilo???? sztuk
                wymagana przez instytucj?? prowadz??c?? konkurs + jedna archiwalna
                wersja dla Zleceniodawcy). Wersja finalna dost??pna b??dzie tak??e
                zawsze w formie elektronicznej poprzez system zarz??dzania
                projektami
              </li>
              <li>
                Poprawki na etapie oceny formalnej i merytorycznej otrzymacie
                Pa??stwo w wersji elektronicznej
              </li>
            </ul>
            <h4>Aspekty jako??ciowe</h4>
            <ul>
              <li>
                <em>Gwarancja.</em> Udzielamy gwarancji na przygotowan?? przez
                nas dokumentacj??. Oznacza to, ??e Klient p??aci za dokumentacj??
                dopiero wtedy kiedy wie, ??e spe??ni??a ona jego oczekiwania. Po
                przygotowaniu dokumentacji przedstawiamy j?? do oceny Klienta, w
                razie konieczno??ci nanosimy poprawki. Dopiero po akceptacji
                opracowania Klient dokonuje zap??aty. Ponadto, je??eli po z??o??eniu
                dokumentacji instytucja oceniaj??ca wnioski ma jakiekolwiek
                zastrze??enia co do tre??ci dokumentacji, zobowi??zujemy si?? do
                nanoszenia poprawek, a?? do momentu pe??nej akceptacji
                opracowania. W przypadku odrzucenia dokumentacji przez
                instytucj?? oceniaj??c?? wnioski z przyczyn zawinionych przez nasz??
                firm?? zobowi??zujemy si?? do ca??kowitego zwrotu otrzymanego
                wynagrodzenia.
              </li>
              <li>
                <em>Kryteria oceny projektu.</em> W strukturze realizacji
                projektu po stronie Masterprojektu wyodr??bniona zostaje osoba,
                kt??rej jedynym zadaniem jest dopilnowanie mo??liwie najlepszego
                wyeksponowania walor??w projektu w kontek??cie kryteri??w oceny
                danego konkursu.
              </li>
              <li>
                <em>Poprawno???? formalna.</em> W strukturze realizacji projektu
                opr??cz osoby prowadz??cej projekt i osoby odpowiedzialnej za
                wyeksponowanie kryteri??w jego oceny, uwzgl??dniamy r??wnie?? osob??
                odpowiedzialn?? za jego kontrol??.
              </li>
              <li>
                <em>Poprawno???? formalna.</em> W strukturze realizacji projektu
                opr??cz osoby prowadz??cej projekt i osoby odpowiedzialnej za
                wyeksponowanie kryteri??w jego oceny, uwzgl??dniamy r??wnie?? osob??
                odpowiedzialn?? za jego kontrol??.
              </li>
              <li>
                <em>Modyfikacje projektu.</em> Na etapie przygotowywania
                dokumentacji aplikacyjnej pomagamy Klientowi modyfikowa?? zakres
                projektu w taki spos??b, aby jak najlepiej dostosowa?? go do
                wymaga?? konkursu.
              </li>
              <li>
                <em>Konsultacje.</em> Przekazujemy Klientowi wersj??
                konsultacyjn?? opracowania do wniesienia uwag.
              </li>
              <li>
                <em>Rozwi??zywanie problem??w.</em> Anga??ujemy si?? w rozwi??zywanie
                problem??w decyzyjnych powstaj??cych na etapie tworzenia koncepcji
                projektu i przygotowywania dokumentacji.
              </li>
              <li>
                <em>Aplikacja do zarz??dzania projektami.</em> Wsp????pracujemy z
                Klientem poprzez system zarz??dzania projektami online, co
                porz??dkuje komunikacj??, u??atwia kontrol?? realizacji projektu,
                u??atwia efektywn?? wsp????prac?? os??b przebywaj??cych w r????nych
                lokalizacjach, umo??liwia archiwizacj?? wszystkich ustale??
                (szczeg??lnie istotne w przypadku projekt??w kt??re trwaj?? wiele
                miesi??cy lub wiele lat).
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
            Zakres obs??ugi obejmuje:
            <ul>
              <li>
                Przygotowanie wszelkich dokument??w zwi??zanych z realizacj??
                Projektu i dotycz??cych Projektu, wymaganych przez Instytucj??
                Zarz??dzaj??c?? w formie i terminie obowi??zuj??cym Beneficjenta,
              </li>
              <li>
                Przygotowanie i aktualizacja za????cznik??w do umowy o
                dofinansowanie w terminie obowi??zuj??cym Beneficjenta,
              </li>
              <li>
                Przygotowanie dokument??w do aneks??w do umowy o dofinansowanie,{' '}
              </li>
              <li>
                Przygotowanie dokument??w i informowanie Instytucji Zarz??dzaj??cej
                o konieczno??ci przesuni??cia ??rodk??w pomi??dzy kategoriami
                wydatk??w kwalifikowanych;{' '}
              </li>
              <li>
                Przygotowanie wniosk??w o dokonanie zmiany w Projekcie, w
                sytuacji gdyby taka nast??pi??a, w terminie i na zasadach
                obowi??zuj??cych Beneficjenta;{' '}
              </li>
              <li>
                Przygotowanie wniosk??w z uzasadnieniem o przed??u??enie okresu
                realizacji projektu, w sytuacji gdyby nast??pi??a taka potrzeba, w
                terminach i na zasadach obowi??zuj??cych Beneficjenta;{' '}
              </li>
              <li>
                Przygotowanie dokument??w informuj??cych o zamiarze dokonania
                zmian prawno ??? organizacyjnych w statusie Beneficjenta, kt??re
                mia??yby wp??yw na realizacj?? Projektu lub osi??gni??cie cel??w i
                rezultat??w;{' '}
              </li>
              <li>
                Przygotowanie dokument??w informuj??cych o zmianie danych
                teleadresowych oraz zmianie numer??w rachunk??w bankowych
                zwi??zanych z realizacj?? Projektu;{' '}
              </li>
              <li>
                Przygotowanie dokument??w informuj??cych o wyst??pieniu si??y
                wy??szej i jej wp??ywie na realizacj?? Projektu;{' '}
              </li>
              <li>
                {' '}
                Przygotowanie dokument??w i informowanie Instytucji Zarz??dzaj??cej
                o statusie Beneficjenta jako p??atnika podatku VAT oraz o
                kwalifikowalno??ci podatku VAT w Projekcie;{' '}
              </li>
              <li>
                {' '}
                opracowanie wniosk??w o p??atno??ci zaliczkowe i p??atno??ci
                po??rednie wraz z wymaganymi za????cznikami w formie i terminie
                wymaganym przez Instytucj?? Zarz??dzaj??c??;{' '}
              </li>
              <li>
                {' '}
                Opracowanie wniosk??w o p??atno???? ko??cow?? wraz z wymaganymi
                za????cznikami w formie i terminie wymaganym przez Instytucj??
                Zarz??dzaj??c??;
              </li>
              <li>
                {' '}
                Nadz??r nad zgodno??ci?? realizacji projektu z przyj??tym
                harmonogramem;{' '}
              </li>
              <li>
                {' '}
                Nadz??r nad realizacj?? przez Beneficjenta obowi??zk??w informacyjno
                ??? promocyjnych zgodnie z wytycznymi w tym zakresie, nadz??r nad
                promocj?? projektu;{' '}
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
              projekt??w inwestycyjnych aplikuj??cych o bezzwrotne lub zwrotne
              finansowanie w ramach funduszy strukturalnych, ??r??de?? krajowych,
              innych ??r??de?? zagranicznego finansowania inwestycji realizowanych
              w Polsce
            </p>
            <h4>Specyfikacja us??ugi</h4>
            <p>
              Us??uga polega na przygotowaniu analizy finansowej (ekonomiczno ???
              finansowej) do dokumentacji aplikacyjnej zgodnie z wytycznymi
              danego konkursu. Przez analiz?? ekonomiczno - finansow?? rozumiemy:
            </p>
            <ul>
              <li>
                wykonanie analizy ekonomiczno ??? finansowej do studium
                wykonalno??ci;
              </li>
              <li>wykonanie analizy wra??liwo??ci i ryzyka</li>
              <li>
                przygotowanie i przekazanie zamawiaj??cemu arkusza MsExcel z
                aktywnymi / niezablokowanymi formu??ami
              </li>
              <li>
                wprowadzenie poprawek do wykonanych opracowa?? na etapie oceny
                formalnej i merytorycznej na wezwanie instytucji prowadz??cej
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
              Sta??a obs??uga
            </h3>
            <p>
              Us??uga swoim zakresem obejmuj?? wszystko, co istotne dla
              skutecznego korzystania ze ??rodk??w preferencyjnych:
            </p>
            <ul>
              <li>monitoring (zadzwonimy z ka??d?? istotn?? informacj??);</li>
              <li>
                doradztwo (rozwi????emy wszystkie zagadki zwi??zane z projektami);
              </li>
              <li>
                przygotowanie dokumentacji konkursowej (tak, zastanawiamy si??
                wsp??lnie z Klientem czy warto do danego konkursu aplikowa??, a
                potem zwyczajnie - bez ??adnych formalno??ci - przygotujemy dobr??
                dokumentacj??);
              </li>
              <li>
                rozliczanie projekt??w (teraz ju?? nie ma problemu co zrobi??,
                kiedy ZOZ wygra konkurs, z automatu zajmiemy si?? jego
                rozliczaniem);
              </li>
              <li>
                dost??p do platformy komunikacyjnej (telefon telefonem, ale nad
                projektami pracuje si?? w formie ???pisemnej???, dlatego zapraszamy
                naszych klient??w do wsp????pracy z nami poprzez wygodn?? aplikacj??
                do zarz??dzania projektami, kt??ra umo??liwi budowanie zespo????w
                projektowych wsp????pracuj??cych ze zosb?? przez Internet.{' '}
              </li>
            </ul>
            <p>Zapraszamy do zapoznania si?? ze szczeg????ow?? ofert??.</p>
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
