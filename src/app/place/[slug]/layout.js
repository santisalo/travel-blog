import getPlace from '@/api/getPlace'
import HeaderPlace from '@/components/place/header/HeaderPlace'
import { Link } from 'next-view-transitions'

export default async function PlaceLayout({children, params}) {

  const place = await getPlace(params.slug)

  return (
    <>
    <header>
        <HeaderPlace actualPlace={place} />
    </header>
    <main>{children}</main>
    <footer className='text-center'>
      <Link href={'/'}>Back to Home</Link>
    </footer>
    </>
  )
}
