import Container from '@components/layout/Container';
import PropertyCard from '@components/PropertyPage/PropertyCard';
import PropertyDescription from '@components/PropertyPage/PropertyDescription';
import {getPropertyByQueryId} from '@services/properties';
import {useEffect, useState} from 'react';
import useFetch from 'src/hooks/useFetch';

export default function PropertyId() {
  const {data, isLoading} = useFetch<TProperty>({
    service: () => getPropertyByQueryId(),
    options: {trigger: 'onRouterIsReady'},
  });

  const [propertyData, setPropertyData] = useState(data);

  useEffect(() => {
    data && setPropertyData(data);
  }, [data]);

  return (
    <Container>
      {propertyData && <PropertyCard data={propertyData} />}
      {propertyData && <PropertyDescription data={propertyData} />}
    </Container>
  );
}
