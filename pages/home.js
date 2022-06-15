export async function getServerSideProps(context) {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
  }