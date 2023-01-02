import { SetStateAction, useState, useEffect } from 'react';
import { useSession } from '@/src/lib/next-auth-react-query';
import ContentWrap from '@/containers/ContentWrap';
import useDebounce from '@/src/hooks/useDebounce';
import styles from '@/styles/containers/Search.module.scss';
import { useSearchQuery } from '@/src/lib/queries';
import { useRouter } from 'next/router';
import WithProtected from '@/components/WithPublic';

function Search() {
  const [value, setValue] = useState<string | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    if (value) {
      push(
        {
          pathname: 'search',
          query: {
            value,
          },
        },
        `search?query=${value}`,
        { shallow: true }
      );
    } else {
      push('search', undefined, { shallow: true });
    }
  }, [value]);

  const handleChange = (e: {
    target: { value: SetStateAction<string | null> };
  }) => {
    setValue(e.target.value);
  };
  const debouncedSearchValue = useDebounce(value, 300);
  const [session, loading] = useSession({
    required: true,
  });

  const { isLoading, isError, isSuccess, data } = useSearchQuery(
    debouncedSearchValue,
    session?.jwt
  );

  const items = data?.movies || '';

  const renderResult = () => {
    if (isLoading && value) {
      return <div className='search-message'> Loading... </div>;
    }

    if (isError) {
      return <div className='search-message'> Something went wrong </div>;
    }

    if (isSuccess) {
      return <ContentWrap items={items} />;
    }

    if (items?.length > 0 && value) {
      return (
        <div className='search-message'> Your Search Yielded No Results </div>
      );
    }
    return <></>;
  };

  return (
    <WithProtected>
      <main className={styles.container}>
        <div className={styles.outer}>
          <h1>Search</h1>
          <div className={styles.field}>
            <input
              type='search'
              name='search'
              placeholder='Search Title'
              onChange={handleChange}
            />
          </div>
          <div className={styles.inner}>{renderResult()}</div>
        </div>
      </main>
    </WithProtected>
  );
}

export default Search;
