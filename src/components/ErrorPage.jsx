import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main>
      <h1>Error! :(</h1>
      <Link to='/'>Go Home! </Link>
    </main>
  );
};

export default ErrorPage;
