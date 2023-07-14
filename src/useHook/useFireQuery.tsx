import { worksCollection } from '@/libs/firebase'
import { WorkProps } from '@/libs/types'
import { onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const useFireQuery = () => {
  const [work, setWork] = useState<WorkProps[] | null>(null)
  useEffect(() => {
    const q = query(worksCollection)
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsArr: WorkProps[] = []
      querySnapshot.forEach((doc) => {
        itemsArr.push({
          _id: doc.id,
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
