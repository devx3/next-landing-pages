import P from 'prop-types';
import { loadPages } from '../api/load-pages';
import { Home, HomeProps } from '../templates/Home';
import { useRouter } from 'next/router';
import { Loading } from '../components/Loading';
import { GetStaticProps } from 'next';

export default function Page({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths = async () => {
  // const paths = (await loadPages()).map((page) => {
  //   return {
  //     params: { slug: page.slug },
  //   };
  // });

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  let data = null;

  try {
    data = await loadPages(context.params.slug as string);
  } catch (error) {
    data = null;
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
