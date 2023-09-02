import Image from "next/image";

const products: {name: string; price: string; category: string; image: string; }[] = [
  { name: 'Example product 1', price: '1ETH', category: 'Deep blue', image: require('./images/image1.jpg') },
  { name: 'Example product 2', price: '1ETH', category: 'Deep blue', image: require('./images/image1.jpg') },
  { name: 'Example product 3', price: '1ETH', category: 'Deep blue', image: require('./images/image1.jpg') },
  { name: 'Example product 4', price: '1ETH', category: 'Deep blue', image: require('./images/image1.jpg') },
  { name: 'Example product 5', price: '1ETH', category: 'Deep blue', image: require('./images/image1.jpg') },
]
export default function DashboardBody() {
  return(
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <hr/>
        <div className="mx-auto bg-white w-full">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-0xl">
              <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {products.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="rounded overflow-hidden shadow-lg">

                    <Image className="w-full h-60 hover:zinc-950"
                           src={item.image}
                           width={500}
                           height={400}
                           alt="Picture of the author" />
                    <div className="px-2 py-4 flex w-full relative p-4 bg-zinc-50 justify-between">
                      <div className="text-zinc-950 font-medium">{item.name}</div>
                      <div className="text-zinc-950 font-medium">{item.price}</div>
                    </div>
                    <div className="px-2 py-2 flex w-full relative p-4 bg-zinc-50 justify-between">
                      <div className="text-zinc-500 text-xs">{item.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}