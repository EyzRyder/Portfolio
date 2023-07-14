import { worksCollection } from '@/libs/firebase'
import { onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

interface WorkProps {
  id: string
  url?: string | null
  title: string
  descriptions: string
  image: string
  role: string
  teck: string[]
  githubRep?: string | null
}

const useFireQuery = () => {
  const [work, setWork] = useState<WorkProps[] | null>(null)
  useEffect(() => {
    const q = query(worksCollection)
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsArr: WorkProps[] = []
      querySnapshot.forEach((doc) => {
        itemsArr.push({
          id: doc.id,
          url: doc.data().url,
          title: doc.data().title,
          descriptions: doc.data().descriptions,
          image: doc.data().image,
          role: doc.data().role,
          teck: doc.data().teck,
          githubRep: doc.data().githubRep,
        })
      })
      // console.log(itemsArr)
      setWork(itemsArr)
      return () => unsubscribe()
    })
  }, [])

  return work
}

export default useFireQuery
