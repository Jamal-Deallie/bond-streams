import qs from 'qs';
import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import { RegisterInputProps } from '@/typings/typings';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
});

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export const useItems = () => {
  return useQuery({
    queryKey: ['items'],
    queryFn: () => fetchAPI('/movies', { populate: '*' }),
  });
};

export const useThumbnail = () => {
  return useQuery({
    queryKey: ['thumbnails'],
    queryFn: () => fetchAPI('/movies'),
  });
};

export const usePopularItems = () => {
  return useQuery({
    queryKey: ['popularItems'],
    queryFn: () =>
      fetchAPI(
        '/movies?populate=*&filters[categories][category][$contains]=popular'
      ),
  });
};

export const useNarrativeItems = () => {
  return useQuery({
    queryKey: ['narrativeItems'],
    queryFn: () =>
      fetchAPI(
        '/movies?populate=*&filters[categories][category][$contains]=narrative'
      ),
  });
};

export const useRecommendedItems = () => {
  return useQuery({
    queryKey: ['recommendedItems'],
    queryFn: () =>
      fetchAPI(
        '/movies?populate=*&filters[categories][category][$contains]=recommended'
      ),
  });
};

export const useAcclaimedItems = () => {
  return useQuery({
    queryKey: ['acclaimedItems'],
    queryFn: () =>
      fetchAPI(
        '/movies?populate=*&filters[categories][category][$contains]=acclaimed'
      ),
  });
};

export const useOriginalItems = () => {
  return useQuery({
    queryKey: ['originalsItems'],
    queryFn: () =>
      fetchAPI(
        '/movies?populate=*&filters[categories][category][$contains]=originals'
      ),
  });
};

export const useAllItems = () => {
  return useQuery({
    queryKey: ['allItems'],
    queryFn: () => fetchAPI('/movies?&pagination[limit]=100'),
  });
};

export const useItem = (slug: string) => {
  return useQuery({
    queryKey: ['item'],
    queryFn: () => fetchAPI(`/movies?populate=*&filters[slug][$eq]=${slug}`),
  });
};

const postRegisterData = async (values: RegisterInputProps) => {
  const res = await fetchAPI(
    '/auth/local/register',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        username: values.email,
      }),
      method: 'POST',
    }
  );

  return res;
};

export const useRegisterMutation = () => {
  return useMutation(
    (values: RegisterInputProps) => postRegisterData(values),
    {}
  );
};

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);

//   // Returns an array that looks like this:
//   // [
//   //   {
//   //     params: {
//   //       id: 'ssg-ssr'
//   //     }
//   //   },
//   //   {
//   //     params: {
//   //       id: 'pre-rendering'
//   //     }
//   //   }
//   // ]
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ''),
//       },
//     };
//   });
