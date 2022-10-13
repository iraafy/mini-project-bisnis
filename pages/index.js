import Berita from "../components/Berita"
import Foto from "../components/foto"
import Infografis from "../components/Infografis"

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-20">
        < Foto/>
        <h2 className="text-blue-700 pt-8 font-bold text-2xl">
          INFOGRAFIS
        </h2>
        < Infografis/>
        <h2 className="text-blue-700 pt-8 font-bold text-2xl">
          BERITA LAINNYA
        </h2>
        < Berita/>
      </div>
    </>
  )
}
