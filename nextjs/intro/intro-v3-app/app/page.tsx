import NewToDoForm from "@/components/NewToDoForm"

const getData = async () => {
  // can talk directly to db here
  await new Promise((res) => setTimeout(() => res(0), 2000))
  return { data: [1, 2, 3] }
}

const Home = async () => {
  const data = await getData()
  console.log(data.data)
  console.log(typeof data.data)
  return data && (
    <div>
      <NewToDoForm />
      {/* {data.data.map(data => (
        <div key={data.toString()}>
          {data}
        </div>
      ))} */}
    </div>
  )
}jj

export default Home
