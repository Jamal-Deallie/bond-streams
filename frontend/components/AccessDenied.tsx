import Link from 'next/link';

const AccessDenied = () => {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link href='signin'>You must be signed in to view this page</Link>
      </p>
    </>
  );
};

export default AccessDenied;
