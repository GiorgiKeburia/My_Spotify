import { getProviders, signIn } from 'next-auth/react'

const Login = ({ providers }) => {
  console.log(providers)
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#000000]">
      <img
        className="mb-5  w-[6rem]"
        src="https://cdn.icon-icons.com/icons2/2890/PNG/512/apps_media_streaming_stream_spotify_logo_multimedia_music_audio_podcast_icon_182745.png"
        alt=""
      />
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              className="rounded-xl bg-[#1c794a] px-3  py-3 font-bold text-[#ffffff] shadow-lg shadow-[#374b3e]"
              onClick={() => {
                signIn(provider.id, { callbackUrl: '/' })
              }}
            >
              Login with {provider.name}
            </button>
          </div>
        )
      })}
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
