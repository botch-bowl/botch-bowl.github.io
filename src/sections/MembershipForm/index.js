import * as React from 'react';
import Section from 'src/components/Section';
import Container from 'src/components/Container';
import { Heading, FormControl, FormLabel, FormHelperText, Input, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { cRow, cCol, cColMd4, cColMd8 } from './styles.module.scss';

const required = 'Dieses Feld ist ein Pflichtfeld.';
const birthdateRegex = /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{4}$/;

const schema = yup.object().shape({
  firstName: yup.string().required(required).min(1).max(50),
  lastName: yup.string().required(required).min(1).max(50),
  birthdate: yup.string().required(required).matches(birthdateRegex, 'Ungültiges Format - DD.MM.YYYY'),
  gender: yup.string().required(required),
  address: yup.string().required(required),
  zip: yup.string().required(required),
  city: yup.string().required(required),
  phone: yup.string().required(required),
  mail: yup.string().required(required),
  instagramUser: yup.string()
});

const MembershipForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = () => {};

  return (
    <Section>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Heading>Mitgliedsdaten</Heading>

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
                <Input variant="brand" placeholder="DD.MM.YYYY" {...register('birthdate')} />
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
                <Input variant="brand" placeholder="Straße und Hausnummer" {...register('address')} />
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
                <Input variant="brand" placeholder="example@botch-bowl.com" {...register('mail')} />
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

          <input type="submit" />

        </form>
      </Container>
    </Section>
  );
};

export default MembershipForm;
