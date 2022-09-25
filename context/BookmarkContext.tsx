import { createContext, ReactNode, useContext, useState } from "react"

type BookmarkProviderProps = {
  children: ReactNode
}

const BookmarkContext = createContext({})

export function useBookmarkContext() {
  return useContext(BookmarkContext)
}

export function BookmarkProvider({ children }: BookmarkProviderProps) {
  const [bookmarkedJobs, setBookmarkedJobs] = useState<any>([])

  const addBookmarkedJobs = (inputJob: any) => {
    const isFoundExistedJobInState =
      bookmarkedJobs.find((stateJob) => stateJob?.id === inputJob?.id) === null
    if (isFoundExistedJobInState) {
      setBookmarkedJobs([...bookmarkedJobs, inputJob])
    }
  }

  const removeBookmarkedJobs = (inputJob: any) => {
    const removedResult = bookmarkedJobs.filter(
      (stateJob) => stateJob?.id === inputJob?.id
    )
    setBookmarkedJobs(removedResult)
  }

  return (
    <BookmarkContext.Provider
      value={{ addBookmarkedJobs, removeBookmarkedJobs, bookmarkedJobs }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}
