import Image from "next/image"

export default function Foto() {
  return (
    <div className="p-0  m-0 px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
        <Image width={'150px'} height={'150px'} src="/images/i-pict-1.png" alt="Foto 1"/>
        <Image width={'150px'} height={'150px'} src="/images/i-pict-2.png" alt="Foto 2"/>
        <Image width={'150px'} height={'150px'} src="/images/i-pict-3.png" alt="Foto 3"/>
    </div>
  )
}
