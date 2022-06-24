import React from 'react';
import {
  Button,
  FormControl,
  Box,
  Text,
  Container,
  VStack,
  Heading,
  // Select,
  // FormLabel,
  Checkbox,
  Stack,
} from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';
//import { BsFillLockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import FormInput from '../utils/FormAuth';
import registerOptions from '../utils/InputValidation';
//import data from '../data/Countries';
//import state from '../data/States';

export default function Register() {
  // const [selectedCountry, setSelectedCountry] = React.useState();
  // const [selectedState, setSelectedState] = React.useState();
  // const [selectedCity, setSelectedCity] = React.useState();

  // const availableState = data.countries.find(c => c.name === selectedCountry);
  // const availableCities = availableState?.states?.find(
  //   s => s.name === selectedState
  // );


  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const handleError = errors => {};

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <Box>
      <Container maxW={['container.lg', '400px']}>
        <VStack spacing="3px">
          <Heading as="h2" fontSize="xl" textAlign="center">
            Get Started
          </Heading>
          <Text>please enter details to register an account</Text>
        </VStack>
        <FormProvider {...methods}>{/* errors */}</FormProvider>
        <form onSubmit={handleSubmit(onSubmit, handleError)}>
          <FormControl>
            <FormInput
              name="name"
              placeholder="name"
              type="text"
              label="Full NAME"
              required
              {...register('name', registerOptions.name)}
            />
            {errors?.name && errors.name.message}
          </FormControl>
          <FormControl>
            <FormInput
              name="username"
              placeholder="nickname"
              type="text"
              label="USERNAME"
              required
              {...register('username', registerOptions.username)}
            />
            {errors?.username && errors.username.message}
          </FormControl>
          <FormControl>
            <FormInput
              name="email"
              placeholder="johndoe@email.com"
              type="email"
              label="EMAIL"
              required
              {...register('email', registerOptions.email)}
            />
            {errors?.email && errors.email.message}
          </FormControl>
          <FormControl mb={4}>
            <FormInput
              name="phone"
              placeholder="phone"
              type="number"
              label="PHONE NUMBER"
              required
              {...register('phone', registerOptions.phone)}
            />
            {errors?.phone && errors.phone.message}
          </FormControl>
          {/* <FormControl mb={2}>
            <FormLabel htmlFor="country">COUNTRY</FormLabel>
            <Select
              placeholder="Choose Country"
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              {...register('country', registerOptions.country)}
            >
              {data.countries.map((value, key) => {
                return (
                  <option value={value.name} key={key}>
                    {value.name}
                  </option>
                );
              })}
            </Select>
            {errors?.country && errors.country.message}
          </FormControl> */}
          {/* <FormControl mb={2}>
            <FormLabel htmlFor="state">STATE</FormLabel>
            <Select
              placeholder="Choose State"
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)}
              {...register('state', registerOptions.state)}
            >
              {availableState?.states.map((value, key) => {
                return (
                  <option value={value.name} key={key}>
                    {value.name}
                  </option>
                );
              })}
            </Select>
            {errors?.state && errors.state.message}
          </FormControl> */}
          {/* <FormControl mb={2}>
            <FormLabel htmlFor="cities">CITIES</FormLabel>
            <Select
              placeholder="Choose City"
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              {...register('cities', registerOptions.cities)}
            >
              {availableCities?.cities.map((value, key) => {
                return (
                  <option value={value.name} key={key}>
                    {value.name}
                  </option>
                );
              })}
            </Select>
            {errors?.cities && errors.cities.message}
          </FormControl> */}
          <FormControl>
            <FormInput
              name="password"
              placeholder="******"
              type="password"
              label="PASSWORD"
              required
              {...register('password', registerOptions.password)}
            />
            {errors?.password && errors.password.message}
          </FormControl>
          <FormControl>
            <FormInput
              name="confirmPassword"
              placeholder="******"
              type="password"
              label="CONFIRM PASSWORD"
              required
              {...register('confirmPassword', registerOptions.confirmPassword)}
            />
            {errors?.confirmPassword && errors.confirmPassword.message}
          </FormControl>
          <Stack spacing={5} direction="row" mb={4}>
            <Checkbox colorScheme="red" isRequired>
              <small>I guarantee that I am 18 years and above</small>
            </Checkbox>
          </Stack>
          <Stack spacing={5} direction="row" mb={4}>
            <Checkbox colorScheme="red" isRequired>
              <small>
                I have read and accept the privacy policy and the general terms
                and conditions.
              </small>
            </Checkbox>
          </Stack>
          <Button mt={4} mb={6} type="submit" w="full">
            Continue
          </Button>
        </form>
        <Box>
          <Text>
            Already have an account? &nbsp;
            <Link to="/login">
              <Box as="span" textDecoration="underline" cursor="pointer">
                Login
              </Box>
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
