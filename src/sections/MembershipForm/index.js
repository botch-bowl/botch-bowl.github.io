import * as React from 'react';
import Section from 'src/components/Section';
import Container from 'src/components/Container';
import Heading from 'src/components/Heading';
import {
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Checkbox,
  Button,
  Textarea,
  Spinner
} from '@chakra-ui/react';
import { Link, navigate } from 'gatsby';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { cRow, cCol, cColMd4, cColMd8, cLink, cSection } from './styles.module.scss';

const required = 'Dieses Feld ist ein Pflichtfeld.';
const birthdateRegex = /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{4}$/;

const schema = yup.object().shape({
  firstName: yup.string().required(required).min(1).max(50),
  lastName: yup.string().required(required).min(1).max(50),
  birthdate: yup
    .string()
    .required(required)
    .matches(birthdateRegex, 'Ungültiges Format - DD.MM.YYYY'),
  gender: yup.string().required(required),
  address: yup.string().required(required),
  zip: yup.string().required(required),
  city: yup.string().required(required),
  phone: yup.string().required(required),
  mail: yup.string().required(required),
  instagramUser: yup.string(),
  shirtSize: yup.string(),
  note: yup.string(),
  parentFirstName: yup.string(),
  parentLastName: yup.string(),
  parentPhone: yup.string(),
  privacyPolicy: yup.bool().oneOf([true], required),
  newsletter: yup.bool(),
  imageUse: yup.bool()
});

const MembershipForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [isYoungerThen16, setYoungerThen16] = React.useState(false);
  const [price, setPrice] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  const getAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  };

  // accpets dd.mm.yyyy
  const convertStringToDate = (dateString) => {
    const parts = dateString.split('.');
    return new Date(parseInt(parts[2], 10), parseInt(parts[1] - 1, 10), parseInt(parts[0], 10));
  };

  const handleAgeChange = (e) => {
    const dateString = e.target.value;
    if (dateString.length === 10) {
      const birthdate = convertStringToDate(e.target.value);
      const age = getAge(birthdate);

      if (age >= 16) {
        setYoungerThen16(false);
        setPrice('50 €');
      } else if (age < 10) {
        setYoungerThen16(true);
        setPrice('0 €');
      } else {
        setYoungerThen16(true);
        setPrice('30 €');
      }
    } else {
      setPrice(null);
    }
  };

  const sendMailToUser = (params) => {
    emailjs.send(
      'service_peak',
      'template_8lzrkdm',
      params,
      'user_3o0WGgMZIZNLSk0FtvYR1'
    )
      .then(() => {
        console.log('Mail sent');
        setLoading(false);
        navigate('/danke/');
      }, (error) => {
        console.error(error.text);
      });
  };

  const sendMail = (data) => {
    const now = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const date = now.toLocaleDateString('de-DE', options);

    const gdoc = `=SPLIT("${data.firstName}|${data.lastName}|${data.birthdate}|${data.gender}|
    ${data.address}|${data.zip}|${data.city}|${data.phone}|${data.mail}|${data.instagramUser}|
    ${data.shirtSize}|${data.note}|${data.parentFirstName}|${data.parentLastName}|
    ${data.parentPhone}|${data.privacyPolicy}|${data.newsletter}|${data.imageUse}|${price}|
    ${date}"; "|")`;

    const params = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.mail,
      docsString: gdoc,
    };

    emailjs.send(
      'service_peak',
      'template_membership_form',
      params,
      'user_3o0WGgMZIZNLSk0FtvYR1'
    )
      .then(() => {
        sendMailToUser(params);
      }, (error) => {
        console.error(error.text);
      });
  };

  const onSubmit = (e) => {
    setLoading(true);
    sendMail(e);
  };

  return (
    <Section>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cSection}>
            <Heading pre="Max Muster">Mitgliedsdaten.</Heading>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="firstName">
                  <FormLabel variant="brand">Vorname *</FormLabel>
                  <Input variant="brand" {...register('firstName')} />
                  <FormHelperText>{errors.firstName?.message}</FormHelperText>
                </FormControl>
              </div>
              <div className={cCol}>
                <FormControl id="lastName">
                  <FormLabel variant="brand">Nachname *</FormLabel>
                  <Input variant="brand" {...register('lastName')} />
                  <FormHelperText>{errors.lastName?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="birthdate">
                  <FormLabel variant="brand">Geburtsdatum *</FormLabel>
                  <Input
                    variant="brand"
                    placeholder="DD.MM.YYYY"
                    {...register('birthdate')}
                    onChange={(e) => handleAgeChange(e)}
                  />
                  <FormHelperText>{errors.birthdate?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="gender">
                  <FormLabel variant="brand">Geschlecht *</FormLabel>
                  <Select variant="brand" placeholder="Geschlecht" {...register('gender')}>
                    <option value="m">Männlich</option>
                    <option value="f">Weiblich</option>
                    <option value="d">Divers</option>
                  </Select>
                  <FormHelperText>{errors.gender?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="address">
                  <FormLabel variant="brand">Adresse *</FormLabel>
                  <Input
                    variant="brand"
                    placeholder="Straße und Hausnummer"
                    {...register('address')}
                  />
                  <FormHelperText>{errors.address?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cColMd4}>
                <FormControl id="zip">
                  <FormLabel variant="brand">Postleitzahl *</FormLabel>
                  <Input variant="brand" {...register('zip')} />
                  <FormHelperText>{errors.zip?.message}</FormHelperText>
                </FormControl>
              </div>
              <div className={cColMd8}>
                <FormControl id="city">
                  <FormLabel variant="brand">Ort *</FormLabel>
                  <Input variant="brand" {...register('city')} />
                  <FormHelperText>{errors.city?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="phone">
                  <FormLabel variant="brand">Telefonnummer *</FormLabel>
                  <Input variant="brand" placeholder="+43 666 00000000" {...register('phone')} />
                  <FormHelperText>{errors.phone?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="mail">
                  <FormLabel variant="brand">E-Mail *</FormLabel>
                  <Input
                    variant="brand"
                    placeholder="example@botch-bowl.com"
                    {...register('mail')}
                  />
                  <FormHelperText>{errors.mail?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="instagramUser">
                  <FormLabel variant="brand">Instagram Username</FormLabel>
                  <InputGroup variant="brand">
                    <InputLeftAddon>@</InputLeftAddon>
                    <Input {...register('instagramUser')} />
                  </InputGroup>
                  <FormHelperText>{errors.instagramUser?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="shirtSize">
                  <FormLabel variant="brand">Gewünschte T-Shirt Größe</FormLabel>
                  <Select variant="brand" placeholder="T-Shirt Größe" {...register('shirtSize')}>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">X-Large</option>
                  </Select>
                  <FormHelperText>{errors.shirtSize?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="note">
                  <FormLabel variant="brand">Anmerkungen</FormLabel>
                  <Textarea variant="brand" {...register('note')} />
                  <FormHelperText>{errors.note?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
          </div>

          {isYoungerThen16 && (
            <div className={cSection}>
              <Heading>Erziehungsberechtigter.</Heading>
              <div className={cRow}>
                <div className={cCol}>
                  <FormControl id="firstName">
                    <FormLabel variant="brand">Vorname *</FormLabel>
                    <Input variant="brand" {...register('parentFirstName')} />
                    <FormHelperText>{errors.parentFirstName?.message}</FormHelperText>
                  </FormControl>
                </div>
                <div className={cCol}>
                  <FormControl id="lastName">
                    <FormLabel variant="brand">Nachname *</FormLabel>
                    <Input variant="brand" {...register('parentLastName')} />
                    <FormHelperText>{errors.parentLastName?.message}</FormHelperText>
                  </FormControl>
                </div>
              </div>
              <div className={cRow}>
                <div className={cCol}>
                  <FormControl id="phone">
                    <FormLabel variant="brand">Telefonnummer *</FormLabel>
                    <Input
                      variant="brand"
                      placeholder="+43 666 00000000"
                      {...register('parentPhone')}
                    />
                    <FormHelperText>{errors.parentPhone?.message}</FormHelperText>
                  </FormControl>
                </div>
              </div>
            </div>
          )}

          <div className={cSection}>
            <Heading pre="€ &#8383; $">Jahresbeitrag.</Heading>
            <Text>
              Der Jahresmitgliedsbeitrag
              {!!price && (
                <>
                  {' '}
                  von
                  <strong>
                    {` ${price} `}
                  </strong>
                </>
              )}
              {' '}
              ist bei Vereinseintritt innerhalb von 14 Tagen und bei
              laufenden Mitgliedschaften bis zum 01. April des Jahres zu zahlen.
              <br />
              <br />
              Der Mitgliedsbeitrag wird fristgerecht mittels
              <a className={cLink} href="/impressum#bankverbindung" target="_blank">
                {' '}
                Banküberweisung
                {' '}
              </a>
              oder per Barzahlung bezahlt.
              <br />
              <br />
              Die Vereinsmitgliedschaft ist unbefristet und bleibt bis zum ordnungsgemäßen
              Vereinsaustritt aufrecht.
            </Text>
          </div>

          <div className={cSection}>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="instagramUser">
                  <FormLabel variant="brand">Datenschutz *</FormLabel>
                  <Checkbox colorScheme="orange" variant="brand" {...register('privacyPolicy')}>
                    Hiermit akzeptiere ich die
                    <a className={cLink} href="/datenschutz/" target="blank">
                      {' '}
                      Datenschutzerklärung
                      {' '}
                    </a>
                    des Botch Bowl Rollsportvereins.
                  </Checkbox>
                  <FormHelperText>{errors.privacyPolicy?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="instagramUser">
                  <FormLabel variant="brand">Newsletter</FormLabel>
                  <Checkbox colorScheme="orange" variant="brand" {...register('newsletter')}>
                    Ich möchte mit aktuellen Informationen über den Botch Bowl Rollsportverein per
                    E-Mail Newsletter/WhatsApp versorgt werden.
                  </Checkbox>
                  <FormHelperText>{errors.newsletter?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className={cRow}>
              <div className={cCol}>
                <FormControl id="instagramUser">
                  <FormLabel variant="brand">Nutzung von Foto- & Videoaufnahmen</FormLabel>
                  <Checkbox colorScheme="orange" variant="brand" {...register('imageUse')}>
                    Hiermit erkläre ich mich damit einverstanden, dass während der Sportausübung und
                    Zusammenkünften/Vereinsfesten Foto- bzw. Videoaufnahmen von mir angefertig und
                    veröffentlichkeit werden dürfen.
                  </Checkbox>
                  <FormHelperText>{errors.imageUse?.message}</FormHelperText>
                </FormControl>
              </div>
            </div>
          </div>
          <div className={cSection}>
            <Button type="submit" variant="brand">
              {isLoading && (
                <Spinner />
              )}
              {!isLoading && (
                <>
                  Absenden
                </>
              )}
            </Button>
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default MembershipForm;
