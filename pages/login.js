const Login = () => {
  return (
    <div>
      <h1>This is Log in Page!</h1>
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
function getProviders() {
  throw new Error('Function not implemented.')
}
