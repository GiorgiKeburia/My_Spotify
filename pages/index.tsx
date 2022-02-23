import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="overflow-hiddens h-screen bg-[#000000]">
      <main className="flex">
        {/* sideba */}
        <Sidebar />
        {/* center */}
        <Center />
      </main>
      <div>{/* Players */}</div>
    </div>
  )
}
