import { useRouter } from 'next/router'
import Seo from '../../components/Seo'

export default function Detail({ params }) {
  const router = useRouter()
  console.log(router)
  const [title, id] = params || []

  return (
    <div>
      <Seo title={title} />
      <h4>{title || 'Loading...'}</h4>
    </div>
  )
}

export function getServerSideProps({ query: { params } }) {
  return {
    props: {
      params,
    },
  }
}
