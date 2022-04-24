import {Heading, Flex, Button, Box} from '@chakra-ui/react';
import UpdatePasswordForm from '@components/Forms/UpdatePassword';
import UpdateUserForm from '@components/Forms/UpdateUser';
import {getUserById} from '@services/user';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import useFetch from 'src/hooks/useFetch';
import Container from '../../../components/layout/Container';

export default function MyAccount() {
  const router = useRouter();

  // const {status} = useSession({
  //   required: true,
  //   // onUnauthenticated() {
  //   //   router.push('/conta/nao-autenticado');
  //   // },
  // });

  const {data, isLoading} = useFetch<TUser>({
    service: getUserById,
    // status,
  });

  const [mainData, setMainData] = useState(data);

  useEffect(() => {
    data && setMainData(data);
  }, [data]);

  return (
    <Container bg="main" borderRadius="40px">
      <Flex w="100%" justify="space-between" p="60px">
        <Flex direction="column" gap="40px" w="50%">
          <Heading>Minha conta</Heading>
          <UpdateUserForm />
        </Flex>
        <Flex w="20%" alignSelf="center" direction="column" gap="20px">
          <UpdatePasswordForm />
          <Button variant="delete" w="100%">
            Deletar minha conta
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
