//@ts-nocheck
const strapiUrl = process.env.STRAPI_URL;

export async function signIn({ email, password }) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    };
    console.log(requestOptions);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
      requestOptions
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
