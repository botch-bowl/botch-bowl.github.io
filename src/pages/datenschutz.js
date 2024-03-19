import * as React from 'react';
import Layout from 'src/components/Layout';
import Section from 'src/components/Section';
import Container from 'src/components/Container';
import Heading from 'src/components/Heading';
import { Text } from '@chakra-ui/react';
import Seo from 'src/components/Seo';
import { cLink, cSection, cSubHeading, cSubSubHeading } from './dataPrivacy.module.scss';

const DataPrivacyPage = () => (
  <Layout>
    <Seo title="Impressum" noindex />
    <Section className={cSection}>
      <Container>
        <Heading as="h1">Datenschutz</Heading>
        <Text>
          Wir vom Botch Bowl Rollsportverein, Nikolaus-Gassner- Straße 44, 5710 Kaprun (in weiterer
          Folge der Dienstleister) legen größten Wert auf den Schutz Deiner Daten und die Wahrung
          Deiner Privatsphäre. Nachstehend informieren wir Dich deshalb gem. Art 13 der
          Datenschutz-Grundverordnung (DSGVO) über die Erhebung und Verwendung persönlicher Daten
          bei Nutzung unserer Webseiten. Bei Fragen über Begrifflichkeiten verweisen wir auf Art 4
          DSGVO. Grundsätzlich verarbeiten wir die Daten im rechtlichen Rahmen der DSGVO und des
          Datenschutzgesetzes. Wir verpflichten uns, die Daten der Besucher unserer Webseiten zu
          schützen. Dritten werden die gespeicherten Daten nur in der in dieser Erklärung
          beschriebenen Weise zur Verfügung gestellt. Es werden selbstverständlich keine
          personenbezogenen Daten an Werbefirmen weitergegeben. Wir behalten uns das Recht vor, die
          in dieser Datenschutzerklärung bereitgestellten Informationen ohne vorherige Ankündigung
          an eine veränderte Gesetzgebung oder Rechtsprechung anzupassen. Gültig ist die jeweils
          hier veröffentlichte aktuelle Version.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubHeading}>1. Allgemeine Bestimmungen</Heading>
        <Text>
          Diese Datenschutzerklärung gilt für die Domain botch-bowl.com und all ihren Subdomains.
          Soweit nicht anders erwähnt, regelt diese Datenschutzerklärung ausschließlich, wie der
          Dienstleister mit Deinen personenbezogenen Daten umgehen. Für den Fall, dass Du Leistungen
          Dritter in Anspruch nimmst, gelten ausschließlich die Datenschutzbedingungen dieser
          Dritten. Der Dienstleister überprüft die Datenschutzbedingungen Dritter nicht.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubSubHeading}>
          1.1 Rechtsgrundlage (EU-Datenschutz-Grundverordnung)
        </Heading>
        <Text>
          Die EU-Datenschutz-Grundverordnung schützt die Grundrechte und Grundfreiheiten natürlicher
          Personen und insbesondere deren Recht auf Schutz personenbezogener Daten. Personenbezogene
          Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
          natürliche Person beziehen.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubSubHeading}>1.2 Grundsätzliches</Heading>
        <Text>
          Verantwortlich sind wir vom Botch Bowl Rollsportverein, Nikolaus-Gassner- Straße 44, 5710
          Kaprun. Ihr könnt uns in dieser Angelegenheit unter
        </Text>
        <a className={cLink} href="mail-to:hello@botch-bowl.com">
          hello@botch-bowl.com
        </a>
        <Text>
          erreichen. Mit der Nutzung unserer Websites willigen Sie ein, dass wir bestimmte Daten
          erheben dürfen. Im Gegenzug verpflichten wir uns Deine Daten jederzeit zu schützen. Deine
          Daten werden von uns nicht zum Zwecke der Werbung an Dritte weitergegeben. Dritte erhalten
          Deine personenbezogenen Daten von uns nur in der in diesen Datenschutzbestimmungen
          beschriebenen Weise.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubSubHeading}>2.1 Hosting</Heading>
        <Text>
          Für unsere Webseiten nehmen wir Hosting-Dienste in Anspruch. Diese Hosting-Leistungen
          dienen der Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz
          und Datenbankdienste, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir
          zum Zwecke des Betriebs dieses Onlineangebotes einsetzen. Hierbei verarbeiten wir bzw.
          unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten,
          Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern
          dieses Onlineangebotes auf Grundlage unserer berechtigten Interessen an einer effizienten
          und sicheren Zurverfügungstellung dieses Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO
          i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag). Der Hostinganbieter bzw.
          wir erheben dabei auf Grundlage unseres berechtigten Interesses im Sinne des Art. 6 Abs. 1
          lit. f. DSGVO Daten über jeden Zugriff auf den Server auf dem sich dieser Dienst befindet
          (sogenannte Serverlogfiles). Dazu gehören Name der abgerufenen Webseite, Datei, Datum und
          Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp
          nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und
          der anfragende Provider. Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur
          Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 30 Tagen
          gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken
          erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der
          Löschung ausgenommen.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubSubHeading}>
          2.2 Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit
          gespeicherter Daten sowie auf Beschwerde bei der Datenschutzbehörde
        </Heading>
        <Text>
          Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und
          Datenübertragbarkeit Deiner gespeicherten Daten. Du kannst uns in dieser Angelegenheit
          unter
        </Text>
        <a className={cLink} href="mail-to:hello@botch-bowl.com">
          hello@botch-bowl.com
        </a>
        <Text>
          kontaktieren. Nachfolgend findest Du einen Überblick Ihrer Rechte im Einzelnen:
          <br />
          <br />
          <strong>Auskunftsrecht: </strong>
          Auf Anfrage erteilen wir Dir die Auskunft, welche Daten von Dir bei uns gespeichert sind.
          Näheres finden Sie in Art 15 DSGVO.
          <br />
          <br />
          <strong>Berichtigung: </strong>
          Sollten Daten bei uns unrichtig sein, so hast Du das Recht nach Art 16 DSGVO unrichtige
          Daten zu vervollständigen bzw. zu berichtigen.
          <br />
          <br />
          <strong>Löschung und Einschränkung: </strong>
          Du hast das Recht nach Art 17 DSGVO Daten unverzüglich zu löschen oder nach Art 18 DSGVO
          die Datennutzung einzuschränken lassen.
          <br />
          <br />
          <strong>Datenübertragbarkeit: </strong>
          Bei berechtigtem Interesse hast Du das Recht Deine Daten nach Art 20 DSGVO zu erhalten,
          und die Übermittlung an Dritte zu verlangen.
          <br />
          <br />
          <strong>Widerspruch/Widerruf: </strong>
          Du kannst jederzeit nach Art 21 DSVGO der Verarbeitung Deiner Daten widersprechen,
          insbesondere gegen die Verarbeitung der Daten zwecks Direktwerbung (Newsletter). Wenn Du
          glaubst, dass die Verarbeitung Deiner Daten gegen das Datenschutzrecht verstößt oder Deine
          datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, kannst Du dich
          bei der Aufsichtsbehörde beschweren (Art 77 DSGVO). In Österreich ist dies die
          Datenschutzbehörde. Diesbezüglich verweisen wir auch auf die unter dem Link
          https://www.dsb.gv.at/ abrufbare Homepage der Datenschutzbehörde.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubSubHeading}>2.3 Einwilligung und Recht auf Widerruf</Heading>
        <Text>
          Ist für die Verarbeitung/Verwendung Ihrer Daten Ihre Zustimmung erforderlich,
          verarbeiten/verwenden wir diese erst nach Ihrer ausdrücklichen Zustimmung. Mit Abgabe
          Ihrer Zustimmung bestätigen Sie, dass Sie das 18. Lebensjahr vollendet haben oder die
          Zustimmung Ihres gesetzlichen Vertreters vorliegt. Ihre Zustimmung können Sie jederzeit
          unter
        </Text>
        <a className={cLink} href="mail-to:hello@botch-bowl.com">
          hello@botch-bowl.com
        </a>
        <Text>
          widerrufen. Im Falle des Widerrufes Ihrer Zustimmung werden die bisher über Sie
          gespeicherten Daten anonymisiert und in weiterer Folge nur für statistische Zwecke ohne
          Personenbezug weiterverwendet. Durch den Widerruf der Zustimmung wird die Rechtmäßigkeit
          der aufgrund der Zustimmung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubSubHeading}>2.4 Datensicherheit</Heading>
        <Text>
          Ihre personenbezogenen Daten werden verschlüsselt über das Internet übertragen. Wir
          sichern unsere Website und sonstigen Systeme durch technische und organisatorische
          Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten
          durch unbefugte Personen.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubHeading}>
          3. Erhebung, Verarbeitung und Nutzung personenbezogener Daten
        </Heading>
        <Text>
          Wir erheben, verarbeiten und nutzen Deine personenbezogenen Daten, soweit dies gesetzlich
          erlaubt ist, im Übrigen nur mit Deiner Einwilligung. Soweit die Einwilligung im Rahmen
          unseres Internetangebots elektronisch erklärt wird, tragen wir den gesetzlichen
          Hinweispflichten Rechnung und protokollieren Ihre Einwilligung durch geeignete technische
          Systeme. Wir verwenden Deine Daten dazu, einem Missbrauch unserer Webseiten vorzubeugen
          und unberechtigte Zugriffe zu verfolgen. Darüber hinaus nutzen wir Deine Daten auch, um
          mit Dir zu kommunizieren und zur Begründung, Erfüllung und Abwicklung des von Ihnen
          gewählten Angebots bzw. Einkaufs. Nach vollständiger Vertragsabwicklung werden die Daten
          zunächst unter Berücksichtigung steuer- und handelsrechtlicher Aufbewahrungsfristen
          gespeichert und dann nach Fristablauf gelöscht, sofern Du der weitergehenden Verarbeitung
          und Nutzung nicht zugestimmt hast. Bei Anmeldung zum Newsletter wird Ihre E-Mail-Adresse
          mit Deiner Einwilligung für eigene Werbezwecke genutzt, bis Du dich vom Newsletter
          abmeldest. Die Abmeldung ist jederzeit möglich.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubSubHeading}>3.1 Kontaktaufnahme</Heading>
        <Text>
          Wenn Du per Formular auf der Website oder per E-Mail-Kontakt mit uns aufnimmst, werden
          Deine angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen zwei Jahre bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO.
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading className={cSubHeading}>4. Ansprechpartner für Datenschutz</Heading>
        <Text>
          Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei
          Auskünften, Berichtigung, Sperrung oder Löschung von Daten sowie Widerruf erteilter
          Einwilligungen wende Dich bitte postalisch an: Botch Bowl Rollsportverein
          Nikolaus-Gassner-Straße 44 5710 Kaprun Österreich oder per E-Mail an:
        </Text>
        <a className={cLink} href="mail-to:hello@botch-bowl.com">
          hello@botch-bowl.com
        </a>
        <Text>
          Die Daten Name, Anschrift werden darüber hinaus gehend bis zum Ablauf der Produkthaftung
          (10 Jahre) gespeichert. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen
          Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder lit b
          (notwendig zur Vertragserfüllung) der DSGVO.
        </Text>
      </Container>
    </Section>
  </Layout>
);

export default DataPrivacyPage;
