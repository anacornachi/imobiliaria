import {Heading, Flex, Button, Box, Spinner} from '@chakra-ui/react';
import UpdatePasswordForm from '@components/Forms/UpdatePassword';
import UpdateUserForm from '@components/Forms/UpdateUser';
import {deleteUser, getUserById} from '@services/user';
import {signOut, useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import useFetch from 'src/hooks/useFetch';
import Container from '../../../components/layout/Container';

export default function MyAccount() {
  const router = useRouter();

  const {status} = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/conta/nao-autenticado');
    },
  });

  const {data, isLoading} = useFetch<TUser>({
    service: getUserById,
    status,
  });

  const [defaultValues, setDefaultValues] = useState<TUser | undefined>(
    undefined,
  );

  useEffect(() => {
    data && setDefaultValues(data);
  }, [data]);

  const handleDelete = async () => {
    await deleteUser();
    await signOut({callbackUrl: '/'});
  };

  return (
    <Container bg="main" borderRadius="40px">
      <Flex
        w="100%"
        justify="space-between"
        p={{base: '20px', md: '60px'}}
        direction={{base: 'column', md: 'row'}}
        gap={{base: '30px', md: 0}}
      >
        <Flex direction="column" gap="40px" w={{base: '100%', md: '50%'}}>
          <Heading>Minha conta</Heading>
          {isLoading ? (
            <Spinner alignSelf="center" />
          ) : (
            defaultValues && <UpdateUserForm defaultValues={defaultValues} />
          )}
        </Flex>
        <Flex
          w={{base: '100%', md: '35%', lg: '20%'}}
          alignSelf="center"
          direction="column"
          gap="20px"
        >
          <UpdatePasswordForm />
          <Button variant="delete" w="100%" onClick={() => handleDelete()}>
            Deletar minha conta
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
