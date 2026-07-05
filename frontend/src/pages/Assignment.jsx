import { useParams } from 'react-router-dom'

function Assignment() {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-navy">Assignment Detail</h1>
      <p className="text-sm text-gray-500 mt-1">Tugas ID: {id}</p>
    </div>
  )
}

export default Assignment