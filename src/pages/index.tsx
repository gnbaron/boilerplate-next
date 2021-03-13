type Props = {
  title: string
}

export default function Home({ title = 'Hello Next.js' }: Props) {
  return <h1>{title}</h1>
}
