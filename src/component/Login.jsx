import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  Box,
  Text,
  Container,
  VStack,
  Icon,
  Heading,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';
import { BsFillLockFill } from 'react-icons/bs';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import formOutput from '../utils/FormAuth';
import registerOptions from '../utils/InputValidation';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Actions/authHead';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
      if (isLoggedIn) {
        navigate(redirect);
      }
    }, [isLoggedIn, navigate, redirect]);

  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      phone: '',
    },
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const handleError = errors => {};

  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup);
  };

  const onSubmit = data => {
    console.log(data);
    dispatch(login(data.email, data.password));
  };



  return (
    <Box mt={1} py={4} mb={6}>
      <Container maxW={['container.lg', '400px']}>
        <Heading as="h2" fontSize="xl" textAlign="center" mb={6}>
          Welcome back
        </Heading>
        <VStack alignItems="center" spacing={2} mb={6}>
          <Icon as={BsFillLockFill} />
          <Box
            onClick={switchMode}
            mb={6}
            textAlign="center"
            cursor="pointer"
            bg="teal"
            p={4}
            color="white"
          >
            {isSignup ? (
              <Text>Signin with Email</Text>
            ) : (
              <Text>Signin with Phone</Text>
            )}
          </Box>
        </VStack>
        <FormProvider {...methods}>{/* errors */}</FormProvider>
        <form onSubmit={handleSubmit(onSubmit, handleError)}>
          {isSignup ? (
            <>
              <FormControl>
                <formOutput.FormInput
                  name="phone"
                  placeholder="phone"
                  type="number"
                  label="PHONE"
                  required
                  {...register('phone', registerOptions.phone)}
                />
                {errors?.phone && errors.phone.message}
              </FormControl>
            </>
          ) : (
            <FormControl>
              <formOutput.FormInput
                name="email"
                placeholder="johndoe@email.com"
                type="email"
                label="EMAIL"
                required
                {...register('email', registerOptions.email)}
              />
              {errors?.email && errors.email.message}
            </FormControl>
          )}

          <FormControl>
            <formOutput.FormInput
              name="password"
              placeholder="******"
              type="password"
              label="PASSWORD"
              required
              {...register('password', registerOptions.password)}
            />
            {errors?.password && errors.password.message}
          </FormControl>
          <Button mt={4} mb={6} type="submit" w="full">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          {message && (
            <Alert status="error">
              <AlertIcon />
              {message}
            </Alert>
          )}
        </form>
        <Box>
          <Text>
            Don't have an account? &nbsp;
            <Link to="/register">
              <Box as="span" textDecoration="underline" cursor="pointer">
                Register
              </Box>
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
